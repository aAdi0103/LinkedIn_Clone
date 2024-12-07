import { MailtrapClient } from "mailtrap";
import dotenv from "dotenv"

dotenv.config();;
const TOKEN =process.env.MAILTRAP_KEY;  

export const mailtrapClient = new MailtrapClient({
  token: TOKEN,
});

export const sender = {
  email: process.env.MAIL_FROM,
  name: process.env.MAIL_FROMNAME,
};
const recipients = [
  {
    email: "ak0755591@gmail.com",
  }
];

client
  .send({
    from: sender,
    to: recipients,
    subject: "You are awesome!",
    text: "Congrats for sending test email with Mailtrap!",
    category: "Integration Test",
  })
  .then(console.log, console.error);