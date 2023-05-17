// Create a Next.js API route for creating a booking with ServiceTitan
// See: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import formidable, { Files, Fields, File } from 'formidable';

import { applyJob } from '@lib/api/careers';
import { JobApplicationFormDto } from '@typing/api/dto';

const sendMethodNotAllowed = (req: NextApiRequest, res: NextApiResponse) => {
	res.setHeader('Allow', ['POST']);
	res.status(405).end(`Method ${req.method} Not Allowed`);
};

const handlePost = async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		const form = new formidable.IncomingForm();
		const formData: {
			fields: Fields;
			files: Files;
		} = await new Promise((resolve, reject) => {
			form.parse(req, (err, fields, files) => {
				if (err) {
					console.error(err);
					reject(err);
				}
				resolve({
					fields,
					files,
				});
			});
		});
		if (!formData) {
			res.status(500).json({ error: 'Internal server error' });
			return;
		}
		console.log('Job application form data', formData);
		const { fields, files } = formData;
		console.log(files); // Access the uploaded file via the 'files' object
		await applyJob(
			fields as unknown as JobApplicationFormDto,
			files.file as File
		);
		res.status(200).json({ message: 'File uploaded successfully' });
		return;
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Internal server error' });
		return;
	}
};

const methodHandlers: Record<
	string,
	(req: NextApiRequest, res: NextApiResponse) => Promise<void>
> = {
	POST: handlePost,
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (!req.method) return sendMethodNotAllowed(req, res);

	return methodHandlers[req.method]
		? await methodHandlers[req.method](req, res)
		: sendMethodNotAllowed(req, res);
}

export const config = {
	api: {
		bodyParser: false,
	},
};
