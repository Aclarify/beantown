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
import WaveWrapper from 'components/molecules/wave-wrapper.molecule';

export default function HomeBlogs() {
	const { pageContent } =
		useContext<GlobalContextProps<HomePageContentProps>>(GlobalContext);
	if (!pageContent) {
		return null;
	}
	const homeData = pageContent.page[0];
	const { blogTitle, blogDescription, blogCards, blogButton } = homeData;
	return (
		<section id="blogs" className=" relative  z-10 -mb-[9em] flex flex-col  ">
			<Image
				src="/images/home/blue-blob-shape-1.svg"
				alt="Left-blob"
				width={750}
				height={400}
				className=" absolute left-0  hidden -translate-x-[59%] -translate-y-[15%] transform lg:block"
			></Image>

			<Image
				src="/images/home/blue-blob-shape-1-mobile.svg"
				alt="Left-blob-mobile"
				width={450}
				height={300}
				className=" absolute left-0  -translate-x-[75%] -translate-y-[20%] transform lg:hidden"
			></Image>

			<div className="bg-primary-white-shade-1 lg:padding-for-section relative  px-[20px] pb-[2em]">
				<Blogs
					blogsTitle={blogTitle || ''}
					blogsDescription={blogDescription || ''}
					blogsButtonText={blogButton?.text || ''}
					blogsButtonTextColour="text-white"
					blogsButtonBgColour="bg-primary-shade-1"
					blogCards={homeData.blogCards || []}
				></Blogs>
			</div>
			<WaveWrapper waveURL="/images/home/blogs/home-blogs-bottom-wave.svg"></WaveWrapper>
		</section>
	);
}
