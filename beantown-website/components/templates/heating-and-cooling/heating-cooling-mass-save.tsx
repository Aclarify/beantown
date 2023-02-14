import React, { useContext } from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import RichText from 'components/molecules/rich-text.molecule';
import { HeatingCoolingContentProps } from 'pages/heating-and-cooling';
import Button from 'components/atoms/button.atom';
import ContentWrapper from 'components/organisms/content-wrapper.organism';
import MaskedImageWithBackgroundVector from 'components/organisms/masked-image-with-blob.organism';
import useWindowDimensions from '@lib/hooks/use-window-dimensions.hook';
import WaveWrapper from 'components/molecules/wave-wrapper.molecule';
export default function MassSave() {
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
		<section
			id="massSave"
			className="z-5 relative
			py-[25rem] pb-[50vw] 
			md:pt-[10vw] md:pb-[25%]"
		>
			<div
				id="section-wrapper"
				className=" z-1  flex flex-col overflow-hidden pb-[5em]"
			>
				<div
					id="content-image-wrapper"
					className="flex w-full flex-col-reverse items-center px-6 md:flex  md:flex-row lg:px-10"
				>
					<div
						id="content-wrapper"
						className="z-10 flex basis-1/2 flex-col items-start text-justify lg:pt-20 "
					>
						<ContentWrapper>
							<ContentWrapper.Title>
								<h1 className="title-5 lg:title-2 text-primary-black ">
									{massSaveTitle}
								</h1>
							</ContentWrapper.Title>
							<ContentWrapper.Description>
								<RichText value={massSaveDescription?.contentRaw} />
							</ContentWrapper.Description>
							<ContentWrapper.CTA className="mt-[16px] lg:mt-[32px]">
								<Button fontColor="text-white" bgColor=" bg-[#BC3B39]">
									{massSaveButton?.text}
								</Button>
							</ContentWrapper.CTA>
						</ContentWrapper>
					</div>
					<div
						id="image-wrapper"
						className="mb-8 md:mt-12  md:basis-1/2 md:px-20"
					>
						<MaskedImageWithBackgroundVector
							imageURL={massSaveImage?.asset?.url || ''}
							imgAltText={massSaveImage?.asset?.altText || ''}
							width={width > 768 ? 1000 : 500}
							height={width > 768 ? 1000 : 500}
							maskImg={
								width > 768
									? './images/heating-cooling/mass-save/hc-mass-save-blob.svg'
									: './images/heating-cooling/mass-save/hc-mass-save-bg-blob.svg'
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
			{/* <div id="waveContainer">
				<WaveWrapper waveURL="/images/heating-cooling/mass-save/hc-mass-save-bottom-wave.svg"></WaveWrapper>
			</div> */}
		</section>
	);
}
