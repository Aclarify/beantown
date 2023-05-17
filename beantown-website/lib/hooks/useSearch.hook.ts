import { useInfiniteQuery } from 'react-query';
import { BlogPosts } from '@typing/gql/graphql';
import { config } from 'lib/config';
import { algoliaClient } from 'lib/clients/algolia/algolia.client';

const index = algoliaClient.initIndex(config.algoliaBlogSearchIndexName);

export type SearchResult = {
	hits: BlogPosts[];
	nbPages: number;
};

const useSearch = (
	query: string,
	page = 0,
	maxPerPage = 9,
	filters: string[] = [],
	loadMore = false
) => {
	console.log(
		'query',
		query,
		'page',
		page,
		'maxPerPage',
		maxPerPage,
		'filters',
		filters,

		'loadMore',
		loadMore
	);

	const { data, fetchNextPage, hasNextPage } = useInfiniteQuery<SearchResult>(
		['search', query, filters],
		async ({ pageParam = 0 }): Promise<SearchResult> => {
			const searchTerm = [query, ...filters].join(', ');
			const searchResults = await index.search(searchTerm, {
				hitsPerPage: maxPerPage,
				page: pageParam,
				sumOrFiltersScores: true,
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
