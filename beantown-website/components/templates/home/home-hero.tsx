import React, { useContext } from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { HomePageContentProps } from 'pages';
import RichText from 'components/molecules/rich-text.molecule';
import Image from 'next/image';
import Button from 'components/atoms/button.atom';
import Link from 'next/link';
import ContentWrapper from 'components/organisms/content-wrapper.organism';

export default function HomeHero() {
	const { pageContent } =
		useContext<GlobalContextProps<HomePageContentProps>>(GlobalContext);
	if (!pageContent) {
		return null;
	}
	const homeData = pageContent.home[0];
	const { heroTitle, heroDescription, heroButton, heroImage } = homeData;
	return (
		<section id="home_page_hero" className="relative">
			<div id="image-wrapper" className="z-0">
				<Image
					alt={heroImage?.asset?.altText || ''}
					width={4000}
					height={1000}
					priority={true}
					className="hidden sm:flex"
					src={heroImage?.asset?.url || ''}
					style={{
						WebkitMaskImage: "url('/images/home/home-hero-mask.svg')",
						WebkitMaskSize: 'cover',
						maskImage: "url('/images/home/home-hero-mask.svg')",
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
						WebkitMaskImage: "url('/images/home/home-hero-mobile-mask.svg')",
						WebkitMaskSize: 'cover',
						maskImage: "url('/images/home/home-hero-mobile-mask.svg')",
						maskSize: 'cover',
						width: '100%',
					}}
				/>
			</div>
			<div
				id="content-wrapper"
				className="z-1 lg:padding-for-section absolute inset-y-0 flex w-3/4 items-center px-4 text-white md:w-[40%]"
			>
				<ContentWrapper>
					<ContentWrapper.Title className="mb-[8px] lg:mb-[16px]">
						<h1 className="title-4 lg:title-1">{heroTitle}</h1>
					</ContentWrapper.Title>
					<ContentWrapper.Description>
						<RichText value={heroDescription?.contentRaw} />
					</ContentWrapper.Description>
					<ContentWrapper.CTA className="mt-[32px]">
						<Button fontColor="text-primary-shade-1" bgColor="bg-white">
							Book Now
						</Button>
					</ContentWrapper.CTA>
				</ContentWrapper>
			</div>

			{/* </div> */}

			{/* </div> */}
		</section>
	);
}
