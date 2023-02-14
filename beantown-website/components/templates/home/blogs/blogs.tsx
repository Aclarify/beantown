import React, { useContext } from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { HomePageContentProps } from 'pages';
import RichText from 'components/molecules/rich-text.molecule';
import Image from 'next/image';
import BlogCard from './blog-card';
import Button from 'components/atoms/button.atom';
import Link from 'next/link';
import Blogs from 'components/organisms/blogs.organism';

export default function HomeBlogs() {
	const { pageContent } =
		useContext<GlobalContextProps<HomePageContentProps>>(GlobalContext);
	if (!pageContent) {
		return null;
	}
	const homeData = pageContent.page[0];
	const { blogTitle, blogDescription, blogCards, blogButton } = homeData;
	return (
		<section
			id="blogs"
			className="bg-primary-white-shade-1 relative z-[-1] flex flex-col overflow-hidden pl-6 pb-20 lg:px-10 "
		>
			<div
				id="left-blob-desktop"
				className="relative bottom-[2rem] right-[16em] hidden h-0 sm:block"
			>
				<Image
					src="/images/home/blue-blob-shape-1.svg"
					alt="Left-blob"
					width={400}
					height={400}
				></Image>
			</div>
			<div
				id="left-blob-mobile"
				className="relative bottom-[-3rem] right-[8em] block h-0 sm:hidden"
			>
				<Image
					src="/images/home/blue-blob-shape-1-mobile.svg"
					alt="Left-blob"
					width={200}
					height={200}
				></Image>
			</div>

			<div className="relative z-10">
				<Blogs
					blogsTitle={blogTitle || ''}
					blogsDescription={blogDescription || ''}
					blogsButtonText={blogButton?.text || ''}
					blogsButtonTextColour="text-white"
					blogsButtonBgColour="bg-[#BC3B39]"
					blogCards={homeData.blogCards || []}
				></Blogs>
			</div>
		</section>
	);
}
