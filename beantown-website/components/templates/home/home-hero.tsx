import React, { useContext } from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { HomePageContentProps } from 'pages';
import RichText from 'components/molecules/rich-text.molecule';

import ContentWrapper from 'components/organisms/content-wrapper.organism';
import CtaWrapper from 'components/molecules/cta-wrapper.molecule';
import CMSImageWrapper from 'components/molecules/cms-image-wrapper.molecule';

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
				className="z-1 2xl:padding-for-section flex w-3/4 items-center px-6  text-white lg:w-[50%] "
			>
				<ContentWrapper className="relative z-[2] pt-28 pb-20 md:pt-48 md:pb-48 xl:pt-80 xl:pb-80">
					<ContentWrapper.Title className=" mb-2  lg:mb-4">
						<h1 className="title-5 xl:title-1 leading-[36px] xl:leading-[90px]">
							{heroTitle}
						</h1>
					</ContentWrapper.Title>
					<ContentWrapper.Description className="para-4 lg:para-2">
						<RichText value={heroDescription?.contentRaw} />
					</ContentWrapper.Description>
					<ContentWrapper.CTA className="mt-4  lg:mt-8">
						<CtaWrapper.CTA className="text-primary-shade-1 para-3 xl:para-2 h-[52px] w-[184px] rounded-lg bg-white py-1 px-4 tracking-wide  md:py-2 md:px-8 lg:h-[64px] lg:w-[182px] lg:tracking-wider ">
							<p>{heroButton?.text}</p>
						</CtaWrapper.CTA>
					</ContentWrapper.CTA>
				</ContentWrapper>
			</div>
			<div
				id="image-wrapper"
				className="after:z-1 after:from-home-hero-gradient-start after:to-home-hero-gradient-end absolute top-0 z-0  h-full
				w-full after:absolute after:top-0 after:left-0 after:h-full after:w-full after:bg-gradient-to-b"
			>
				<CMSImageWrapper
					altText={heroImage?.asset?.altText || ''}
					image={heroImage || null}
					shouldBePrefetched={true}
				/>
			</div>
		</section>
	);
}
