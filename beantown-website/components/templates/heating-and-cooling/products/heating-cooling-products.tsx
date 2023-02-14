import React, { useContext, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { HeatingCoolingContentProps } from 'pages/heating-and-cooling';
import ProductCard from './heating-cooling-product-card';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function HeatingCoolingProductsCards() {
	const { pageContent } =
		useContext<GlobalContextProps<HeatingCoolingContentProps>>(GlobalContext);
	if (!pageContent) {
		return null;
	}
	const pageData = pageContent.page[0];
	const { productsTitle, productsDescription, productsGroup } = pageData;

	const slider = React.useRef<Slider | null>(null);
	const previous = () => {
		if (slider.current) {
			slider.current.slickNext();
		}
	};
	const next = () => {
		if (slider.current) {
			slider.current.slickPrev();
		}
	};
	let settings = {
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		initialSlide: 0,
		arrows: false,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<section id="heatingCoolingProductsCards" className="mb-40 ">
			<div className=" mx-8  flex items-center justify-between">
				<div>
					<p className="text-2xl font-bold">{productsTitle}</p>
				</div>

				<div className="hidden  justify-center  gap-4 pt-4 sm:flex  ">
					<button
						onClick={next}
						className="w-20 rounded-full bg-red-100 py-4 px-6 text-lg"
					>
						<FontAwesomeIcon icon={faArrowLeft} />
					</button>
					<button
						onClick={previous}
						className=" w-20 rounded-full bg-red-900 py-4 px-6 text-lg text-white"
					>
						<FontAwesomeIcon icon={faArrowRight} />
					</button>
				</div>
			</div>

			<div>
				<Slider ref={slider} {...settings} className="mx-8">
					{productsGroup?.map((productInfo, index) => {
						return (
							<ProductCard
								key={index}
								title={productInfo?.titleText || ''}
								thumbnailSrc={productInfo?.image?.asset?.url || ''}
								thumbnailAltText={'Heating and Cooling Product Images'}
								description={productInfo?.description || ''}
							/>
						);
					})}
				</Slider>
			</div>

			<div className="flex justify-center gap-4 pt-4 lg:hidden ">
				<button
					onClick={next}
					className="w-16 rounded-full bg-red-100 py-2 px-4"
				>
					<FontAwesomeIcon icon={faArrowLeft} />
				</button>
				<button
					onClick={previous}
					className=" w-16 rounded-full bg-red-900 py-2 px-4 text-white"
				>
					<FontAwesomeIcon icon={faArrowRight} />
				</button>
			</div>
		</section>
	);
}
function useRef() {
	throw new Error('Function not implemented.');
}
