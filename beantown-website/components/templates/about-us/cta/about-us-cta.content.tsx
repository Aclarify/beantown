import React, { useContext } from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import CTAWithImage from 'components/organisms/cta-with-image.organism';
import { AboutUsContentProps } from 'pages/about-us';
import CTATextContent, {
	CTAButton,
} from 'components/organisms/cta-text-content.organism';
const AboutUSCTAContent = () => {
	const { pageContent } =
		useContext<GlobalContextProps<AboutUsContentProps>>(GlobalContext);
	if (!pageContent) {
		return null;
	}
	const pageData = pageContent.page[0];
	const { ctaButton, ctaImage, ctaTitle, ctaDescription } = pageData;

	return (
		<CTAWithImage
			heroImageURL={ctaImage?.asset?.url || ''}
			heroImageAltText={'Hero image'}
			textContentBGImage={'/images/home/footer-cta/home-cta-spiral.svg'}
			textContentBGImageForSmallScreen={
				'/images/home/footer-cta/home-cta-spiral-mobile.svg'
			}
			heroImagePosition="right"
			bgColor="var(--secondary-color-shade-2-rgb)"
		>
			
				<div className="text-primary-shade-1">
					<CTATextContent
						title={ctaTitle || ''}
						description={ctaDescription}
						isHero={false}
					>
						<CTAButton
							text={ctaButton?.text || ''}
							textColor="text-white"
							bgColor="bg-primary-shade-1"
						/>
					</CTATextContent>
				</div>
			
		</CTAWithImage>
	);
};

export default AboutUSCTAContent;
