import RichText from 'components/molecules/rich-text.molecule';
import ContentWrapper from 'components/organisms/content-wrapper.organism';
import React from 'react';
import Image from 'next/image';
import HeatingCoolingServiceCard from './heating-cooling-service-cards';

export default function HeatingCoolingServices() {

	
	return (
		<section id="heatingCard ">
			<div className="relative z-10 my-4 flex flex-col items-center text-center sm:h-[674]  sm:w-[1488]">
				<ContentWrapper>
					<ContentWrapper.Title>
						<h1 className="title-5 lg:title-2 text-primary-black mb-4">
							{'heating & Cooling Services'}
						</h1>
					</ContentWrapper.Title>
					<ContentWrapper.Description>
						{/* <RichText value={servicesDescription?.contentRaw} /> */}
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam.
						</p>
					</ContentWrapper.Description>
				</ContentWrapper>
			</div>
			<HeatingCoolingServiceCard title={''} buttonText={''} hRef={''} thumbnailSrc={''} thumbnailAltText={''} />
		</section>
	);
}
