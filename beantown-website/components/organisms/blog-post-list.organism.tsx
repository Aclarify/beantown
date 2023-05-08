/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import { connectHits } from 'react-instantsearch-dom';
import { HitsProvided } from 'react-instantsearch-core';

import { BlogPosts } from '@typing/gql/graphql';
import { SearchContext } from 'contexts/blogs/blog.context';
import BlogPostCard from './blog-post-card.organism';
import { useIsFetching } from 'react-query';
import { toast } from 'react-hot-toast';
import clsx from 'clsx';
import CtaWrapper from 'components/molecules/cta-wrapper.molecule';

type IProps = HitsProvided<BlogPosts>;

const BlogPostHits: React.FC<IProps> = () => {
	const { hits, handleLoadMore, hasNextPage } = useContext(SearchContext);

	const isFetching = useIsFetching();

	// Show toast when there are active queries
	useEffect(() => {
		if (isFetching) {
			toast.loading('Loading...');
		} else {
			toast.dismiss();
		}
	}, [isFetching]);

	if (isFetching) {
		return null;
	}

	return (
		<>
			<div className="mb-5 grid w-full grid-cols-1 gap-x-8 gap-y-6 lg:grid-cols-3 lg:gap-y-12">
				{hits?.length > 0 ? (
					hits.map((blogPost, index) => (
						<div key={index} className="w-full">
							<BlogPostCard blogPost={blogPost} />
						</div>
					))
				) : (
					<p>No posts found.</p>
				)}
			</div>
			{hasNextPage && (
				<div className="mt-6 items-center  pb-6 text-center lg:mt-12 lg:mb-0">
					<CtaWrapper.CTA
						onClick={handleLoadMore}
						className={clsx(`bg-primary-shade-1 button text-white`)}
					>
						<p className={clsx('font-normal')}>Load More</p>
					</CtaWrapper.CTA>
				</div>
			)}
		</>
	);
};

export default connectHits(BlogPostHits);
