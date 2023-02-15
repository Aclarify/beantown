import React, { useContext } from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { HeatingCoolingContentProps } from 'pages/heating-and-cooling';
import ContentWrapper from 'components/organisms/content-wrapper.organism';
import Button from 'components/atoms/button.atom';
import CTAWithImage from 'components/organisms/cta-with-image.organism';

export default function HeatingCoolingPageCTA() {
	const { pageContent } =
		useContext<GlobalContextProps<HeatingCoolingContentProps>>(GlobalContext);
	if (!pageContent) {
		return null;
	}
	const pageData = pageContent.page[0];
	const { ctaImage, ctaTitle, finalCtaButton } = pageData;
	return (
		<section id="cooling-and-heating-hero">
			<CTAWithImage
				heroImageURL={ctaImage?.asset?.url || ''}
				heroImageAltText={'Hero image'}
				textContentBGImage={'/images/heating-cooling/hero/hc-hero-vector.svg'}
				textContentBGImageForSmallScreen={
					'/images/heating-cooling/hero/hc-hero-vector.svg'
				}
				heroImagePosition="left"
				gradientFromColor="#BC3B39"
				gradientToColor="#B55856"
				gradientFromColorForMobile="#B55856"
				gradientToColorForMobile="#BC3B39"
			>
				<ContentWrapper className="lg:padding-for-section px-10 py-20 text-center lg:text-left">
					<ContentWrapper.Title className="mb-[8px] lg:mb-[16px]">
						<h1 className="title-4 lg:title-1">{ctaTitle}</h1>
					</ContentWrapper.Title>
					<ContentWrapper.CTA className="mt-[32px]">
						<Button fontColor="text-white" bgColor="bg-primary-shade-1">
							{finalCtaButton?.text}
						</Button>
					</ContentWrapper.CTA>
				</ContentWrapper>
			</CTAWithImage>
		</section>
	);
}
