import { useContext } from 'react';
import React from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { HomePageContentProps } from 'pages';
import Brands from 'components/organisms/brands.organism';
import topWave from 'public/images/home/brands/home-brands-top-wave.svg';
import bottomWave from 'public/images/home/brands/home-brands-bottom-wave.svg';
import WaveWrapper from 'components/molecules/wave-wrapper.molecule';

export default function HomeBrands() {
	const { pageContent } =
		useContext<GlobalContextProps<HomePageContentProps>>(GlobalContext);
	if (!pageContent) {
		return null;
	}
	const homeData = pageContent.page[0];
	const { clientsLogo, brandsTitle } = homeData;

	let clonedLogoArray = clientsLogo ? [...clientsLogo] : [];
	if (clientsLogo && clientsLogo?.length < 5) {
		clonedLogoArray = [...clientsLogo, ...clientsLogo];
	}
	return (
		<>
			<section id="brand-desktop" className="  relative  z-10 -mt-[6em] ">
				<WaveWrapper waveURL={topWave}></WaveWrapper>
				<div className="lg:-mb-[1em]">
					{clonedLogoArray && (
						<Brands
							brandsTitle={brandsTitle || ''}
							logoArray={clonedLogoArray || []}
							brandsBgColour={'bg-primary-white-shade-1' || ''}
						></Brands>
					)}
				</div>
				<WaveWrapper waveURL={bottomWave}></WaveWrapper>
			</section>
		</>
	);
}
