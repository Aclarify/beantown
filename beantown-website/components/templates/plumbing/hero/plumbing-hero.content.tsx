import React, { useContext } from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { PlumbingContentProps } from 'pages/plumbing';
import CTAWithImage from 'components/organisms/cta-with-image.organism';
import CTATextContent from 'components/organisms/cta-text-content.organism';
import BookNowButton from 'components/atoms/book-now-button.atom';

const PlumbingHeroContent = () => {
	const { pageContent } =
		useContext<GlobalContextProps<PlumbingContentProps>>(GlobalContext);
	if (!pageContent) {
		return null;
	}
	const pageData = pageContent.page[0];
	const { heroImage, heroTitle, heroDescription, heroButton } = pageData;
	return (
		<CTAWithImage
			heroImage={heroImage}
			heroImageAltText={'Hero image'}
			textContentBGImage={'/images/plumbing/hero/plumbing-hero-bg-vector.svg'}
			textContentBGImageForSmallScreen={
				'/images/plumbing/hero/plumbing-hero-bg-vector-mobile.svg'
			}
			heroImagePosition="right"
			bgColor="var(--services-green-color-rgb)"
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

export default PlumbingHeroContent;
