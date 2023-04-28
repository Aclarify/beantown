import React from 'react';
import Image from 'next/image';
import { showUnderConstructionMsg } from 'utils/helper';
import Animate from 'components/molecules/animate.molecule';
import { BlogPosts } from '@typing/gql/graphql';

interface Props {
	blogPost: BlogPosts;
}
const BlogPostCard: React.FC<Props> = ({ blogPost }) => {
	return (
		<Animate cascade>
			<div
				className="cursor-pointer flex-col justify-center rounded-3xl border-none bg-white pb-8"
				onClick={showUnderConstructionMsg}
			>
				<div className="flex transform justify-center transition duration-500 hover:scale-105 ">
					<Image
						src={blogPost.blogImage?.asset?.url || ''}
						alt={blogPost.blogImage?.asset?.altText || ''}
						width="600"
						height="600"
						className="h-60 w-full  rounded-t-3xl object-cover  md:h-72 xl:h-80 "
					/>
				</div>

				<div className="mt-6 flex flex-wrap gap-4 px-6">
					{blogPost.blogTags?.map((categoryTag, index) => (
						<button
							key={index}
							className="bg-secondary-shade-3 para text-primary-black rounded-lg py-1 px-6"
						>
							{categoryTag?.name}
						</button>
					))}
				</div>

				<div className="px-6">
					<Animate>
						<h5 className=" text-primary-black py-4">{blogPost.blogTitle}</h5>
					</Animate>

					<div className="mt-4 flex justify-between align-middle lg:pb-2 ">
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
			</div>
		</Animate>
	);
};
export default BlogPostCard;
