import React, { useContext } from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { HomePageContentProps } from 'pages';
import RichText from 'components/molecules/rich-text.molecule';
import Image from 'next/image';

export default function HomeHero() {
	const { pageContent } =
		useContext<GlobalContextProps<HomePageContentProps>>(GlobalContext);
	if (!pageContent) {
		return null;
	}
	const homeData = pageContent.home[0];
	const { heroTitle, heroDescription, heroButton, heroImage } = homeData;
	return (
		<section id="home_page_hero" className="">
			<div className="flex-shrink-0 ">
				<div className="space-y-4  mt-12 md:mt-64 absolute w-1/2 text-white p-2  md:p-12">
					<p className=" text-3xl sm:text-6xl font-bold">{heroTitle}</p>
					<div className=" text-base sm:text-2xl font-normal">
						<RichText value={heroDescription?.contentRaw} />
					</div>
					<button className="border rounded-lg text-xl sm:text-2xl font-normal bg-white text-black py-2 px-8">
						{heroButton?.text}
					</button>
				</div>
				<img
					className="w-full h-auto object-cover "
					src="images/home_page/homepageHero.svg"
					alt="Home Page Hero Image"
				></img>

				{/* <Image
					alt={heroImage?.asset?.altText || ''}
					// width={200}
					// height={300}
					src={heroImage?.asset?.url || ''}
				/> */}
			</div>
		</section>
	);
}
