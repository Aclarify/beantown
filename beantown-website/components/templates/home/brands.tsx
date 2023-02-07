import { useContext } from 'react';
import React from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { HomePageContentProps } from 'pages';
import Image from 'next/image';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function Brands() {
	const { pageContent } =
		useContext<GlobalContextProps<HomePageContentProps>>(GlobalContext);
	if (!pageContent) {
		return null;
	}
	const homeData = pageContent.home[0];
	const { clientsLogo, brandsTitle } = homeData;

	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 5,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 5,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 3,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};
	return (
		<>
			<section
				id="brand-desktop"
				className="bg-primary-white-shade-1 hidden lg:block pt-[6em] pb-[6em]  h-[44vh] relative -top-[1em] "
				style={{
					WebkitMaskImage: "url('./brand-wave.svg')",
					WebkitMaskSize: 'cover',
					maskImage: "url('./brand-wave.svg')",
					maskSize: 'cover',
				}}
			>
				<div className="flex  justify-center pt-10">
					<span className="title-6 lg:title-3 text-primary-black p-4 m-4">
						{brandsTitle}
					</span>
				</div>
				<div>
					<Carousel
						responsive={responsive}
						additionalTransfrom={0}
						centerMode={false}
						autoPlay={true}
						infinite
						autoPlaySpeed={2000}
						removeArrowOnDeviceType={['tablet', 'desktop', 'mobile']}
						className="lg:flex lg:justify-center"
					>
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
					</Carousel>
				</div>
			</section>
			<section
				id="brand-mobile"
				className="bg-primary-white-shade-1 block lg:hidden md:pt-[4em]  h-[50vh] md:h-[45vh] relative -top-[1em]"
				style={{
					WebkitMaskImage: "url('./brand-wave-mobile.svg')",
					WebkitMaskSize: 'cover',
					maskImage: "url('./brand-wave-mobile.svg')",
					maskSize: 'cover',
				}}
			>
				<div className="flex  justify-center pt-10">
					<span className="title-6 lg:title-3 text-primary-black p-4 m-4">
						{brandsTitle}
					</span>
				</div>
				<div>
					<Carousel
						responsive={responsive}
						additionalTransfrom={0}
						centerMode={false}
						autoPlay={true}
						infinite
						autoPlaySpeed={2000}
						removeArrowOnDeviceType={['tablet', 'desktop', 'mobile']}
						className="lg:flex lg:justify-center"
					>
						{clientsLogo?.map((logo, index) => {
							return (
								logo &&
								logo.image && (
									<div key={index} className="flex justify-center px-6">
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
					</Carousel>
				</div>
			</section>
		</>
	);
}
