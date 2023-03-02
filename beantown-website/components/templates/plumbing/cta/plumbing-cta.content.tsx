import React, { useContext } from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import ContentWrapper from 'components/organisms/content-wrapper.organism';
import CTAWithImage from 'components/organisms/cta-with-image.organism';
import CtaWrapper from 'components/molecules/cta-wrapper.molecule';
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
			bgColor="var(--services-green-color-rgb)"
		>
			<ContentWrapper className="2xl:padding-for-section flex flex-col justify-between px-[5em] text-center sm:px-[12em] md:px-[9em] lg:px-[2em]  lg:text-left">
				<ContentWrapper.Title className="  mb-2 px-2 md:px-[9rem] lg:mb-4 lg:px-0">
					<h1 className="title-5 lg:title-2 text-white lg:leading-[70px]">
						{ctaTitle}
					</h1>
				</ContentWrapper.Title>
				<ContentWrapper.CTA className="mt-8 pb-[1em] lg:pb-0">
					<CtaWrapper.CTA className="para-3 lg:para-2 text-service-green h-[52px] w-[184px] rounded-lg bg-white py-1 px-4  tracking-wide  md:py-2  md:px-8 lg:h-[64px] lg:w-[198px]  lg:tracking-wider ">
						<p>{ctaButton?.text}</p>
					</CtaWrapper.CTA>
				</ContentWrapper.CTA>
			</ContentWrapper>
		</CTAWithImage>
	);
};

export default PlumbingCTAContent;
