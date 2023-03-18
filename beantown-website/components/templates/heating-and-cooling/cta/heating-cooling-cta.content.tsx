import React, { useContext } from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { HeatingCoolingContentProps } from 'pages/heating-and-cooling';
import CTAWithImage from 'components/organisms/cta-with-image.organism';
import CTATextContent, {
	CTAButton,
} from 'components/organisms/cta-text-content.organism';
import BookNowButton from 'components/atoms/book-now-button.atom';

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
			<div className="text-white">
				<CTATextContent title={ctaTitle || ''} isHero={false}>
					<BookNowButton
						fontColor="text-primary-black lg:text-service-red"
						bgColor="bg-white"
						buttonStyle="button"
					>
						{finalCtaButton?.text}
					</BookNowButton>
				</CTATextContent>
			</div>
		</CTAWithImage>
	);
};

export default HeatingCoolingPageCTAContent;
