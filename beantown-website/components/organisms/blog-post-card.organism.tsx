import React from 'react';
import Image from 'next/image';
import Animate from 'components/molecules/animate.molecule';
import { BlogPosts } from '@typing/gql/graphql';
import Link from 'next/link';

interface Props {
	blogPost: BlogPosts;
}
const BlogPostCard: React.FC<Props> = ({ blogPost }) => {
	return (
		<Animate cascade>
			<Link href={`/blog/${blogPost.blogSlug?.current}`}>
				<div className="flex cursor-pointer flex-col justify-center rounded-3xl border-none bg-white pb-8">
					<div className="flex transform justify-center transition duration-500 hover:scale-105 ">
						<Image
							src={blogPost.blogImage?.asset?.url || ''}
							alt={blogPost.blogImage?.asset?.altText || ''}
							width="600"
							height="600"
							className="h-60 w-full rounded-t-3xl object-cover md:h-72 xl:h-80"
						/>
					</div>

					<div className="mt-6 flex flex-wrap gap-4 px-6">
						{blogPost.blogTags?.map((categoryTag, index) =>
							categoryTag?.name ? (
								<button
									key={index}
									className="bg-secondary-shade-3 para text-primary-black rounded-lg py-1 px-6"
								>
									{categoryTag?.name}
								</button>
							) : null
						)}
					</div>

					<div className="md:h-30 h-24 overflow-hidden px-6 py-4 lg:h-48">
						<h5 className="text-primary-black">{blogPost.blogTitle}</h5>
					</div>

					<div className="mt-4 flex justify-between px-6 align-middle lg:pb-2 ">
						<Animate>
							<button className="para text-primary-black underline ">
								Read Article
							</button>
						</Animate>
						<Image
							src="/images/home/blog-arrow.svg"
							width="75"
							height="20"
							alt="Blog Arrow"
						/>
					</div>
				</div>
			</Link>
		</Animate>
	);
};
export default BlogPostCard;
