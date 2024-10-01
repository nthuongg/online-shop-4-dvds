import { Injectable } from '@nestjs/common';
import * as nodeMailer from "nodemailer";

@Injectable()
export class MailService {

    async send(subject: string, html: string, receiver: string): Promise<void> {
        const transport = nodeMailer.createTransport({
            host: "mail.privateemail.com",
            port: 465,
            secure: true,
            auth: {
                user: "support@kiru.pro",
                pass: "i33tPqvMzF:XxdA"
            }
        });

        try {
            const info = await transport.sendMail({
                from: "OnlineShop4DVDS <support@kiru.pro>",
                to: receiver,
                subject: subject,
                html: html
            });

            console.log("Confirmation email is sent successfully. Message ID: " + info.messageId);

        } catch (err) {
            console.error(err);
        }
    }
}
