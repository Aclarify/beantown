// Create a Next.js API route for creating a booking with ServiceTitan
// See: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { applyJob } from '@lib/api/careers';

const sendMethodNotAllowed = (req: NextApiRequest, res: NextApiResponse) => {
	res.setHeader('Allow', ['POST']);
	res.status(405).end(`Method ${req.method} Not Allowed`);
};

const handlePost = async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		await applyJob(req.body);
		res.status(200).json({
			success: true,
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({ success: false });
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
