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
				<div className="absolute z-10 w-3/4 space-y-2 px-6 align-middle text-white md:w-2/3 md:px-10">
					<h1 className="title-4 lg:title-1">{heroTitle}</h1>
					<div className="para-4 lg:para-2">
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
					priority={true}
					className="hidden sm:flex"
					src={heroImage?.asset?.url || ''}
					style={{
						WebkitMaskImage: "url('./home-hero-mask.svg')",
						WebkitMaskSize: 'cover',
						maskImage: "url('./home-hero-mask.svg')",
						maskSize: 'cover',
					}}
				/>
				<Image
					alt={heroImage?.asset?.altText || ''}
					width={428}
					height={420}
					priority={true}
					className="block h-[420px] sm:hidden"
					src={heroImage?.asset?.url || ''}
					style={{
						WebkitMaskImage: "url('./home-hero-mobile-mask.svg')",
						WebkitMaskSize: 'cover',
						maskImage: "url('./home-hero-mobile-mask.svg')",
						maskSize: 'cover',
						width: '100%',
					}}
				/>
			</div>
		</section>
	);
}
