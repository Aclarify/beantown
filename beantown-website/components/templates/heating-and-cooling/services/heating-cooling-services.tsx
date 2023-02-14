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
			className="z-2 -md:[2em] relative -mt-[1em] lg:-mt-[5em] "
		>
			<div id="waveContainer">
				<WaveWrapper waveURL="/images/heating-cooling/services/hc-services-top-wave.svg"></WaveWrapper>
			</div>
			<div className=" mt-20 flex flex-col items-center text-center ">
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
			<div className=" mt-12 grid grid-cols-1  items-center rounded-lg bg-[FFFFFF]  sm:grid-cols-4 ">
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
		</section>
	);
}
