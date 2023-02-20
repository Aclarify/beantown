import React, { useContext } from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { HomePageContentProps } from 'pages';
import RichText from 'components/molecules/rich-text.molecule';
import Image from 'next/image';
import Button from 'components/atoms/button.atom';
import ContentWrapper from 'components/organisms/content-wrapper.organism';
import CtaWrapper from 'components/molecules/cta-wrapper.molecule';

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
			<div id="image-wrapper" className="z-0">
				<Image
					alt={heroImage?.asset?.altText || ''}
					width={4000}
					height={1000}
					priority={true}
					src={heroImage?.asset?.url || ''}
					style={{
						zIndex: '0',
						width: '100%',
						height: 'auto',
						maxWidth: '100%',
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
					<ContentWrapper.CTA className="mt-[16px] lg:mt-[32px]">
						<CtaWrapper.CTA className="text-primary-shade-1 para-3 lg:para-2 h-[52px] w-[184px] rounded-lg bg-white py-1 px-4 tracking-wide  md:py-2 md:px-8 lg:h-[64px] lg:w-[182px] lg:tracking-wider ">
							<p>{heroButton?.text}</p>
						</CtaWrapper.CTA>
					</ContentWrapper.CTA>
				</ContentWrapper>
			</div>
		</section>
	);
}
