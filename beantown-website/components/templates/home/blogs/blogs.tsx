import React, { useContext } from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { HomePageContentProps } from 'pages';
import Image from 'next/image';
import Blogs from 'components/organisms/blogs.organism';
import WaveWrapper from 'components/molecules/wave-wrapper.molecule';

export default function HomeBlogs() {
	const { pageContent } =
		useContext<GlobalContextProps<HomePageContentProps>>(GlobalContext);
	if (!pageContent) {
		return null;
	}
	const homeData = pageContent.page[0];
	const { blogTitle, blogDescription, blogButton } = homeData;
	return (
		<section id="blogs" className=" relative  z-10 -mb-[9em] flex flex-col  ">
			<Image
				src="/images/home/blue-blob-shape-1.svg"
				alt="Left-blob"
				width={590}
				height={650}
				className=" z-1 absolute left-0  hidden -translate-x-[55%] translate-y-[12%] transform lg:block"
			></Image>

			<Image
				src="/images/home/blue-blob-shape-1-mobile.svg"
				alt="Left-blob-mobile"
				width={450}
				height={300}
				className=" z-1 -md:translate-y-[33%] absolute left-0 -translate-x-[77%] -translate-y-[15%] transform lg:hidden"
			></Image>

			<div className="bg-primary-white-shade-1 2xl:padding-for-section relative  pl-5 pb-[0em] pt-[0rem] lg:pt-[12rem]">
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
