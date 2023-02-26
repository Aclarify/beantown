import React, { useContext } from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { HeatingCoolingContentProps } from 'pages/heating-and-cooling';
import ContentWrapper from 'components/organisms/content-wrapper.organism';
import CTAWithImage from 'components/organisms/cta-with-image.organism';
import CtaWrapper from 'components/molecules/cta-wrapper.molecule';
import SectionContentWrapper from 'components/molecules/section-content-wrapper.molecule';

const HeatingCoolingPageCTAContent = () => {
	const { pageContent } =
		useContext<GlobalContextProps<HeatingCoolingContentProps>>(GlobalContext);
	if (!pageContent) {
		return null;
	}
	const pageData = pageContent.page[0];
	const { ctaImage, ctaTitle, finalCtaButton } = pageData;
	return (
		<CTAWithImage
			heroImageURL={ctaImage?.asset?.url || ''}
			heroImageAltText={'Hero image'}
			textContentBGImage={'/images/heating-cooling/cta/hc-cta-bg-vector.svg'}
			textContentBGImageForSmallScreen={
				'/images/heating-cooling/cta/hc-cta-bg-vector-mobile.svg'
			}
			heroImagePosition="left"
			gradientFromColor="from-service-red"
			gradientToColor="bg-service-red"
			bgColor="var(--services-red-color-rgb)"
		>
			<SectionContentWrapper>
				<ContentWrapper className="pt-[2em] pb-[4em] text-center md:px-[10em] md:py-[12em] lg:px-[2em] lg:py-[6em] lg:text-left">
					<ContentWrapper.Title className=" mb-2 lg:mb-4">
						<h1 className="title-5 lg:title-2 text-white lg:leading-[70px]">
							{ctaTitle}
						</h1>
					</ContentWrapper.Title>
					<ContentWrapper.CTA className=" mt-8 pb-[1em] lg:pb-0">
						<CtaWrapper.CTA className="para-3 lg:para-2 lg:text-service-red text-primary-black h-[52px] w-[184px] rounded-lg bg-white py-1 px-4  tracking-wide  md:py-2  md:px-8 lg:h-[64px] lg:w-[198px]  lg:tracking-wider ">
							<p>{finalCtaButton?.text}</p>
						</CtaWrapper.CTA>
					</ContentWrapper.CTA>
				</ContentWrapper>
			</SectionContentWrapper>
		</CTAWithImage>
	);
};

export default HeatingCoolingPageCTAContent;
