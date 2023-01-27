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
		<section id="home_page_hero">
			<div className="flex-shrink-0">
				<div className="space-y-4  mt-12 md:mt-64 absolute w-3/4 md:w-2/3 text-white px-6 md:px-10 align-middle z-10">
					<h1 className="title-4 md:title-1">{heroTitle}</h1>
					<div className="para-4 md:para-2">
						<RichText value={heroDescription?.contentRaw} />
					</div>

					<Link href={'/'}>
						<Button fontColor="text-primary-shade-1" bgColor="bg-white">
							Book Now
						</Button>
					</Link>
				</div>

				<Image
					alt={heroImage?.asset?.altText || ''}
					width={4000}
					height={1000}
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
