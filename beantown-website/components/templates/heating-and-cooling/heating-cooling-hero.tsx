import React, { useContext } from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { HeatingCoolingContentProps } from 'pages/heating-and-cooling';
import RichText from 'components/molecules/rich-text.molecule';
import ContentWrapper from 'components/organisms/content-wrapper.organism';
import Button from 'components/atoms/button.atom';
import CTAWithImage from 'components/organisms/cta-with-image.organism';

export default function HeatingCoolingPageHero() {
	const { pageContent } =
		useContext<GlobalContextProps<HeatingCoolingContentProps>>(GlobalContext);
	if (!pageContent) {
		return null;
	}
	const pageData = pageContent.page[0];
	// console.log(pageContent);
	const { heroImage, heroTitle, heroDescription, heroButton } = pageData;
	return (
		<section id="cooling-and-heating-hero">
			<CTAWithImage
				heroImageURL={heroImage?.asset?.url || ''}
				heroImageAltText={'Hero image'}
				textContentBGImage={'/images/heating-cooling/hero/hc-hero-vector.svg'}
				textContentBGImageForSmallScreen={
					'/images/heating-cooling/hero/hc-hero-vector.svg'
				}
				heroImagePosition="right"
				gradientFromColor="#BC3B39"
				gradientToColor="#B55856"
				gradientFromColorForMobile="#B55856"
				gradientToColorForMobile="#BC3B39"
			>
				<ContentWrapper className="md:padding-for-section px-10 py-20 text-center md:text-left">
					<ContentWrapper.Title className="mb-[8px] lg:mb-[16px]">
						<h1 className="title-4 lg:title-1">{heroTitle}</h1>
					</ContentWrapper.Title>
					<ContentWrapper.Description>
						<RichText value={heroDescription?.contentRaw} />
					</ContentWrapper.Description>
					<ContentWrapper.CTA className="mt-[32px]">
						<Button fontColor="text-white" bgColor="bg-primary-shade-1">
							{heroButton?.text}
						</Button>
					</ContentWrapper.CTA>
				</ContentWrapper>
			</CTAWithImage>
		</section>
	);
}
