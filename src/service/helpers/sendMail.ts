import nodemailer from "nodemailer";
import { MAIL_HOST, MAIL_PASS, MAIL_PORT, MAIL_USER } from "../env";

const transporter = nodemailer.createTransport({
  host: MAIL_HOST,
  port: Number(MAIL_PORT),
  secure: true,
  auth: {
    user: MAIL_USER,
    pass: MAIL_PASS,
  },
});

export const sendMail = (email, password) => {
  return transporter
    .sendMail({
      from: `"Онлайн чудо школа" <${MAIL_USER}>`,
      to: "Makso-87@yandex.ru",
      subject: "Данные Вашей учетной записи",
      html: `
        <div>Добро пожаловать в нашу Чудо школу!</div> 
        <div>Ваши данные для входа в личный кабинет ниже. Рекомендуем Вам сразу сменить пароль.</div>
        <div>Логин: ${email}</div>
        <div>Пароль: ${password}</div>
      `,
    })
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};
