import { createClient } from 'next-sanity';

import { config } from '../../config';

if (!config.projectId) {
	throw Error('The Project ID is not set. Check your environment variables.');
}

export const client = createClient({
	...config,
	token: process.env.NEXT_PUBLIC_SANITY_API_WRITE_TOKEN,
});

export const previewClient = createClient({
	...config,
	useCdn: false,
});

export default client;
