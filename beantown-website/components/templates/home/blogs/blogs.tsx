import React, { useContext } from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { HomePageContentProps } from 'pages';
import Image from 'next/image';
import WaveWrapper from 'components/molecules/wave-wrapper.molecule';
import Blogs from 'components/organisms/blogs.organism';
import SectionContentWrapper from 'components/molecules/section-content-wrapper.molecule';
import bottomWave from 'public/images/home/blogs/home-blogs-bottom-wave.svg';
import leftBlob from 'public/images/home/blue-blob-shape-1.svg';
import leftBlobMobile from 'public/images/home/blue-blob-shape-1-mobile.svg';
import rightBlobMobile from 'public/images/home/blue-blob-shape-2-mobile.svg';
import StaticImageWrapper from 'components/molecules/static-image-wrapper.molecule';

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
			<div className=" z-1 absolute left-0  hidden -translate-x-[55%] translate-y-[12%] transform lg:block">
				<StaticImageWrapper
					src={leftBlob}
					altText="Left-blob"
				></StaticImageWrapper>
			</div>
			<div className=" z-1 -md:translate-y-[33%] absolute left-0 -translate-x-[77%] -translate-y-[15%] transform lg:hidden">
				<StaticImageWrapper
					src={leftBlobMobile}
					altText="Left-blob-mobile"
				></StaticImageWrapper>
			</div>
			<div className=" absolute top-0 right-0 z-10 h-[250px] w-[250px] translate-x-[75%] translate-y-[-70%] transform lg:hidden">
				<StaticImageWrapper
					src={rightBlobMobile}
					altText="Right-blob-mobile"
				></StaticImageWrapper>
			</div>

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
