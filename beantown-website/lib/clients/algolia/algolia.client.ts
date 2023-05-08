import algoliasearch from 'algoliasearch';
import { config } from 'lib/config';

export const algoliaClient = algoliasearch(
	config.algoliaAppId,
	config.algoliaSearchApiKey
);

export const algoliaAdminClient = algoliasearch(
	config.algoliaAppId,
	config.algoliaWriteApiKey
);
