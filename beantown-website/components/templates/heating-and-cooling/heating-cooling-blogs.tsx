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
		<section
			id="blogs"
			className=" flex flex-col overflow-hidden bg-[#FCF7F7] pl-6 pb-[10rem] lg:px-10 "
		>
			<div id="topWave" className="relative z-20">
				<WaveWrapper waveURL="/images/heating-cooling/blogs/hc-blogs-top-wave.svg"></WaveWrapper>
			</div>
			<Blogs
				blogsTitle={blogTitle || ''}
				blogsDescription={blogDescription || ''}
				blogsButtonText={blogButton?.text || ''}
				blogsButtonTextColour="text-white"
				blogsButtonBgColour="bg-[#BC3B39]"
				blogCards={blogCards || []}
			></Blogs>
			<div id="bottomWave" className="relative z-20">
				<WaveWrapper waveURL="/images/heating-cooling/blogs/hc-blogs-bottom-wave.svg"></WaveWrapper>
			</div>
		</section>
	);
}
