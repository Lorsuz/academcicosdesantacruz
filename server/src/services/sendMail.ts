import nodemailer from 'nodemailer';
import { nodemailerConfig } from '../config/nodemailerConfig.js';

export async function sendEmailFromFormContact(data): Promise<boolean> {
	try {
		const config = await nodemailerConfig();
		console.log(config);

		const transporter = nodemailer.createTransport(config);

		const info = await transporter.sendMail({
			from: data.email,
			to: process.env.EMAIL_USER,
			subject: data.subject,
			text: `Olá! Me chamo ${data.name} com o número de telefone ${data.tell} e gostaria de entrar em contato para falar sobre: ${data.subject}. Desde já agradeço! E confirmo que li e aceito os termos de uso e a política de privacidade do site e estou de acordo com todos.`
			// html: `<h1>Conta criada com sucesso.</h1><p>Acesse o aplicativo.</p>`
		});

		if (process.env.NODE_ENV === 'development') {
			console.log(`Send email: ${nodemailer.getTestMessageUrl(info)}`);
		}

		return true;
	} catch (err: unknown) {
		if (err instanceof Error) {
			console.error('Error sending email:', err);
		} else {
			console.error('Unexpected error type during email sending:', err);
		}
		return false;
	}
}
