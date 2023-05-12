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
	categories: string[] = [],
	loadMore = false
) => {
	console.log(
		`QUER: ${query}, PAGE: ${page}, MAX: ${maxPerPage}, FILTERS: ${filters}, CATEGORIES: ${categories.map(
			(serviceCategory) => `blogTags.name:${serviceCategory}`
		)}, LOAD: ${loadMore}`
	);
	const { data, fetchNextPage, hasNextPage } = useInfiniteQuery<SearchResult>(
		['search', query, categories, filters],
		async ({ pageParam = 0 }): Promise<SearchResult> => {
			const searchResults = await index.search(query, {
				hitsPerPage: maxPerPage,
				page: pageParam,
				facets: ['blogTitle', 'blogContent.children.text', 'blogTags.name'],
				facetFilters: [
					categories.map(
						(serviceCategory) => `blogTags.name:${serviceCategory}`
					),
				],
				filters: filters
					.map((filterTerm) => {
						return `blogTitle:${filterTerm} OR blogContent.children.text:${filterTerm} OR blogTags.name:${filterTerm}`;
					})
					.join(' OR '),
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
