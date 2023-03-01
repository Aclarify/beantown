import React, { useContext } from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { AboutUsContentProps } from 'pages/about-us';
import RichText from 'components/molecules/rich-text.molecule';
import ContentWrapper from 'components/organisms/content-wrapper.organism';
import CTAWithImage from 'components/organisms/cta-with-image.organism';
import CtaWrapper from 'components/molecules/cta-wrapper.molecule';
import SectionContentWrapper from 'components/molecules/section-content-wrapper.molecule';

const AboutUsHeroContent = () => {
	const { pageContent } =
		useContext<GlobalContextProps<AboutUsContentProps>>(GlobalContext);
	if (!pageContent) {
		return null;
	}
	const pageData = pageContent.page[0];
	const { heroImage, heroTitle, heroDescription } = pageData;
	return (
		<CTAWithImage
			heroImageURL={heroImage?.asset?.url || ''}
			heroImageAltText={'Hero image'}
			textContentBGImage={'/images/plumbing/hero/plumbing-hero-bg-vector.svg'}
			textContentBGImageForSmallScreen={
				'/images/plumbing/hero/plumbing-hero-bg-vector-mobile.svg'
			}
			heroImagePosition="right"
			bgColor="var(--services-green-color-rgb)"
			isImageToBePrefetched={true}
		>
			<SectionContentWrapper>
				<ContentWrapper className="pt-[4em] pb-[4em] text-center md:py-[12em]  lg:py-[10em] lg:text-left">
					<ContentWrapper.Title className="mb-[8px] lg:mb-[16px] ">
						<h1 className="title-4 lg:title-1 text-white">{heroTitle}</h1>
					</ContentWrapper.Title>
					<ContentWrapper.Description className="text-white">
						<RichText value={heroDescription} />
					</ContentWrapper.Description>
				</ContentWrapper>
			</SectionContentWrapper>
		</CTAWithImage>
	);
};

export default AboutUsHeroContent;
