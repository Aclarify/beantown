import RichText from 'components/molecules/rich-text.molecule';
import ContentWrapper from 'components/organisms/content-wrapper.organism';
import React, { useContext } from 'react';
import Image from 'next/image';
import HeatingCoolingServiceCard from './heating-cooling-service-cards';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { HeatingCoolingContentProps } from 'pages/heating-and-cooling';

export default function HeatingCoolingServices() {
	const { pageContent } =
		useContext<GlobalContextProps<HeatingCoolingContentProps>>(GlobalContext);
	if (!pageContent) {
		return null;
	}
	const pageData = pageContent.page[0];

const { servicesTitle, servicesDescription, servicesGroup } = pageData;
	return (
		<section id="heatingCard">
			<div className="container relative mx-auto w-full">
				<div className="absolute  -left-1/4 -top-40  h-[500px] w-[500px]">
					<Image
						id="hc-services-blob"
						src={'/images/heating-cooling/services/hc-services-blob.svg'}
						alt={'blob vector shape Image'}
						width={500}
						height={500}
					></Image>
				</div>
				<div className="mt-20 flex flex-col items-center text-center  ">
					<ContentWrapper>
						<ContentWrapper.Title>
							<h1 className="title-2 lg:title-1 text-primary-black mb-4">
								{servicesTitle}
							</h1>
						</ContentWrapper.Title>
						<ContentWrapper.Description className="para-2 lg:para-1">
							<RichText value={servicesDescription?.contentRaw} />
						</ContentWrapper.Description>
					</ContentWrapper>
				</div>
				<div className="container mx-auto ">
					<div className="grid grid-cols-1  items-center gap-6 rounded-lg bg-[FFFFFF]   md:grid-cols-2 lg:grid-cols-4 ">
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
				<div className="absolute -right-1/4 bottom-0 h-[500px] w-[500px]">
					<Image
						id="hc-services-blob"
						src={'/images/heating-cooling/services/hc-services-blob.svg'}
						alt={'blob vector shape Image'}
						width={500}
						height={500}
					></Image>
				</div>
		<section
			id="heatingServices"
			className="z-2 relative -mt-[1em] md:-mt-[2em] lg:-mt-[5em] "
		>
			<WaveWrapper waveURL="/images/heating-cooling/services/hc-services-top-wave.svg"></WaveWrapper>
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
			<div className="  grid grid-cols-1  items-center rounded-lg bg-[FFFFFF]  sm:grid-cols-4 ">
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
