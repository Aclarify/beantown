import React, { useContext } from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { HomePageContentProps } from 'pages';
import RichText from 'components/molecules/rich-text.molecule';

export default function HomeHero() {
	const { pageContent } =
		useContext<GlobalContextProps<HomePageContentProps>>(GlobalContext);
	if (!pageContent) {
		return null;
	}
	const homeData = pageContent.allHome[0];
	const { headerTitle, headerDescription, headerButton } = homeData;
	return (
		<section id="home_page_hero" className="">
			<div className="flex-shrink-0">
				<div className="space-y-4  mt-12 md:mt-64 absolute w-1/2 text-white p-2  md:p-12">
					<p className="text-sm  md:text-4xl font-bold">{headerTitle}</p>
					<RichText value={headerDescription?.contentRaw} />
					<button className="border rounded-lg text-xs  md:text-xl bg-white text-black p-2">
						{headerButton?.text}
					</button>
				</div>
				<img
					className="w-full h-auto object-cover "
					src="images/home_page/homepageHero.svg"
					alt="Home Page Hero Image"
				></img>
			</div>
		</section>
	);
}
