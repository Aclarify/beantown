import React, { useContext } from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { HomePageContentProps } from 'pages';
import Image from 'next/image';
import WaveWrapper from 'components/molecules/wave-wrapper.molecule';
import Blogs from 'components/organisms/blogs.organism';
import SectionContentWrapper from 'components/molecules/section-content-wrapper.molecule';
import bottomWave from 'public/images/home/blogs/home-blogs-bottom-wave.svg';

export default function HomeBlogs() {
	const { pageContent } =
		useContext<GlobalContextProps<HomePageContentProps>>(GlobalContext);
	if (!pageContent) {
		return null;
	}
	const homeData = pageContent.page[0];
	const { blogsTitle, blogsDescription, blogButton, blogCards } = homeData;
	return (
		<section id="blogs" className=" relative  z-10 -mb-[9em]   ">
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
			<Image
				src={'/images/home/blue-blob-shape-2-mobile.svg'}
				height={250}
				width={250}
				alt="Right Blob mobile"
				className="absolute  top-0 right-0 z-10 translate-x-[75%] translate-y-[-70%] transform lg:hidden"
			/>

			<div className="bg-primary-white-shade-1">
				<SectionContentWrapper>
					<Blogs
						blogsTitle={blogsTitle || ''}
						blogsDescription={blogsDescription || ''}
						blogsButtonText={blogButton?.text || ''}
						blogsButtonTextColour="text-white"
						blogsButtonBgColour="bg-primary-shade-1"
						blogCards={blogCards || []}
					></Blogs>
				</SectionContentWrapper>
			</div>
			<WaveWrapper waveURL={bottomWave}></WaveWrapper>
		</section>
	);
}
