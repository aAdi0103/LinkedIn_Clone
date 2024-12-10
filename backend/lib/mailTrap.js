import { MailtrapClient } from "mailtrap";
import dotenv from "dotenv"

dotenv.config();

const TOKEN =process.env.MAILTRAP_KEY;  

export const mailtrapClient = new MailtrapClient({
  token: TOKEN,
});

export const sender = {
  email: process.env.MAIL_FROM,
  name: process.env.MAIL_FROM_NAME,
};
