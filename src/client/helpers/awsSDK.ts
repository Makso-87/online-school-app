import aws from 'aws-sdk';
import {
  AWS_ACCESS_KEY_ID,
  AWS_DEFAULT_REGION,
  AWS_ENDPOINT,
  AWS_SECRET_ACCESS_KEY,
} from '../../service/env';

const s3 = new aws.S3({
  signatureVersion: 'v4',
  accessKeyId: AWS_ACCESS_KEY_ID,
  secretAccessKey: AWS_SECRET_ACCESS_KEY,
  endpoint: AWS_ENDPOINT,
  s3ForcePathStyle: true,
  region: AWS_DEFAULT_REGION,
  apiVersion: 'latest',
});

export { s3 };
