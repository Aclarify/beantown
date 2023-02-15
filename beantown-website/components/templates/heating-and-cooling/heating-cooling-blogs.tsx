import React, { useContext } from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { HomePageContentProps } from 'pages';
import Blogs from 'components/organisms/blogs.organism';
import WaveWrapper from 'components/molecules/wave-wrapper.molecule';

export default function HeatingCoolingBlogs() {
	const { pageContent } =
		useContext<GlobalContextProps<HomePageContentProps>>(GlobalContext);
	if (!pageContent) {
		return null;
	}
	const homeData = pageContent.page[0];
	const { blogTitle, blogDescription, blogButton, blogCards } = homeData;
	return (
		<section id="blogs" className="relative z-10 -mb-[11em]  ">
			<WaveWrapper waveURL="/images/heating-cooling/blogs/hc-blogs-top-wave.svg"></WaveWrapper>
			<div className=" bg-[#FCF7F7] ">
				<Blogs
					blogsTitle={blogTitle || ''}
					blogsDescription={blogDescription || ''}
					blogsButtonText={blogButton?.text || ''}
					blogsButtonTextColour="text-white"
					blogsButtonBgColour="bg-[#BC3B39]"
					blogCards={blogCards || []}
				></Blogs>
			</div>
			<WaveWrapper waveURL="/images/heating-cooling/blogs/hc-blogs-bottom-wave.svg"></WaveWrapper>
		</section>
	);
}
