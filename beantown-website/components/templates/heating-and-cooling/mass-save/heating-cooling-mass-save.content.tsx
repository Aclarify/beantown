import React, { useContext } from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import RichText from 'components/molecules/rich-text.molecule';
import { HeatingCoolingContentProps } from 'pages/heating-and-cooling';
import ContentWrapper from 'components/organisms/content-wrapper.organism';
import MaskedImageWithBackgroundVector from 'components/organisms/masked-image-with-blob.organism';
import useWindowDimensions from '@lib/hooks/use-window-dimensions.hook';
import CtaWrapper from 'components/molecules/cta-wrapper.molecule';
import Animate from 'components/molecules/animate.molecule';
import clsx from 'clsx';
import { buttonHoverStyle } from '@lib/styles/button.style';
import { showUnderConstructionMsg } from 'utils/helper';

const HeatingCoolingMassSaveContent = () => {
	const { pageContent } =
		useContext<GlobalContextProps<HeatingCoolingContentProps>>(GlobalContext);
	const { width } = useWindowDimensions();

	if (!pageContent) {
		return null;
	}
	const pageData = pageContent.page[0];
	const { massSaveTitle, massSaveDescription, massSaveButton, massSaveImage } =
		pageData;

	return (
		<div
			id="section-wrapper"
			className="z-10 flex  flex-col overflow-hidden  px-5 pb-[5em]"
		>
			<div
				id="content-image-wrapper"
				className="flex w-full flex-col-reverse items-center  lg:flex  lg:flex-row "
			>
				<div
					id="content-wrapper"
					className="z-10 flex basis-1/2 flex-col items-start text-left lg:pt-20 "
				>
					<ContentWrapper>
						<ContentWrapper.Title>
							<Animate bottom>
								<h2 className=" text-primary-black ">{massSaveTitle}</h2>
							</Animate>
						</ContentWrapper.Title>
						<ContentWrapper.Description className=" text-gray-shade-1 text-left">
							<Animate>
								<RichText value={massSaveDescription?.contentRaw} />
							</Animate>
						</ContentWrapper.Description>
						<ContentWrapper.CTA className=" mt-4 lg:mt-8">
							<CtaWrapper.CTA
								onClick={showUnderConstructionMsg}
								className={clsx(
									'bg-service-red  button text-white',
									buttonHoverStyle
								)}
							>
								{massSaveButton?.text}
							</CtaWrapper.CTA>
						</ContentWrapper.CTA>
					</ContentWrapper>
				</div>
				<div
					id="image-wrapper"
					className="mb-8 md:mt-12  md:basis-1/2 md:px-20 lg:px-10  "
				>
					<MaskedImageWithBackgroundVector
						imageURL={massSaveImage?.asset?.url || ''}
						imgAltText={massSaveImage?.asset?.altText || ''}
						width={width > 768 ? 1000 : 500}
						height={width > 768 ? 1000 : 500}
						maskImg={
							width > 768
								? './images/heating-cooling/mass-save/hc-mass-save-blob.svg'
								: './images/heating-cooling/mass-save/hc-mass-save-blob-mask-mobile.svg'
						}
						bgImg={
							width > 768
								? './images/heating-cooling/mass-save/hc-mass-save-bg-blob.svg'
								: './images/heating-cooling/mass-save/hc-mass-save-blob.svg'
						}
					/>
				</div>
			</div>
		</div>
	);
};

export default HeatingCoolingMassSaveContent;
