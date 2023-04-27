/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';

import { BlogPosts, Categories } from '@typing/gql/graphql';
import CtaWrapper from 'components/molecules/cta-wrapper.molecule';
import { getCMSDocs } from '@typing/api/api';
import blogPostsQuery from '@lib/queries/organisms/get-blog-posts.query';
import { BlogsContentProps } from 'pages/blogs';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { GlobalContext } from 'contexts/global/global.context';
import BlogPostCard from './blog-post-card.organism';
import toast from 'react-hot-toast';
import clsx from 'clsx';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
	excludedCategories?: Array<Categories>;
}

const BlogPostList: React.FC<IProps> = ({ excludedCategories = [] }) => {
	// Get the page content from the global context
	const { pageContent } =
		useContext<GlobalContextProps<BlogsContentProps>>(GlobalContext);

	// Initialize state for the blog posts and whether there are more to load
	const [posts, setPosts] = useState<BlogPosts[]>([]);
	const [hasMore, setHasMore] = useState<boolean>(true);

	// Load the initial blog posts on component mount
	useEffect(() => {
		loadPosts({});
	}, [excludedCategories]);

	// If there is no page content, don't render anything
	if (!pageContent) {
		return null;
	}

	// Extract the max blog posts per page from the page content
	const pageData = pageContent.page[0];
	const maxBlogPostPerPage = pageData.maxBlogPostPerPage || 9;

	// Define a function to load blog posts from the CMS
	const loadPosts = async ({
		limit = maxBlogPostPerPage,
		offset = 0,
	}: {
		limit?: number;
		offset?: number;
	}) => {
		const res = await getCMSDocs(blogPostsQuery, {
			limit: limit,
			offset: offset,
		});

		const data: BlogPosts[] = res.allBlogPosts || [];

		const filteredPosts = data.filter((post) => {
			const postCategories = post?.blogTags?.map((item) => item?._id);
			return !excludedCategories.some((excludedCat) =>
				postCategories?.includes(excludedCat._id)
			); // exclude post if it has an excluded category
		});

		if (offset) {
			// loading more
			setPosts((prevPosts) => [...prevPosts, ...filteredPosts]);
		} else {
			// initial loading or reloading after category change
			setPosts(filteredPosts);
		}

		// hide load more button if no more content
		const loaded = filteredPosts.length > 0;
		setHasMore(loaded);

		return loaded;
	};

	// Handle the "Load More" button click event
	const handleLoadMore = async () => {
		const postsPromise = loadPosts({
			limit: maxBlogPostPerPage,
			offset: posts?.length,
		});

		toast.promise(
			postsPromise,
			{
				loading: 'Loading',
				error: (err) => {
					console.error('Error: ', err);
					return `Cannot complete this operation, please try again later`;
				},
				success: (loaded) => {
					return loaded ? `Successfully loaded` : `No more content`;
				},
			},
			{
				style: {
					minWidth: '250px',
				},
			}
		);
	};

	return (
		<div>
			<div className="mb-5 grid w-full grid-cols-1 gap-x-8 gap-y-6 lg:grid-cols-3 lg:gap-y-12">
				{posts?.length > 0 ? (
					posts.map((blogPost, index) => (
						<div key={index} className="w-full">
							<BlogPostCard blogPost={blogPost} />
						</div>
					))
				) : (
					<p>No posts found.</p>
				)}
			</div>
			{hasMore && (
				<div className="mt-6 items-center  pb-6 text-center lg:mt-12 lg:mb-0">
					<CtaWrapper.CTA
						onClick={handleLoadMore}
						className={clsx(`bg-primary-shade-1 button text-white`)}
					>
						<p className={clsx('font-normal')}>Load More</p>
					</CtaWrapper.CTA>
				</div>
			)}
		</div>
	);
};

export default BlogPostList;
