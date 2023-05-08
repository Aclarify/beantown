import nodemailer from 'nodemailer';
import { CreateJobApplicationInboundDto } from '../careers/jobApplication.handler';

const transporter = nodemailer.createTransport({
	host: process.env.SMTP_HOST,
	port: Number(process.env.SMTP_PORT),
	secure: false,
	auth: {
		user: process.env.SMTP_USERNAME,
		pass: process.env.SMTP_PASSWORD,
	},
});

export const sendEmailNotification = async (
	jobApplication: CreateJobApplicationInboundDto
): Promise<boolean> => {
	const { name, contactInfo } = jobApplication;

	const message = {
		from: process.env.SMTP_FROM_ADDRESS,
		to: process.env.SMTP_TO_ADDRESS,
		subject: 'New Job Application',
		text: `
            Name: ${name}
            Email: ${contactInfo?.email}
            Phone: ${contactInfo?.phoneNumber}
        `,
	};

	try {
		await transporter.sendMail(message);
		return true;
	} catch (error) {
		console.error(error);
		return false;
	}
};
