/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextApiRequest, NextApiResponse } from 'next';
import sanityClient from 'lib/clients/sanity/sanity.client';
import indexer from 'sanity-algolia';
import { algoliaAdminClient } from 'lib/clients/algolia/algolia.client';
import { config } from 'lib/config';
import { SIGNATURE_HEADER_NAME, isValidSignature } from '@sanity/webhook';

export const BLOG_POSTS_PROJECTION = /* groq */ `{
  	_type,
    _rev,
    _id,
    "objectID": _id,
    blogTitle,  
    blogImage {
      asset->{_id, _key, url, altText},
    },
    blogSlug {
      current
    },
	"blogContentRaw": blogContent,
    blogTags [] -> {
      _id, name, category
    },
    publishedAt,
}`;

const handlePost = async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		// SecretKey-Signature security to prevent others from hitting this API
		const signature = req.headers[SIGNATURE_HEADER_NAME] as string;
		// Read the body into a string
		const body = JSON.stringify(req.body);
		if (!isValidSignature(body, signature, config.sanityWebhookSecret)) {
			return res.status(401).json({ success: false });
		}

		const index = algoliaAdminClient.initIndex(
			config.algoliaBlogSearchIndexName
		);
		const sanityAlgolia = indexer(
			{
				blogPosts: {
					index,
					projection: BLOG_POSTS_PROJECTION,
				},
			},
			(document: any) => document
		);

		console.time('Syncing documents algolia to index:');
		await sanityAlgolia.webhookSync(sanityClient, req.body);
		console.timeEnd('Syncing documents algolia to index:');

		res.status(200).json({ success: true });
	} catch (error) {
		console.error(error);
		res.status(500).json({ success: false });
	}
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const { method } = req;

	switch (method) {
		case 'POST':
			await handlePost(req, res);
			break;
		default:
			res.setHeader('Allow', ['POST']);
			res.status(405).json({ success: false });
			break;
	}
};

export default handler;
