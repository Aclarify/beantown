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
			<ContentWrapper>
				<ContentWrapper.Title>
					<h1 className="title-5 lg:title-2 text-white">{ctaTitle}</h1>
				</ContentWrapper.Title>
				<ContentWrapper.CTA>
					<CtaWrapper.CTA className="text-service-green bg-white ">
						<p>{ctaButton?.text}</p>
					</CtaWrapper.CTA>
				</ContentWrapper.CTA>
			</ContentWrapper>
		</CTAWithImage>
	);
};

export default PlumbingCTAContent;
