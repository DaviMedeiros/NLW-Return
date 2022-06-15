"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodemailerMailAdapter = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const transport = nodemailer_1.default.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "d6608e3e0ad6da",
        pass: "334ac266b97580"
    }
});
class NodemailerMailAdapter {
    async sendMail({ subject, body }) {
        await transport.sendMail({
            from: 'Equipe Feedget <oi@gmail.com>',
            to: 'Davi Medeiros <davi_dmds@hotmail.com>',
            subject,
            html: body
        });
    }
    ;
}
exports.NodemailerMailAdapter = NodemailerMailAdapter;
