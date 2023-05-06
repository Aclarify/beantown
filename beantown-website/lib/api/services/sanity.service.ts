import {
	createClient,
	type ClientConfig,
	SanityDocument,
} from '@sanity/client';
import { CreateJobApplicationInboundDto } from '../careers/jobApplication.handler';

const config: ClientConfig = {
	projectId: process.env.SANITY_PROJECT_ID,
	dataset: process.env.SANITY_DATASET,
	useCdn: false, // set to `true` to fetch from edge cache
	apiVersion: process.env.SANITY_API_VERSION, // or today's date for latest
	token: process.env.SANITY_READ_WRITE_TOKEN,
};
// const client = createClient(config);
const client: any = {};

export const insertJobApplicationToSanity = async (
	jobApplication: CreateJobApplicationInboundDto
): Promise<SanityDocument> => {
	const { name, contactInfo } = jobApplication;
	return {
		_type: 'jobApplication',
		name,
		email: contactInfo?.email,
		phoneNumber: contactInfo?.phoneNumber,
	} as any;

	// try {
	// 	const doc = await client.create({
	// 		_type: 'jobApplication',
	// 		name,
	// 		email: contactInfo?.email,
	// 		phoneNumber: contactInfo?.phoneNumber,
	// 	});
	// 	return doc;
	// } catch (error) {
	// 	console.error(error);
	// 	throw new Error('Failed to insert document');
	// }
};
