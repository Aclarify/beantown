import React, { useContext } from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import CTAWithImage from 'components/organisms/cta-with-image.organism';
import { PlumbingContentProps } from 'pages/plumbing';
import CTATextContent, {
	CTAButton,
} from 'components/organisms/cta-text-content.organism';
import Animate from 'components/molecules/animate.molecule';

const PlumbingCTAContent = () => {
	const { pageContent } =
		useContext<GlobalContextProps<PlumbingContentProps>>(GlobalContext);
	if (!pageContent) {
		return null;
	}
	const pageData = pageContent.page[0];
	const { ctaImage, ctaTitle, ctaButton } = pageData;
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
			<Animate bottom>
				<div className="text-white">
					<CTATextContent title={ctaTitle || ''} isHero={false}>
						<CTAButton
							text={ctaButton?.text || ''}
							href={ctaButton?.href || ''}
							textColor="text-service-green"
							bgColor="bg-white"
						/>
					</CTATextContent>
				</div>
			</Animate>
		</CTAWithImage>
	);
};

export default PlumbingCTAContent;
