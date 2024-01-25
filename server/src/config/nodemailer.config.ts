import nodemailer from 'nodemailer';

interface EmailConfig {
	host: string | undefined;
	port: number;
	secure: boolean;
	auth: {
		user: string | undefined;
		pass: string | undefined;
	};
}

export async function nodemailerConfig(): Promise<EmailConfig> {

	const nodemailerConfig: EmailConfig = {
		host: process.env.EMAIL_HOST,
		port: Number(process.env.EMAIL_PORT),
		secure: process.env.EMAIL_SECURE === 'true',
		auth: {
			user: process.env.EMAIL_USER,
			pass: process.env.EMAIL_PASS
		}
	};

	if (process.env.NODE_ENV === 'development') {
		const testAccount = await nodemailer.createTestAccount();
		nodemailerConfig.auth = {
			user: testAccount.user,
			pass: testAccount.pass
		};
	}

	return nodemailerConfig;
}
