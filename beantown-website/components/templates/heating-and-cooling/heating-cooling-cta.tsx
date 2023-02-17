import React, { useContext } from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { HeatingCoolingContentProps } from 'pages/heating-and-cooling';
import ContentWrapper from 'components/organisms/content-wrapper.organism';
import CTAWithImage from 'components/organisms/cta-with-image.organism';
import CtaWrapper from 'components/molecules/cta-wrapper.molecule';

export default function HeatingCoolingPageCTA() {
	const { pageContent } =
		useContext<GlobalContextProps<HeatingCoolingContentProps>>(GlobalContext);
	if (!pageContent) {
		return null;
	}
	const pageData = pageContent.page[0];
	const { ctaImage, ctaTitle, finalCtaButton } = pageData;
	return (
		<section id="cooling-and-heating-cta">
			<CTAWithImage
				heroImageURL={ctaImage?.asset?.url || ''}
				heroImageAltText={'Hero image'}
				textContentBGImage={'/images/heating-cooling/hero/hc-hero-vector.svg'}
				textContentBGImageForSmallScreen={
					'/images/heating-cooling/hero/hc-hero-vector.svg'
				}
				heroImagePosition="left"
				gradientFromColor="from-service-red"
				gradientToColor="bg-service-red"
			>
				<ContentWrapper className="lg:padding-for-section px-10 py-20 text-center lg:text-left">
					<ContentWrapper.Title className="mb-[8px]   lg:mb-[16px]">
						<h1 className="title-5 lg:title-2 text-white">{ctaTitle}</h1>
					</ContentWrapper.Title>
					<ContentWrapper.CTA className="mt-[32px]">
						<CtaWrapper.CTA className="para-3 lg:para-2 lg:text-service-red text-primary-black h-[52px] w-[184px] rounded-lg bg-white py-1 px-4 tracking-wide md:py-2  md:px-8  lg:h-[64px] lg:w-[198px] lg:tracking-wider ">
							<p>{finalCtaButton?.text}</p>
						</CtaWrapper.CTA>
					</ContentWrapper.CTA>
				</ContentWrapper>
			</CTAWithImage>
		</section>
	);
}
