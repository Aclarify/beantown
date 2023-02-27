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
import SectionContentWrapper from 'components/molecules/section-content-wrapper.molecule';
import { SCREEN_BREAKPOINTS } from '@typing/common/interfaces/devices.interface';

const HeatingCoolingProductsCardContent = () => {
	const slider = React.useRef<Slider | null>(null);
	const { pageContent } =
		useContext<GlobalContextProps<HeatingCoolingContentProps>>(GlobalContext);
	if (!pageContent) {
		return null;
	}
	const pageData = pageContent.page[0];
	const { productsTitle, productsGroup } = pageData;

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
	const settings = {
		speed: 500,
		slidesToShow: 4.1,
		slidesToScroll: 1,
		initialSlide: 0,
		arrows: false,
		responsive: [
			{
				breakpoint: SCREEN_BREAKPOINTS.XXL,
				settings: {
					slidesToShow: 4.05,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: SCREEN_BREAKPOINTS.XL,
				settings: {
					slidesToShow: 3.05,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: SCREEN_BREAKPOINTS.LG,
				settings: {
					slidesToShow: 2.1,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3.1,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: SCREEN_BREAKPOINTS.SM,
				settings: {
					slidesToShow: 2.1,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: SCREEN_BREAKPOINTS.XS,
				settings: {
					slidesToShow: 1.1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<>
			<SectionContentWrapper>
				<div className=" flex items-center justify-between">
					<div>
						<p className="title-5 lg:title-2 ">{productsTitle}</p>
					</div>

					<div className="hidden  justify-center  gap-4 pt-4 lg:flex  ">
						<button
							onClick={next}
							className="lg:text-service-red text-primary-shade-1 bg-secondary-shade-3 h-16 w-32 rounded-full py-4 px-6 text-xl"
						>
							<FontAwesomeIcon icon={faArrowLeft} />
						</button>
						<button
							onClick={previous}
							className=" bg-service-red h-16  w-32 rounded-full py-4 px-6 text-xl text-white"
						>
							<FontAwesomeIcon icon={faArrowRight} />
						</button>
					</div>
				</div>
			</SectionContentWrapper>

			<div>
				<div className="w-full pt-8 lg:pl-12 xl:pl-16 2xl:pl-[120px]">
					<Slider ref={slider} {...settings} className="">
						{productsGroup?.map((productInfo, index) => {
							return (
								<div
									className="product-card-wrapper  !flex justify-center px-1 xl:px-2"
									key={index}
								>
									<ProductCard
										key={index}
										title={productInfo?.titleText || ''}
										thumbnailSrc={productInfo?.image?.asset?.url || ''}
										thumbnailAltText={'Heating and Cooling Product Images'}
										description={productInfo?.description || ''}
									/>
								</div>
							);
						})}
					</Slider>
				</div>
			</div>

			<div className="flex justify-center gap-4 pt-8 lg:hidden ">
				<button
					onClick={next}
					className="lg:text-service-red text-primary-shade-1 bg-secondary-shade-3 h-12 w-20  rounded-full py-2 px-4"
				>
					<FontAwesomeIcon icon={faArrowLeft} />
				</button>
				<button
					onClick={previous}
					className=" bg-service-red h-12 w-20 rounded-full py-2 px-4 text-white"
				>
					<FontAwesomeIcon icon={faArrowRight} />
				</button>
			</div>
		</>
	);
};

export default HeatingCoolingProductsCardContent;
