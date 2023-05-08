import { NextApiRequest, NextApiResponse } from 'next';
import { increasePostViews } from 'lib/api/blog/increase-views.handler';

const handlePost = async (req: NextApiRequest, res: NextApiResponse) => {
	const { slug } = req.query;

	if (!slug) {
		res.status(400).json({ success: false, message: 'Missing slug' });
		return;
	}
	try {
		await increasePostViews(slug as string);
		res.status(200).json({ success: true });
	} catch (error) {
		console.error(error);
		res.status(500).json({ success: false });
	}
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { method } = req;

	switch (method) {
		case 'POST':
			await handlePost(req, res);
			break;

		default:
			res.setHeader('Allow', ['POST']);
			res
				.status(405)
				.json({ success: false, message: `Method ${method} Not Allowed` });
			break;
	}
}
