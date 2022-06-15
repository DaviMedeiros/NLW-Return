import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "d6608e3e0ad6da",
    pass: "334ac266b97580"
  }
});

export class NodemailerMailAdapter implements MailAdapter{
  async sendMail ({ subject, body }: SendMailData){
    await transport.sendMail({
      from: 'Equipe Feedget <oi@gmail.com>',
      to: 'Davi Medeiros <davi_dmds@hotmail.com>',
      subject,
      html: body

    }) 
  };
}