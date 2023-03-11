import React, { useContext } from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { HeatingCoolingContentProps } from 'pages/heating-and-cooling';
import CTAWithImage from 'components/organisms/cta-with-image.organism';
import CTATextContent, {
	CTAButton,
} from 'components/organisms/cta-text-content.organism';

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
					<CTAButton
						text={finalCtaButton?.text || ''}
						textColor="lg:text-service-red text-primary-black"
						bgColor="bg-white"
						href={finalCtaButton?.href || ''}
					/>
				</CTATextContent>
			</div>
		</CTAWithImage>
	);
};

export default HeatingCoolingPageCTAContent;
