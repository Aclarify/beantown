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
	const homeData = pageContent.page[0];
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
						<Carousel
							responsive={responsive}
							additionalTransfrom={0}
							centerMode={false}
							autoPlay={true}
							infinite
							autoPlaySpeed={2000}
							removeArrowOnDeviceType={['tablet', 'desktop', 'mobile']}
							className="lg:flex lg:justify-center "
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
				</div>
			</section>
		</>
	);
}
