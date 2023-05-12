import {
	createClient,
	type ClientConfig,
	SanityDocument,
} from '@sanity/client';
import { JobApplicationFormDto } from '@typing/api/dto';
import { File } from 'formidable';
import fs from 'fs';

const config: ClientConfig = {
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
	useCdn: false, // set to `true` to fetch from edge cache
	apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION, // or today's date for latest
	token: process.env.SANITY_READ_WRITE_TOKEN,
};
const client = createClient(config);

export const insertJobApplicationToSanity = async (
	jobApplication: JobApplicationFormDto,
	resumeURL = ''
): Promise<SanityDocument> => {
	const {
		firstName,
		lastName,
		address1,
		address2,
		city,
		state,
		zipCode,
		email,
		phoneNumber,
		experience,
		jobOption,
		jobDesired,
	} = jobApplication;

	try {
		const doc = await client.create({
			_type: 'submittedApplications',
			name: firstName + ' ' + lastName,
			address1,
			address2,
			city,
			state,
			zipCode,
			email,
			phoneNumber,
			jobPosition: jobOption,
			employmentDesired: jobDesired,
			aboutApplicant: experience,
			resume: resumeURL,
		});
		return doc;
	} catch (error) {
		console.error(error);
		throw new Error('Failed to insert document');
	}
};

export const uploadFileToSanity = async (file: File): Promise<string> => {
	try {
		const stream = fs.createReadStream(file.filepath);
		const doc = await client.assets.upload('file', stream, {
			filename: file.newFilename,
		});
		if (!doc) {
			throw new Error('Failed to upload file');
		}
		return doc.url;
	} catch (error) {
		console.error(error);
		throw new Error('Failed to upload file');
	}
};
