import React, { useContext } from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import CTAWithImage from 'components/organisms/cta-with-image.organism';
import { ElectricalContentProps } from 'pages/electrical';
import CTATextContent, {
	CTAButton,
} from 'components/organisms/cta-text-content.organism';

const ElectricalPageCTAContent = () => {
	const { pageContent } =
		useContext<GlobalContextProps<ElectricalContentProps>>(GlobalContext);
	if (!pageContent) {
		return null;
	}
	const pageData = pageContent.page[0];
	const { ctaImage, ctaTitle, ctaButton } = pageData;
	return (
		<CTAWithImage
			heroImageURL={ctaImage?.asset?.url || ''}
			heroImageAltText={'Hero image'}
			textContentBGImage={'/images/electrical/cta/electrical-cta-bg-vector.svg'}
			textContentBGImageForSmallScreen={
				'/images/electrical/cta/electrical-cta-bg-vector-mobile.svg'
			}
			heroImagePosition="left"
			bgColor="var(--services-yellow-color-rgb)"
		>
			<div className="text-primary-black">
				<CTATextContent title={ctaTitle || ''}>
					<CTAButton
						text={ctaButton?.text || ''}
						textColor="text-primary-black"
						bgColor="bg-white"
					/>
				</CTATextContent>
			</div>
		</CTAWithImage>
	);
};

export default ElectricalPageCTAContent;
