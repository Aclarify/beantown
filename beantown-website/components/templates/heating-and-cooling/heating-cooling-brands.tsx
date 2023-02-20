import { useContext } from 'react';
import React from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { HeatingCoolingContentProps } from 'pages/heating-and-cooling';
import WaveWrapper from 'components/molecules/wave-wrapper.molecule';
import Brands from 'components/organisms/brands.organism';

export default function HeatingCoolingBrands() {
	const { pageContent } =
		useContext<GlobalContextProps<HeatingCoolingContentProps>>(GlobalContext);
	if (!pageContent) {
		return null;
	}
	const pageData = pageContent.page[0];
	const { clientsLogo, brandsTitle } = pageData;
	let clonedLogoArray = clientsLogo ? [...clientsLogo] : [];
	if (clientsLogo && clientsLogo?.length < 5) {
		clonedLogoArray = [...clientsLogo, ...clientsLogo];
	}
	return (
		<>
			<section
				id="brand-desktop"
				className=" lg:mb[2em] 3xl:mb-[3em] 
				relative z-10 -mt-[1em]  mb-[3em] md:mb-[2em] md:-mt-[2em] lg:-mt-[3em] lg:mb-[2em] xl:mb-[3em] 2xl:mb-[5em] 2xl:-mt-[4em]"
			>
				<WaveWrapper waveURL="/images/heating-cooling/brands/hc-brands-top-wave.svg"></WaveWrapper>
				{clonedLogoArray && (
					<Brands
						brandsTitle={brandsTitle || ''}
						logoArray={clonedLogoArray || []}
						brandsBgColour={'bg-primary-white-shade-1' || ''}
					></Brands>
				)}
			</section>
		</>
	);
}
