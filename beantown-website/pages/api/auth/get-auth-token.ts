// Create a Next.js API route for creating a booking with ServiceTitan
// See: https://nextjs.org/docs/api-routes/introduction
import { getAccessTokenForFileUpload } from '@lib/api/auth/getToken.handler';
import type { NextApiRequest, NextApiResponse } from 'next';

const sendMethodNotAllowed = (req: NextApiRequest, res: NextApiResponse) => {
	res.setHeader('Allow', ['GET']);
	res.status(405).end(`Method ${req.method} Not Allowed`);
};

const handleGet = async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		const rsp = await getAccessTokenForFileUpload();
		res.status(200).json(rsp);
	} catch (error) {
		console.error(error);
		res.status(500).json({ success: false });
	}
};

const methodHandlers: Record<
	string,
	(req: NextApiRequest, res: NextApiResponse) => Promise<void>
> = {
	GET: handleGet,
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
