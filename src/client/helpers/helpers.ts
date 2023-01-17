import { AWS_BUCKET, AWS_FILE_ACCESS_DOMAIN } from '../../service/env';

export const getOBSFileUrl = (link) => {
  const url = new URL(link);
  const clearedPath = url.pathname.replace(`${AWS_BUCKET}/`, '');
  return `${AWS_FILE_ACCESS_DOMAIN}${clearedPath}`;
};
