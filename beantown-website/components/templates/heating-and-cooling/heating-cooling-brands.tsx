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
		dots: false,
		infinite: true,
		speed: 2000,
		autoplaySpeed: 2000,
		cssEase: 'linear',
		autoplay: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		pauseOnHover: false,
		responsive: [
			{
				breakpoint: 1800,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
					infinite: true,
					dots: false,
				},
			},
			{
				breakpoint: 1500,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
					infinite: true,
					dots: false,
				},
			},
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
					infinite: true,
					dots: false,
				},
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
					infinite: true,
					dots: false,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					initialSlide: 1,
					infinite: true,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
				},
			},
		],
	};
	let clonedLogoArray = clientsLogo ? [...clientsLogo] : [];
	if (clientsLogo && clientsLogo?.length < 5) {
		clonedLogoArray = [...clientsLogo, ...clientsLogo];
	}
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
							{clonedLogoArray?.map((logo, index) => {
								return (
									logo &&
									logo.image && (
										<div
											key={index}
											className="grid grid-cols-1 sm:grid-cols-4	"
										>
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
