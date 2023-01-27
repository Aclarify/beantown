import  { useContext } from 'react';
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
			items: 2,
		},
	};
	return (
		<section
			id="brand"
			className="bg-white"
			style={{
				WebkitMaskImage: "url('./brand-top-wave-mask.svg')",
				WebkitMaskSize: 'cover',
			}}
		>
			<div className="flex  justify-center pt-10">
				<span className="title-6 md:title-3 text-primary-black p-4 m-4">
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
					 removeArrowOnDeviceType={['tablet', 'desktop','mobile']}
				>
					{clientsLogo?.map((logo, index) => {
						return (
							logo &&
							logo.image && (
								<div key={index}>
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
	);
}
