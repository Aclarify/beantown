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
			bgColor="var(--services-red-color-rgb)"
		>
			<ContentWrapper>
				<ContentWrapper.Title>
					<h1 className=" text-white">{ctaTitle}</h1>
				</ContentWrapper.Title>
				<ContentWrapper.CTA>
					<CtaWrapper.CTA className=" lg:text-service-red text-primary-black bg-white  ">
						<p>{finalCtaButton?.text}</p>
					</CtaWrapper.CTA>
				</ContentWrapper.CTA>
			</ContentWrapper>
		</CTAWithImage>
	);
};

export default HeatingCoolingPageCTAContent;
