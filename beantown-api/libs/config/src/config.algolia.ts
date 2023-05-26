export type AlgoliaConfig = {
  algoliaConfig: {
    algoliaAppId: string;
    algoliaSearchApiKey: string;
    algoliaWriteApiKey: string;
  };
  algoliaCollections: {
    algoliaBlogSearchIndexName: string;
  };
};

export const algoliaConfig: () => AlgoliaConfig = () => ({
  algoliaConfig: {
    algoliaAppId: process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || '',
    algoliaSearchApiKey: process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY || '',
    algoliaWriteApiKey: process.env.ALGOLIA_WRITE_API_KEY || '',
  },
  algoliaCollections: {
    algoliaBlogSearchIndexName:
      process.env.NEXT_PUBLIC_ALGOLIA_BLOG_SEARCH_INDEX_NAME || '',
  },
});
