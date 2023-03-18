import React, { useContext } from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { MembershipsContentProps } from 'pages/memberships';
import CTAWithImage from 'components/organisms/cta-with-image.organism';
import CTATextContent, {
	CTAButton,
} from 'components/organisms/cta-text-content.organism';
import Animate from 'components/molecules/animate.molecule';
import BookNowButton from 'components/atoms/book-now-button.atom';

const MembershipsPageCTAContent = () => {
	const { pageContent } =
		useContext<GlobalContextProps<MembershipsContentProps>>(GlobalContext);
	if (!pageContent) {
		return null;
	}
	const pageData = pageContent.page[0];
	const { ctaImage, ctaTitle, ctaDescription, finalCtaButton } = pageData;
	return (
		<>
			<CTAWithImage
				heroImageURL={ctaImage?.asset?.url || ''}
				heroImageAltText={'Hero image'}
				textContentBGImage={
					'/images/memberships/footer-cta/memberships-cta-spiral.svg'
				}
				textContentBGImageForSmallScreen={
					'/images/memberships/footer-cta/memberships-cta-spiral-mobile.svg'
				}
				heroImagePosition="right"
				bgColor="var(--secondary-color-shade-2-rgb)"
			>
				<div className="text-primary-shade-1">
					<CTATextContent title={ctaTitle || ''} description={ctaDescription}>
						<BookNowButton
							fontColor="text-white"
							bgColor="bg-primary-shade-1"
							buttonStyle="button"
						>
							{finalCtaButton?.text}
						</BookNowButton>
					</CTATextContent>
				</div>
			</CTAWithImage>
		</>
	);
};

export default MembershipsPageCTAContent;
