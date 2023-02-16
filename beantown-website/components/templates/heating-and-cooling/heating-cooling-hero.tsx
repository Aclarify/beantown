import React, { useContext } from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { HeatingCoolingContentProps } from 'pages/heating-and-cooling';
import RichText from 'components/molecules/rich-text.molecule';
import ContentWrapper from 'components/organisms/content-wrapper.organism';
import CTAWithImage from 'components/organisms/cta-with-image.organism';
import CtaWrapper from 'components/molecules/cta-wrapper.molecule';

export default function HeatingCoolingPageHero() {
	const { pageContent } =
		useContext<GlobalContextProps<HeatingCoolingContentProps>>(GlobalContext);
	if (!pageContent) {
		return null;
	}
	const pageData = pageContent.page[0];
	const { heroImage, heroTitle, heroDescription, heroButton } = pageData;
	return (
		<section id="cooling-and-heating-hero" className="z-5 relative">
			<CTAWithImage
				heroImageURL={heroImage?.asset?.url || ''}
				heroImageAltText={'Hero image'}
				textContentBGImage={'/images/heating-cooling/hero/hc-hero-vector.svg'}
				textContentBGImageForSmallScreen={
					'/images/heating-cooling/hero/hc-hero-vector.svg'
				}
				heroImagePosition="right"
				gradientFromColor="from-service-red"
				gradientToColor="bg-service-red"
			>
				<ContentWrapper className="lg:padding-for-section px-10 py-20 text-center lg:text-left">
					<ContentWrapper.Title className="mb-[8px] lg:mb-[16px]">
						<h1 className="title-4 lg:title-1">{heroTitle}</h1>
					</ContentWrapper.Title>
					<ContentWrapper.Description>
						<RichText value={heroDescription?.contentRaw} />
					</ContentWrapper.Description>
					<ContentWrapper.CTA className="mt-[32px]">
						<CtaWrapper.CTA className="bg-primary-shade-1 para-3 lg:para-2 h-[64px] w-[182px] rounded-lg py-1 px-4  tracking-wide text-white md:py-2 md:px-8 lg:tracking-wider ">
							<p>{heroButton?.text}</p>
						</CtaWrapper.CTA>
					</ContentWrapper.CTA>
				</ContentWrapper>
			</CTAWithImage>
		</section>
	);
}
