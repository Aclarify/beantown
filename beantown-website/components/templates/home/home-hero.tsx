import React, { useContext } from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { HomePageContentProps } from 'pages';
import RichText from 'components/molecules/rich-text.molecule';
import Image from 'next/image';
import Button from 'components/atoms/button.atom';
import Link from 'next/link';

export default function HomeHero() {
	const { pageContent } =
		useContext<GlobalContextProps<HomePageContentProps>>(GlobalContext);
	if (!pageContent) {
		return null;
	}
	const homeData = pageContent.home[0];
	const { heroTitle, heroDescription, heroButton, heroImage } = homeData;
	return (
		<section id="home_page_hero ">
			<div className="flex flex-shrink-0 flex-col justify-center">
				<div className="para-6  md:para-2 lg:para-2 absolute z-10 w-3/4 space-y-1 px-6 align-middle text-white md:w-1/2 md:space-y-2 md:px-8 lg:m-10 lg:space-y-4">
					<h1 className="title-4 lg:title-1">{heroTitle}</h1>

					<RichText value={heroDescription?.contentRaw} />

					<Button fontColor="text-primary-shade-1 " bgColor="bg-white">
						<Link href={'/'}>Book Now</Link>
					</Button>
				</div>

				<Image
					alt={heroImage?.asset?.altText || ''}
					width={4000}
					height={1000}
					priority={true}
					className="h-auto w-full bg-gradient-to-t from-[#15284C] md:flex "
					src={heroImage?.asset?.url || ''}
					style={{
						WebkitMaskImage: "url('./home-hero-mask.svg')",
						WebkitMaskSize: 'cover',
						maskImage: "url('./home-hero-mask.svg')",
						maskSize: 'cover',
					}}
				/>
			</div>
		</section>
	);
}
