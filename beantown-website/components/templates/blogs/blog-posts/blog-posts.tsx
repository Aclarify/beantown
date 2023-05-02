import React, { useEffect, useState } from 'react';
import { Categories } from '@typing/gql/graphql';
import { getCMSDocs } from '@typing/api/api';
import blogCategoriesQuery from '@lib/queries/organisms/get-blog-categories.query';
import WaveWrapper from 'components/molecules/wave-wrapper.molecule';
import topWave from 'public/images/blogs/blog-posts/blog-posts-top-wave.svg';
import bottomWave from 'public/images/blogs/blog-posts/blog-posts-bottom-wave.svg';
import BlogPostList from 'components/organisms/blog-post-list.organism';
import BlogCategoryList from 'components/organisms/blog-category-list.organism';
import BlogSearchInput from 'components/organisms/blog-search.organism';

export default function BlogPosts() {
	// Initialize state for the blog categories and whether there are more to load
	const [categories, setCategories] = useState<Categories[]>([]);

	//  As Sanity GraphQl does not provide any filtering for your array fields, yet
	// https://www.sanity.io/docs/graphql#ba117ddb05ce
	// We could not query post according to active categories,
	// Instead we can just filter post that are not relative to excluded categories
	const [excludedCategories, setExcludedCategories] = useState<Categories[]>(
		[]
	);

	// Load the initial blog categories on component mount
	useEffect(() => {
		loadCategories();
	}, []);

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
		setExcludedCategories((prevCategories) => [...prevCategories, category]);
	};

	return (
		<section id="blog-posts" className="z-5 relative ">
			<WaveWrapper waveURL={topWave}></WaveWrapper>
			<div className="bg-secondary-shade-3 2xl:padding-for-section z-1 ">
				<div className="flex flex-col overflow-hidden px-6 sm:px-24 sm:pb-10 md:px-40 md:pb-0 lg:px-8 lg:pb-6">
					<BlogSearchInput />
					<BlogCategoryList
						categories={categories}
						onExcludeCategory={handleExcludeCategory}
					/>
					<BlogPostList excludedCategories={excludedCategories} />
				</div>
			</div>
			<WaveWrapper waveURL={bottomWave}></WaveWrapper>
		</section>
	);
}
