import classes from './Avatar.module.scss';
import { useRef } from 'react';
import { AWS_BUCKET } from '../../../../service/env';
import { s3 } from '../../../helpers/awsSDK';
import { graphQLClient } from '../../../helpers/graphQlClient';
import { updateUser } from '../../../graphql/mutations/updateUser';
import userStore from '../../../store/userStore';
import { getOBSFileUrl } from '../../../helpers/helpers';
import { observer } from 'mobx-react';

export const Avatar = observer((props) => {
  const ref = useRef(null);
  const { img = '', allowChange = false } = props;
  const { id, setUserData, firstName, lastName, middleName, phoneNumber } = userStore;

  const onClick = (e) => {
    e.preventDefault();
    ref.current.click();
  };

  const onChange = async (e) => {
    e.preventDefault();
    const [file] = e.target.files;
    const formData = new FormData();
    formData.append('file', file, file.name);
    const path = `images/avatars/${file.name}`;

    const uploadResult = await s3
      .upload({
        Bucket: AWS_BUCKET,
        ACL: 'public-read',
        Key: path,
        Body: file,
      })
      .promise()
      .then((result) => result)
      .catch((e) => console.error(e));

    const { updateUser: updatedUser } = await graphQLClient.request(updateUser, {
      input: {
        id,
        firstName,
        lastName,
        middleName,
        phoneNumber,
        avatar: getOBSFileUrl(uploadResult?.Location),
      },
    });

    setUserData({ ...updatedUser });
  };

  return (
    <div className={classes.Avatar}>
      <figure>
        <div className={classes.ImgContainer}>
          <div className={classes.Img} style={{ backgroundImage: `url(${img})` }} />

          {allowChange ? (
            <div className={classes.DownloadOverlay}>
              <button onClick={onClick}>
                Обновить <br /> портрет
              </button>
              <input ref={ref} onChange={onChange} type='file' />
            </div>
          ) : null}
        </div>
      </figure>
    </div>
  );
});
