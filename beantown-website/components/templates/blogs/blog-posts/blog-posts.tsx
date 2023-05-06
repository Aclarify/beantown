/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext, useEffect, useState } from 'react';
import { Categories } from '@typing/gql/graphql';
import { getCMSDocs } from '@typing/api/api';
import blogCategoriesQuery from '@lib/queries/organisms/get-blog-categories.query';
import WaveWrapper from 'components/molecules/wave-wrapper.molecule';
import topWave from 'public/images/blogs/blog-posts/blog-posts-top-wave.svg';
import bottomWave from 'public/images/blogs/blog-posts/blog-posts-bottom-wave.svg';
import BlogPostList from 'components/organisms/blog-post-list.organism';
import BlogCategoryList from 'components/organisms/blog-category-list.organism';
import BlogSearchInput from 'components/organisms/blog-search.organism';
import { SearchContext } from 'contexts/blogs/blog.context';
import useSearch from 'lib/hooks/useSearch.hook';
import debounce from 'lodash/debounce';
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

	// Initialize state for the blog categories and whether there are more to load
	const [categories, setCategories] = useState<Categories[]>([]);
	const [tags, setTags] = useState<Categories[]>([]);

	const [query, setQuery] = useState<string>('');
	const [page, setPage] = useState<number>(0);
	const [debouncedQuery, setDebouncedQuery] = useState<string>('');

	// Load the initial blog categories on component mount
	useEffect(() => {
		loadCategories();
		setDebouncedQuery('');
	}, []);

	// If there is no page content, don't render anything
	if (!pageContent) {
		return null;
	}

	// Extract the max blog posts per page from the page content
	const pageData = pageContent.page[0];
	const maxBlogPostPerPage = pageData.maxBlogPostPerPage || 9;

	// Define a function to load blog categories from the CMS
	const loadCategories = async () => {
		const res = await getCMSDocs(blogCategoriesQuery);
		const data = res.allCategories || [];
		setCategories(data);
	};

	// This function takes a category as input and removes it from the categories state array
	const handleExcludeCategory = (category: Categories) => {
		setCategories((prevCategories) =>
			prevCategories.filter((item) => category._id !== item._id)
		);
		setTags(categories);
	};

	const { hits, nbPages } = useSearch(
		debouncedQuery,
		page,
		maxBlogPostPerPage,
		tags.map((item) => item.name ?? '')
	);

	const handleSearch = debounce((query: string) => {
		setDebouncedQuery(query);
	}, 500);

	const contextValue = {
		query,
		setQuery,
		page,
		setPage,
		hits,
		nbPages,
		handleSearch,
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
							<BlogCategoryList
								categories={categories}
								onExcludeCategory={handleExcludeCategory}
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
