/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext, useEffect, useState } from 'react';
import { Categories } from '@typing/gql/graphql';
import { getCMSDocs } from '@typing/api/api';
import blogCategoriesQuery from '@lib/queries/organisms/get-blog-categories.query';
import WaveWrapper from 'components/molecules/wave-wrapper.molecule';
import topWave from 'public/images/blogs/blog-posts/blog-posts-top-wave.svg';
import bottomWave from 'public/images/blogs/blog-posts/blog-posts-bottom-wave.svg';
import BlogPostList from 'components/organisms/blog-post-list.organism';
import BlogFilters from 'components/organisms/blog-category-list.organism';
import BlogSearchInput from 'components/organisms/blog-search.organism';
import { SearchContext } from 'contexts/blogs/blog.context';
import useSearch from 'lib/hooks/useSearch.hook';
import { InstantSearch } from 'react-instantsearch-dom';
import { config } from '@lib/config';
import algoliasearch from 'algoliasearch';
import { GlobalContext } from 'contexts/global/global.context';
import { BlogsContentProps } from 'pages/blog';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';

const searchClient = algoliasearch(
	config.algoliaAppId,
	config.algoliaSearchApiKey
);

export default function BlogPosts() {
	// Get the page content from the global context
	const { pageContent } =
		useContext<GlobalContextProps<BlogsContentProps>>(GlobalContext);

	// Initialize state for the blog filters and whether there are more to load
	const [filters, setFilters] = useState<string[]>([]);

	const [query, setQuery] = useState<string>('');
	const [page, setPage] = useState<number>(0);
	const [shouldLoadMore, setShouldLoadMore] = useState<boolean>(false);

	// If there is no page content, don't render anything
	if (!pageContent) {
		return null;
	}

	// Extract the max blog posts per page from the page content
	const pageData = pageContent.page[0];
	const maxBlogPostPerPage = pageData.maxBlogPostPerPage || 9;

	// This function takes a category as input and removes it from the categories state array
	const handleRemoveFilterTerm = (filterTerm: string) => {
		setFilters((prevFilters) =>
			prevFilters.filter((item) => filterTerm !== item)
		);
	};

	const { hits, nbPages, hasNextPage, loadMore } = useSearch(
		query,
		page,
		maxBlogPostPerPage,
		filters,
		shouldLoadMore
	);

	const handleLoadMore = () => {
		setShouldLoadMore(true);
		setPage(page + 1);
		loadMore();
	};

	const contextValue = {
		query,
		setQuery,
		hits,
		page,
		setPage,
		nbPages,
		hasNextPage,
		filters,
		setFilters,
		handleLoadMore,
	};

	return (
		<section id="blog-posts" className="z-5 relative ">
			<WaveWrapper waveURL={topWave}></WaveWrapper>
			<div className="bg-secondary-shade-3 2xl:padding-for-section z-1 ">
				<div className="flex flex-col overflow-hidden px-6 sm:px-24 sm:pb-10 md:px-40 md:pb-0 lg:px-8 lg:pb-6">
					<SearchContext.Provider value={contextValue}>
						<InstantSearch
							searchClient={searchClient}
							indexName={config.algoliaBlogSearchIndexName}
						>
							<BlogSearchInput />
							<BlogFilters
								filters={filters}
								onRemoveTerm={handleRemoveFilterTerm}
							/>
							<BlogPostList />
						</InstantSearch>
					</SearchContext.Provider>
				</div>
			</div>

			<WaveWrapper waveURL={bottomWave}></WaveWrapper>
		</section>
	);
}
