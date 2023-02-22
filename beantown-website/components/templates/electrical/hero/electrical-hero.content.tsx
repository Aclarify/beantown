import React, { useContext } from 'react';
import { GlobalContext } from "@contexts/global/global.context";
import { GlobalContextProps } from "@typing/common/interfaces/contexts.interface";
import { HeatingCoolingContentProps } from "pages/heating-and-cooling";
import CtaWrapper from 'components/molecules/cta-wrapper.molecule';
import RichText from 'components/molecules/rich-text.molecule';
import SectionContentWrapper from 'components/molecules/section-content-wrapper.molecule';
import ContentWrapper from 'components/organisms/content-wrapper.organism';
import CTAWithImage from 'components/organisms/cta-with-image.organism';

const ElectricalHeroContent =()=>{
    const {pageContent} =
   useContext<GlobalContextProps<HeatingCoolingContentProps>>(GlobalContext);
   if (!pageContent) {
		return null;
	}
    const pageData = pageContent.page[0];
	const { heroImage, heroTitle, heroDescription, heroButton } = pageData;
	
    return (
			<CTAWithImage
				heroImageURL={'/images/electrical/hero/electrical-hero-image.svg'}
				heroImageAltText={'Hero image'}
				textContentBGImage={
					'/images/electrical/hero/electrical-hero-vector.svg'
				}
				textContentBGImageForSmallScreen={
					'/images/electrical/hero/electrical-hero-bg-vector-mobile.svg'
				}
				heroImagePosition="right"
				gradientFromColor="from-service-yellow"
				gradientToColor="bg-service-yellow"
			>
				<SectionContentWrapper>
					<ContentWrapper className="pt-[2em] pb-[4em] text-center md:py-[12em]  lg:py-[6em] lg:text-left">
						<ContentWrapper.Title className="mb-[8px] lg:mb-[16px]">
							<h1 className="title-4 lg:title-1 text-black">{heroTitle}</h1>
						</ContentWrapper.Title>
						<ContentWrapper.Description className="text-black">
							<RichText value={heroDescription?.contentRaw} />
						</ContentWrapper.Description>
						<ContentWrapper.CTA className="mt-[32px] pb-[2em] lg:pb-0">
							<CtaWrapper.CTA className="bg-primary-shade-1 para-3 lg:para-2 h-[52px] w-[184px] rounded-lg py-1 px-4 tracking-wide text-white  md:py-2 md:px-8 lg:h-[64px] lg:w-[182px] lg:tracking-wider ">
								<p>{heroButton?.text}</p>
							</CtaWrapper.CTA>
						</ContentWrapper.CTA>
					</ContentWrapper>
				</SectionContentWrapper>
			</CTAWithImage>
		);
}
export default ElectricalHeroContent

