// Read env variables from .env file (at the project root)
import "dotenv/config";

export const MAIL_HOST = process.env.MAIL_HOST;
export const MAIL_PORT = process.env.MAIL_PORT;
export const MAIL_USER = process.env.MAIL_USER;
export const MAIL_PASS = process.env.MAIL_PASS;

export const DB_TYPE = "postgres";
export const DB_HOST = process.env.DB_HOST;
export const DB_LOGIN = process.env.DB_LOGIN;
export const DB_PASSWORD = process.env.DB_PASSWORD;
export const DB_NAME = process.env.DB_NAME;
