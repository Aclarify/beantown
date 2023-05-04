import { insertJobApplicationToMongo } from '../services/db.service';
import { sendEmailNotification } from '../services/mail.service';
import { insertJobApplicationToSanity } from '../services/sanity.service';

export type Address = {
	address1: string;
	address2: string;
	city: string;
	state: string;
	zip: string;
	country: 'USA';
};

export type Contact = {
	phoneNumber: string;
	email: string;
};

export type JobDetail = {
	positionApplyingFor: string;
	employmentDesired: string;
	aboutApplicant: string;
	resumeURL: string;
};

export type CreateJobApplicationInboundDto = {
	name: string;
	externalId?: string;
	address?: Address;
	contactInfo: Contact;
	jobDetail?: JobDetail;
};

export const applyJob = async (
	createJobApplicationDto: CreateJobApplicationInboundDto
) => {
	try {
		console.log('createJobApplicationDto', createJobApplicationDto);
		// TODO: Add validation rules for the event body

		// Insert job application to Sanity or MongoDB
		const rsp1 = await insertJobApplicationToSanity(createJobApplicationDto);
		if (!rsp1) {
			throw new Error('Failed to insert job application to Sanity');
		}
		// Insert job application to Sanity or MongoDB
		const rsp2 = await insertJobApplicationToMongo(createJobApplicationDto);
		if (!rsp2) {
			throw new Error('Failed to insert job application to MongoDB');
		}

		const notificationRsp = await sendEmailNotification(
			createJobApplicationDto
		);
		if (!notificationRsp) {
			return {
				message: 'Unable to send notification. Please try again',
			};
		}

		return {
			message: `Job application created successfully`,
		};
	} catch (error) {
		console.error(error);
		throw new Error('Failed to create job application');
	}
};
