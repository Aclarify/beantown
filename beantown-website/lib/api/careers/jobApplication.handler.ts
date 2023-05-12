import { JobApplicationFormDto } from '@typing/api/dto';
import { sendEmailNotification } from '../services/mail.service';
import {
	insertJobApplicationToSanity,
	uploadFileToSanity,
} from '../services/sanity.service';
import { File } from 'formidable';

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
	createJobApplicationDto: JobApplicationFormDto,
	file: File
) => {
	try {
		console.log('createJobApplicationDto', createJobApplicationDto);
		// TODO: Add validation rules for the event body

		// Upload resume to Sanity
		const resumeURL = await uploadFileToSanity(file);
		if (!resumeURL) {
			throw new Error('Failed to upload resume');
		}

		// Insert job application to Sanity or MongoDB
		const rsp1 = await insertJobApplicationToSanity(
			createJobApplicationDto,
			resumeURL
		);
		if (!rsp1) {
			throw new Error('Failed to insert job application to Sanity');
		}
		const notificationRsp = await sendEmailNotification(
			createJobApplicationDto,
			resumeURL
		);
		if (!notificationRsp) {
			return {
				message:
					'Unable to send email notification but resumve saved successfully',
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
