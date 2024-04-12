import nodemailer from 'nodemailer';
import { nodemailerConfig } from '../config/nodemailer.config.js';

export async function sendEmailFromFormContact(data: any): Promise<boolean> {
	try {
		const config = await nodemailerConfig();
		console.log(config);

		const transporter = nodemailer.createTransport(config);

		const info = await transporter.sendMail({
			from: data.email,
			to: process.env.ADMIN_EMAIL,
			subject: data.subject,
			text: `Olá! Me chamo ${data.name} com o número de telefone ${data.tell}. \n\n${data.subject}.\n\nDesde já agradeço! \n\nOBS: Confirmo que li e aceito os termos de uso e a política de privacidade da aplicação.`,
			// html: `
			// 	<p>Olá! Me chamo ${data.name} com o número de telefone ${data.tell}.</p>
			// 	<p>${data.subject}.</p>
			// 	<p>Desde já agradeço!</p>
			// 	<p>OBS: Confirmo que li e aceito os termos de uso e a política de privacidade da aplicação.</p>`
			
			html:`
			<!DOCTYPE html>
<html lang="en">
<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
				<style>
					body {
							font-family: Arial, sans-serif;
							margin: 0;
							padding: 0;
							background-color: #f0f0f0;
					}

					.container {
							width: 80%;
							max-width: 500px;
							min-width: 300px;
							margin: auto;
							padding: 20px;
							margin: 5% auto;
							padding: 20px;
							background-color: #fff;
							border-radius: 5px;
							box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
							text-align: center;
					}
					@media (max-width: 700px) {
						.container {
							width: 90%;
						}
					}

					h1 {
							font-size: 2rem;
							margin-bottom: 20px;
							color: #008025;
					}

					ul {
						list-style: none;
						padding: 0;
					}

					li {
						margin-bottom: 10px;
					}
					</style>
				<title>Uber Promotion</title>
</head>

				<body>
					<div class="container">
						<h1>Academicos de Santa Cruz</h1>
						<ul>
							<li>Nome: ${data.name}</li>
							<li>Email: ${data.email}</li>
							<li>Telefone: ${data.tell}</li>
						</ul>
						<p>${data.subject}</p>
					</div>
				</body>
				</html>
					`
		});

		if (process.env.NODE_ENV === process.env.DEVELOPMENT_KEY) {
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


export const verifyEmail = async (email: string, link: string) => {
	try{
		const config = await nodemailerConfig();
		const transporter = nodemailer.createTransport(config);

		await transporter.verify().then(async (success) => {
			if (success) {
				console.log('Server is ready to take our messages');
			}
		} );

		let info = await transporter.sendMail({
			from: process.env.ADMIN_EMAIL,
			to: email,
			subject: 'Verificação de Email',
			text: `Clique no link para verificar seu email: ${link}`,
			html: `
			<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
				<style>
					body {
							font-family: Arial, sans-serif;
							margin: 0;
							padding: 0;
							background-color: #f0f0f0;
					}

					.container {
							width: 80%;
							max-width: 500px;
							min-width: 300px;
							margin: auto;
							padding: 20px;
							margin: 5% auto;
							padding: 20px;
							background-color: #fff;
							border-radius: 5px;
							box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
							text-align: center;
					}

					h1 {
							font-size: 2rem;
							margin-bottom: 20px;
							color: #008025;
					}

					p {
							font-size: 1.2rem;
							line-height: 1.5;
							margin-bottom: 20px;
					}

					.button {
							display: inline-block;
							background-color: #008025;
							color: #fff;
							padding: 10px 20px;
							border-radius: 5px;
							text-decoration: none;
							transition: background-color 0.3s;
							font-size: 1.1rem;
					}

					.button:hover {
							background-color: #058226;
					}
				</style>
				<title>Uber Promotion</title>
</head>
				<body>
					<div class="container">
						<h1>Academicos de Santa Cruz</h1>
						<p>Clique no botão a seguir para verificar seu email.</p>
						<a class="button" href="${link}">Confirmar Email</a>
					</div>
				</body>
				</html>
		`
		});
		console.log('mail enviado com sucesso');
		if (process.env.NODE_ENV === process.env.DEVELOPMENT_KEY) {
			console.log(`Send email: ${nodemailer.getTestMessageUrl(info)}`);
		}
		

		return nodemailer.getTestMessageUrl(info);
	}catch(error){
		console.log(error);
	}
}
