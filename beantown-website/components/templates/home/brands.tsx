import { useContext } from 'react';
import React from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { HomePageContentProps } from 'pages';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';

import 'slick-carousel/slick/slick-theme.css';

export default function Brands() {
	const { pageContent } =
		useContext<GlobalContextProps<HomePageContentProps>>(GlobalContext);
	if (!pageContent) {
		return null;
	}
	const homeData = pageContent.page[0];
	const { clientsLogo, brandsTitle } = homeData;

	 const settings = {
			dots: false,
			infinite: true,
			speed: 500,
			autoplaySpeed: 2000,
			cssEase: 'linear',
			autoplay: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			pauseOnHover: false,
			responsive: [
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
						slidesToShow: 3,
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
	
	return (
		<>
			<section
				id="brand-desktop"
				className=" 3xl:-mb-[6em] 4xl:-mb-[8em] relative top-[-5em] z-10 lg:-mb-[3em] xl:-mb-[6em]"
			>
				<div
					className="
				h-0
				w-full
				bg-[url('../public/images/home/brands/brands-small-screen-bg.svg')]
				bg-cover
				bg-no-repeat
				pt-[75%]
				lg:bg-[url('../public/images/home/brands/brands-bg.svg')] lg:bg-contain
				lg:pt-[35%]
				"
				>
					{' '}
				</div>
				<div className=" bg-primary-white-shade-1 absolute top-1/2 left-1/2 z-20 w-full -translate-y-1/2 -translate-x-1/2 transform">
					<div className="flex  justify-center md:pt-10">
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
