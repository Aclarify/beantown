import sanityClient from 'lib/clients/sanity/sanity.client';
import indexer from 'sanity-algolia';
import { algoliaAdminClient } from 'lib/clients/algolia/algolia.client';
import { config } from 'lib/config';
import { SIGNATURE_HEADER_NAME, isValidSignature } from '@sanity/webhook';
import { NextApiRequest, NextApiResponse } from 'next';
import { BLOG_POSTS_PROJECTION } from './blogPosts.groq';
import { summarizeBlog } from '../services/openAI/openAi.service';
import { rest } from 'lodash';

export const createAlgoliaRecord = async (
	req: NextApiRequest,
	res: NextApiResponse
) => {
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
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			async (document: any) => {
				const publishedAt = new Date().toISOString();
				const publishedAtTimestamp = Math.floor(Date.now() / 1000);
				const summary = await summarizeBlog(document.blogContent);
				const updatedDoc = {
					slug: document.blogSlug.current,
					title: document.blogTitle,
					tags: document.blogTags.map((tag: any) => tag.category),
					publishedAt,
					publishedAtTimestamp,
					summary,
				};
				return updatedDoc;
			}
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
