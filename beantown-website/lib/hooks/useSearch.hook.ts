import { useInfiniteQuery } from 'react-query';
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

// Define a custom hook called "useSearch" that takes several parameters:
// - query: the search query term
// - page: the current page number
// - maxPerPage: the maximum number of results to show per page
// - tags: an array of tags to filter the search results by
// - objectIdToExclude: the ID of a post to exclude from the search results (optional)
// - loadMore: a boolean indicating whether the "Load More" button has been clicked (default: false)
const useSearch = (
	query: string,
	page = 0,
	maxPerPage = 9,
	tags: string[] = [],
	objectIdToExclude?: string,
	loadMore = false
) => {
	const { data, fetchNextPage, hasNextPage } = useInfiniteQuery<SearchResult>(
		['search', query, tags],
		async ({ pageParam = 0 }): Promise<SearchResult> => {
			const searchResults = await index.search(query, {
				hitsPerPage: maxPerPage,
				page: pageParam,
				filters: objectIdToExclude
					? `NOT objectID:${objectIdToExclude}`
					: undefined,
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
			getNextPageParam: (lastPage, pages) => {
				if (lastPage.nbPages > pages.length) {
					return pages.length;
				}
				return undefined;
			},
		}
	);

	// Combine all hits from all pages into a single array
	const hits: BlogPosts[] = data?.pages?.flatMap((page) => page.hits) || [];
	// Get the total number of pages of search results
	const nbPages: number = data?.pages ? data.pages[0].nbPages : 0;

	return {
		// Return the first maxPerPage * (page + 1) hits if loadMore is true, else return the first maxPerPage hits
		hits: loadMore
			? hits.slice(0, maxPerPage * (page + 1))
			: hits.slice(0, maxPerPage),
		// Return the total number of pages of search results
		nbPages,
		// Return a function to load more search
		loadMore: fetchNextPage,
		// Return a boolean to know wether we have next page to load
		hasNextPage: hasNextPage ?? false,
	};
};

export default useSearch;
