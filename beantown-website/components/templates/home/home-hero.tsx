import React, { useContext } from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { HomePageContentProps } from 'pages';
import RichText from 'components/molecules/rich-text.molecule';
import Image from 'next/image';
import ContentWrapper from 'components/organisms/content-wrapper.organism';
import BookNowButton from 'components/atoms/book-now-button.atom';

declare const window: any;

export default function HomeHero() {
	const { pageContent } =
		useContext<GlobalContextProps<HomePageContentProps>>(GlobalContext);

	if (!pageContent) {
		return null;
	}
	const homeData = pageContent.page[0];
	const { heroTitle, heroDescription, heroButton, heroImage } = homeData;
	return (
		<section id="home_page_hero" className="relative">
			<div
				id="content-wrapper"
				className="z-1 2xl:padding-for-section sm:[w-3/4] flex w-[85%] items-center pl-6 text-white sm:pr-6 lg:w-[60%] "
			>
				<ContentWrapper className="relative z-[2] pt-24 pb-16 sm:pt-28 sm:pb-20 md:pt-48 md:pb-48 xl:pt-80 xl:pb-80">
					<ContentWrapper.Title className=" mb-2  lg:mb-4">
						<h1>{heroTitle}</h1>
					</ContentWrapper.Title>
					{/* FIXME: Targeting/specifity of subtitle should be enhanced ([&>*>p]:) */}
					<ContentWrapper.Description className="w-[80%] [&>*>p]:text-2xl [&>*>p]:lg:text-4xl">
						<RichText value={heroDescription?.contentRaw} />
					</ContentWrapper.Description>
					<ContentWrapper.CTA className="mt-4 lg:mt-8">
						<BookNowButton
							fontColor="text-primary-shade-1"
							bgColor="bg-white"
							buttonStyle="button"
						>
							{heroButton?.text}
						</BookNowButton>
					</ContentWrapper.CTA>
				</ContentWrapper>
			</div>

			<div
				id="image-wrapper"
				className="after:z-1 after:from-home-hero-gradient-start after:to-home-hero-gradient-end xs:block absolute top-0 z-0 h-full w-full after:absolute after:top-0 after:left-0 after:h-full after:w-full after:bg-gradient-to-b"
			>
				<div className="relative h-full w-full">
					<Image
						alt={heroImage?.asset?.altText || ''}
						priority={true}
						src={heroImage?.asset?.url || ''}
						fill
						style={{
							zIndex: '0',
							width: '100%',
							height: '100%',
							maxWidth: '100%',
							objectFit: 'cover',
						}}
					/>
				</div>
			</div>
		</section>
	);
}
