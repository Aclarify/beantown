import React, { useContext } from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import ContentWrapper from 'components/organisms/content-wrapper.organism';
import CTAWithImage from 'components/organisms/cta-with-image.organism';
import CtaWrapper from 'components/molecules/cta-wrapper.molecule';
import SectionContentWrapper from 'components/molecules/section-content-wrapper.molecule';
import { PlumbingContentProps } from 'pages/plumbing';

const PlumbingCTAContent = () => {
	const { pageContent } =
		useContext<GlobalContextProps<PlumbingContentProps>>(GlobalContext);
	if (!pageContent) {
		return null;
	}
	const pageData = pageContent.page[0];
	const { ctaImage, ctaTitle, ctaButton } = pageData;
	console.log(pageData);
	return (
		<CTAWithImage
			heroImageURL={ctaImage?.asset?.url || ''}
			heroImageAltText={'Hero image'}
			textContentBGImage={'/images/plumbing/cta/plumbing-cta-bg-vector.svg'}
			textContentBGImageForSmallScreen={
				'/images/plumbing/cta/plumbing-cta-bg-vector-mobile.svg'
			}
			heroImagePosition="left"
			gradientFromColor="from-service-green"
			gradientToColor="bg-service-green"
		>
			<ContentWrapper className="2xl:padding-for-section  pt-[2em] pb-[4em] text-center md:px-[10em] md:py-[12em] lg:px-[2em] lg:py-[6em] lg:text-left  flex flex-col justify-between ">
				<ContentWrapper.Title className="  mb-2 lg:mb-4">
					<h1 className="title-5 lg:title-2 text-white lg:leading-[70px]">
						{ctaTitle}
					</h1>
				</ContentWrapper.Title>
				<ContentWrapper.CTA className="pb-[1em] lg:pb-4">
					<CtaWrapper.CTA className="para-3 lg:para-2 text-service-green h-[52px] w-[184px] rounded-lg bg-white py-1 px-4  tracking-wide  md:py-2  md:px-8 lg:h-[64px] lg:w-[198px]  lg:tracking-wider ">
						<p>{ctaButton?.text}</p>
					</CtaWrapper.CTA>
				</ContentWrapper.CTA>
			</ContentWrapper>
		</CTAWithImage>
	);
};

export default PlumbingCTAContent;
