import React, { useContext } from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { HeatingCoolingContentProps } from 'pages/heating-and-cooling';
import CTAWithImage from 'components/organisms/cta-with-image.organism';
import CTATextContent from 'components/organisms/cta-text-content.organism';
import BookNowButton from 'components/atoms/book-now-button.atom';

const HeatingCoolingHeroContent = () => {
	const { pageContent } =
		useContext<GlobalContextProps<HeatingCoolingContentProps>>(GlobalContext);
	if (!pageContent) {
		return null;
	}
	const pageData = pageContent.page[0];
	const { heroImage, heroTitle, heroDescription, heroButton } = pageData;
	return (
		<CTAWithImage
			heroImageURL={heroImage?.asset?.url || ''}
			heroImageAltText={'Hero image'}
			textContentBGImage={'/images/heating-cooling/hero/hc-hero-vector.svg'}
			textContentBGImageForSmallScreen={
				'/images/heating-cooling/hero/hc-hero-bg-wave-mobile.svg'
			}
			heroImagePosition="right"
			bgColor="var(--services-red-color-rgb)"
			isImageToBePrefetched={true}
		>
			<div className="text-white">
				<CTATextContent
					title={heroTitle || ''}
					description={heroDescription}
					isHero={true}
				>
					<BookNowButton fontColor="text-white" bgColor="bg-primary-shade-1">
						{heroButton?.text}
					</BookNowButton>
				</CTATextContent>
			</div>
		</CTAWithImage>
	);
};

export default HeatingCoolingHeroContent;
