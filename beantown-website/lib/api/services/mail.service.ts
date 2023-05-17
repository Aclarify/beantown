import nodemailer from 'nodemailer';
import { JobApplicationFormDto } from '@typing/api/dto';

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
	jobApplication: JobApplicationFormDto,
	resumeURL: string
): Promise<boolean> => {
	const { firstName, lastName, email, phoneNumber, jobOption } = jobApplication;

	// TODO: Move the email template to a separate file or use templates from MailProvider
	const message = {
		from: process.env.SMTP_FROM_ADDRESS,
		to: process.env.SMTP_TO_ADDRESS,
		subject: `New Job Application for the post of ${jobOption}`,
		text: `
    Dear HR Team,

    A new job application has been received for the ${jobOption} position. Please find the candidate's information below:

    Candidate's Name: ${firstName} ${lastName}
    Position Applied For: ${jobOption}
    Email: ${email}
    Phone Number: ${phoneNumber}
    Resume: ${resumeURL}

    Please take the necessary steps to review the candidate's application and follow up with them as appropriate.

    Thank you for your attention to this matter.

    Best regards,
    Beantown Team
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
