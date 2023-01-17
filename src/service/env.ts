// Read env variables from .env file (at the project root)
import 'dotenv/config';

export const MAIL_HOST = process.env.MAIL_HOST;
export const MAIL_PORT = process.env.MAIL_PORT;
export const MAIL_USER = process.env.MAIL_USER;
export const MAIL_PASS = process.env.MAIL_PASS;

export const SERVICE_HOST = process.env.SERVICE_HOST;

export const DB_TYPE = 'postgres';
export const DB_HOST = process.env.DB_HOST;
export const DB_LOGIN = process.env.DB_LOGIN;
export const DB_PASSWORD = process.env.DB_PASSWORD;
export const DB_NAME = process.env.DB_NAME;

export const AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID || 'OWSH2RK4VFBOWEEWGQXV';
export const AWS_SECRET_ACCESS_KEY =
  process.env.AWS_SECRET_ACCESS_KEY || 'jxHLdksIygACehHxaXjuDpfHFCvz9PslSZlZV0CV';
export const AWS_BUCKET = process.env.AWS_BUCKET || 'online-school-app-bucket';
export const AWS_DEFAULT_REGION = process.env.AWS_DEFAULT_REGION || 'ru-1';
export const AWS_ENDPOINT = process.env.AWS_ENDPOINT || 'obs.ru-moscow-1.hc.sbercloud.ru';
export const AWS_FILE_ACCESS_DOMAIN =
  process.env.AWS_FILE_ACCESS_DOMAIN ||
  'https://online-school-app-bucket.obs.ru-moscow-1.hc.sbercloud.ru';
