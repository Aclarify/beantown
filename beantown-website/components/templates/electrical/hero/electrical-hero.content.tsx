import React, { useContext } from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import CTAWithImage from 'components/organisms/cta-with-image.organism';
import { ElectricalContentProps } from 'pages/electrical';
import CTATextContent from 'components/organisms/cta-text-content.organism';
import BookNowButton from 'components/atoms/book-now-button.atom';

const ElectricalHeroContent = () => {
	const { pageContent } =
		useContext<GlobalContextProps<ElectricalContentProps>>(GlobalContext);
	if (!pageContent) {
		return null;
	}
	const pageData = pageContent.page[0];
	const { heroImage, heroTitle, heroDescription, heroButton } = pageData;

	return (
		<CTAWithImage
			heroImageURL={heroImage?.asset?.url || ''}
			heroImageAltText={heroImage?.asset?.altText || ''}
			textContentBGImage={'/images/electrical/hero/electrical-hero-vector.svg'}
			textContentBGImageForSmallScreen={
				'/images/electrical/hero/electrical-hero-bg-vector-mobile.svg'
			}
			heroImagePosition="right"
			bgColor="var(--services-yellow-color-rgb)"
			isImageToBePrefetched={true}
		>
			<div className="text-black">
				<CTATextContent
					title={heroTitle || ''}
					description={heroDescription}
					isHero={true}
				>
					<BookNowButton
						fontColor="text-white"
						bgColor="bg-primary-shade-1"
						buttonStyle="button"
					>
						{heroButton?.text}
					</BookNowButton>
				</CTATextContent>
			</div>
		</CTAWithImage>
	);
};
export default ElectricalHeroContent;
