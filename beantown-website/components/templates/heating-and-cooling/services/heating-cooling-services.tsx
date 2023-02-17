import RichText from 'components/molecules/rich-text.molecule';
import ContentWrapper from 'components/organisms/content-wrapper.organism';
import React, { useContext } from 'react';
import Image from 'next/image';
import HeatingCoolingServiceCard from './heating-cooling-service-cards';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { HeatingCoolingContentProps } from 'pages/heating-and-cooling';
import WaveWrapper from 'components/molecules/wave-wrapper.molecule';

export default function HeatingCoolingServices() {
	const { pageContent } =
		useContext<GlobalContextProps<HeatingCoolingContentProps>>(GlobalContext);
	if (!pageContent) {
		return null;
	}
	const pageData = pageContent.page[0];

	const { servicesTitle, servicesDescription, servicesGroup } = pageData;
	return (
		<section
			id="heatingServices"
			className="z-5 relative -mt-[1em] md:-mt-[2em] lg:-mt-[5em]  "
		>
			<WaveWrapper waveURL="/images/heating-cooling/services/hc-services-top-wave.svg"></WaveWrapper>
			<Image
				src={'/images/heating-cooling/hc-blob.svg'}
				height={600}
				width={500}
				alt="Left Blob "
				className="absolute left-0 hidden -translate-x-[40%] transform md:block"
			/>
			<Image
				src={'/images/heating-cooling/hc-blob.svg'}
				height={180}
				width={200}
				alt="Top Left Blob Mobile"
				className=" absolute left-0 translate-y-[61%] -translate-x-[38%] transform md:hidden"
			/>

			<div className="lg:padding-for-section relative px-[20px]">
				<div className="  flex flex-col items-center text-center ">
					<ContentWrapper>
						<ContentWrapper.Title>
							<h1 className="title-5 lg:title-2 text-primary-black mb-4">
								{servicesTitle}
							</h1>
						</ContentWrapper.Title>
						<ContentWrapper.Description>
							<RichText value={servicesDescription?.contentRaw} />
						</ContentWrapper.Description>
					</ContentWrapper>
				</div>
				<div className="  mx-4 flex flex-wrap rounded-lg bg-[FFFFFF] md:-mx-4 ">
					{servicesGroup?.map((content, index) => {
						return (
							<HeatingCoolingServiceCard
								key={index}
								title={content?.titleText || ''}
								content={content?.description || ''}
								thumbnailSrc={content?.image?.asset?.url || ''}
								thumbnailAltText={''}
							/>
						);
					})}
				</div>
			</div>

			<Image
				src={'/images/heating-cooling/hc-blob.svg'}
				height={600}
				width={500}
				alt="Right Blob"
				className="absolute right-0 bottom-0 z-[-1] hidden translate-x-[40%] translate-y-[30%] transform md:block"
			/>
			<Image
				src={'/images/heating-cooling/hc-blob.svg'}
				height={180}
				width={200}
				alt="Bottom Left Blob Mobile"
				className=" absolute left-0 bottom-0 z-[-1] -translate-x-[36%] -translate-y-[2%] transform md:hidden"
			/>
			<Image
				src={'/images/heating-cooling/hc-blob.svg'}
				height={180}
				width={200}
				alt="Right Blob Mobile"
				className="absolute right-0 bottom-0 z-[-1] translate-x-[27%]  -translate-y-[354%] transform md:hidden"
			/>
		</section>
	);
}
