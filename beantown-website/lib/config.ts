export const config = {
	/**
	 * Find your project ID and dataset in `sanity.json` in your studio project.
	 * These are considered “public”, but you can use environment variables
	 * if you want differ between local dev and production.
	 *
	 * https://nextjs.org/docs/basic-features/environment-variables
	 **/
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
	apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION, // or today's date for latest
	token: process.env.NEXT_PUBLIC_SANITY_API_READ_TOKEN,
	/**
	 * Set useCdn to `false` if your application require the freshest possible
	 * data always (potentially slightly slower and a bit more expensive).
	 * Authenticated request (like preview) will always bypass the CDN
	 **/
	useCdn: process.env.NODE_ENV === 'production',
	/**
	 * MapBox accesstoken for address research
	 **/
	mapBoxAccessToken: process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN,
	/**
	 * Algolia
	 **/
	algoliaAppId: process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || '',
	algoliaSearchApiKey: process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY || '',
	algoliaWriteApiKey: process.env.ALGOLIA_WRITE_API_KEY || '',
	algoliaBlogSearchIndexName:
		process.env.NEXT_PUBLIC_ALGOLIA_BLOG_SEARCH_INDEX_NAME || '',
	/**
	 * Sanity Webhook secret key
	 */
	sanityWebhookSecret: process.env.SANITY_WEBHOOK_SECRET || '',
	/**
	 * feture flag
	 */
	featureFlag: process.env.NEXT_PUBLIC_FEATURE_FLAG || '',
};
