import { useQuery } from 'react-query';
import { BlogPosts } from '@typing/gql/graphql';
import algoliasearch from 'algoliasearch/lite';
import { config } from 'lib/config';

const searchClient = algoliasearch(
	config.algoliaAppId,
	config.algoliaSearchApiKey
);
const index = searchClient.initIndex(config.algoliaBlogSearchIndexName);

type SearchResult = {
	hits: BlogPosts[];
	nbPages: number;
};

const useSearch = (
	query: string,
	page: number,
	maxPerPage = 9,
	tags: string[] = []
) => {
	const { data } = useQuery<SearchResult>(
		['search', query, tags],
		async (): Promise<SearchResult> => {
			const searchResults = await index.search(query, {
				hitsPerPage: maxPerPage,
				page: page,
				facetFilters: [tags.map((tag) => `blogTags.name:${tag}`)], // apply facet filters based on selected tags
			});
			return {
				hits: searchResults.hits as BlogPosts[],
				nbPages: searchResults.nbPages,
			};
		},
		{
			refetchOnWindowFocus: false,
			staleTime: Infinity,
			keepPreviousData: true, // keep previous data until new data is available
		}
	);
	return data
		? { hits: data.hits, nbPages: data.nbPages }
		: { hits: [], nbPages: 0 };
};

export default useSearch;
