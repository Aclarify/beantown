import { createAlgoliaRecord } from '@lib/api/blog/createAlgoliaRecord.handler';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const { method } = req;

	switch (method) {
		case 'POST':
			await createAlgoliaRecord(req, res);
			break;
		default:
			res.setHeader('Allow', ['POST']);
			res.status(405).json({ success: false });
			break;
	}
};

export default handler;
