import {
	createClient,
	type ClientConfig,
	SanityDocument,
} from '@sanity/client';
import { CreateJobApplicationInboundDto } from '../careers/jobApplication.handler';

const config: ClientConfig = {
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
	useCdn: false, // set to `true` to fetch from edge cache
	apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION, // or today's date for latest
	token: process.env.SANITY_READ_WRITE_TOKEN,
};
const client = createClient(config);

export const insertJobApplicationToSanity = async (
	jobApplication: CreateJobApplicationInboundDto
): Promise<SanityDocument> => {
	const { name, contactInfo, address, jobDetail } = jobApplication;

	try {
		const doc = await client.create({
			_type: 'submittedApplications',
			name,
			address1: address?.address1,
			address2: address?.address2,
			city: address?.city,
			state: address?.state,
			zipCode: address?.zip,
			email: contactInfo?.email,
			phoneNumber: contactInfo?.phoneNumber,
			jobPosition: jobDetail?.positionApplyingFor,
			employmentDesired: jobDetail?.employmentDesired,
			aboutApplicant: jobDetail?.aboutApplicant,
			resume: jobDetail?.resumeURL,
		});
		return doc;
	} catch (error) {
		console.error(error);
		throw new Error('Failed to insert document');
	}
};
