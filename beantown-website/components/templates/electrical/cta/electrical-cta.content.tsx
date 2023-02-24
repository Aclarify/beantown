import React, { useContext } from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import ContentWrapper from 'components/organisms/content-wrapper.organism';
import CTAWithImage from 'components/organisms/cta-with-image.organism';
import CtaWrapper from 'components/molecules/cta-wrapper.molecule';
import SectionContentWrapper from 'components/molecules/section-content-wrapper.molecule';
import { ElectricalContentProps } from 'pages/electrical';

const ElectricalPageCTAContent = () => {
	const { pageContent } =
		useContext<GlobalContextProps<ElectricalContentProps>>(GlobalContext);
	if (!pageContent) {
		return null;
	}
	const pageData = pageContent.page[0];
	const { ctaImage, ctaTitle, ctaButton } = pageData;
	return (
		<CTAWithImage
			heroImageURL={ctaImage?.asset?.url || ''}
			heroImageAltText={'Hero image'}
			textContentBGImage={'/images/electrical/cta/electrical-cta-bg-vector.svg'}
			textContentBGImageForSmallScreen={
				'/images/electrical/cta/electrical-cta-bg-vector-mobile.svg'
			}
			heroImagePosition="left"
			gradientFromColor="from-service-yellow"
			gradientToColor="bg-service-yellow"
		>
			<ContentWrapper className="2xl:padding-for-section px-10 pt-[2em] pb-[4em] text-center md:px-[10em] md:py-[12em] lg:px-[2em] lg:py-[6em] lg:text-left">
				<ContentWrapper.Title className=" mb-2 px-2 md:px-[9rem] lg:mb-4 lg:px-0">
					<h1 className="title-5 lg:title-2 text-black lg:leading-[70px]">
						{ctaTitle}
					</h1>
				</ContentWrapper.Title>
				<ContentWrapper.CTA className=" mt-8 pb-[1em] lg:pb-0">
					<CtaWrapper.CTA className="para-3 lg:para-2  text-primary-black h-[52px] w-[184px] rounded-lg bg-white py-1 px-4  tracking-wide  md:py-2  md:px-8 lg:h-[64px] lg:w-[198px]  lg:tracking-wider ">
						<p>{ctaButton?.text}</p>
					</CtaWrapper.CTA>
				</ContentWrapper.CTA>
			</ContentWrapper>
		</CTAWithImage>
	);
};

export default ElectricalPageCTAContent;
