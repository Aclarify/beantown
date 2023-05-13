import { useInfiniteQuery } from 'react-query';
import { BlogPosts } from '@typing/gql/graphql';
import { config } from 'lib/config';
import { algoliaClient } from 'lib/clients/algolia/algolia.client';
import { SearchResult } from './useSearch.hook';

const index = algoliaClient.initIndex(config.algoliaBlogSearchIndexName);

const useSearchByCategory = (
	maxPerPage = 9,
	categories: string[] = [],
	objectIdToExclude?: string
) => {
	const { data, fetchNextPage, hasNextPage } = useInfiniteQuery<SearchResult>(
		['search', categories],
		async ({ pageParam = 0 }): Promise<SearchResult> => {
			const searchResults = await index.search('', {
				hitsPerPage: maxPerPage,
				page: pageParam,
				facets: ['blogTags.name'],
				facetFilters: [
					categories.map(
						(serviceCategory) => `blogTags.name:${serviceCategory}`
					),
				], // apply facet filters based on selected tags
				filters: objectIdToExclude
					? `NOT objectID:${objectIdToExclude}`
					: undefined,
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
		hits: hits,
		// Return the total number of pages of search results
		nbPages,
		// Return a function to load more search
		loadMore: fetchNextPage,
		// Return a boolean to know wether we have next page to load
		hasNextPage: hasNextPage ?? false,
	};
};

export default useSearchByCategory;
