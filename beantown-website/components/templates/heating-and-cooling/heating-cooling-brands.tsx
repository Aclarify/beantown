import { useContext } from 'react';
import React from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { HeatingCoolingContentProps } from 'pages/heating-and-cooling';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import WaveWrapper from 'components/molecules/wave-wrapper.molecule';

export default function HeatingCoolingBrands() {
	const { pageContent } =
		useContext<GlobalContextProps<HeatingCoolingContentProps>>(GlobalContext);
	if (!pageContent) {
		return null;
	}
	const pageData = pageContent.page[0];
	const { clientsLogo, brandsTitle } = pageData;

	const settings = {
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		cssEase: 'linear',
	};
	return (
		<>
			<section
				id="brand-desktop"
				className="  relative  z-10 
				-mt-[1em] mb-[12em]  md:-mt-[2em] lg:-mt-[3em] 2xl:-mt-[4em]"
			>
				<WaveWrapper waveURL="/images/heating-cooling/brands/hc-brands-top-wave.svg"></WaveWrapper>
				<div className="  absolute top-1/2 left-1/2 z-20 w-full -translate-y-1/2 -translate-x-1/2 transform">
					<div className="flex  justify-center pt-[10em]">
						<span className="title-6 lg:title-3 text-primary-black m-4 p-4">
							{brandsTitle}
						</span>
					</div>
					<div>
						<Slider {...settings}>
							{clientsLogo?.map((logo, index) => {
								return (
									logo &&
									logo.image && (
										<div key={index} className="flex justify-center">
											<Image
												alt={logo?.image?.asset?.altText || ''}
												width={200}
												height={300}
												src={logo?.image?.asset?.url || ''}
											/>
										</div>
									)
								);
							})}
						</Slider>
					</div>
				</div>
			</section>
		</>
	);
}
