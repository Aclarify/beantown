import React, { useContext } from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import CTAWithImage from 'components/organisms/cta-with-image.organism';
import { AboutUsContentProps } from 'pages/about-us';
import CTATextContent, {
	CTAButton,
} from 'components/organisms/cta-text-content.organism';
import { showUnderConstructionMsg } from 'utils/helper';

const CommunityCTAContent = () => {
	const { pageContent } =
		useContext<GlobalContextProps<AboutUsContentProps>>(GlobalContext);
	if (!pageContent) {
		return null;
	}
	const pageData = pageContent.page[0];
	const { communityCtaButton, communityctaImage, communityCtaTitle } = pageData;

	return (
		<CTAWithImage
			heroImageURL={communityctaImage?.asset?.url || ''}
			heroImageAltText={'Hero image'}
			textContentBGImage={
				'/images/about-us/community-CTA/community-cta-bg-vector.svg'
			}
			textContentBGImageForSmallScreen={
				'/images/about-us/community-CTA/community-cta-bg-vector.svg'
			}
			heroImagePosition="left"
			bgColor="var(--primary-color-shade-2-rgb)"
		>
			<div className="text-white" onClick={showUnderConstructionMsg}>
				<CTATextContent title={communityCtaTitle || ''}>
					<CTAButton						
						text={communityCtaButton?.text || ''}
						textColor="text-primary-shade-1"
						bgColor="bg-primary-white-shade-1"
					/>
				</CTATextContent>
			</div>
		</CTAWithImage>
	);
};

export default CommunityCTAContent;
