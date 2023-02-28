import React from 'react';
import { ImageIcon, Maybe } from '@typing/gql/graphql';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
	brandsTitle: string;
	logoArray: Maybe<Array<Maybe<ImageIcon>>>;
	brandsBgColour: string;
}

const settings = {
	dots: false,
	infinite: true,
	speed: 6000,
	autoplay: true,
	autoplaySpeed: 0,
	cssEase: 'linear',
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
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true,
				dots: false,
			},
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				infinite: true,
			},
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				infinite: true,
			},
		},
	],
};

const Brands: React.FC<IProps> = (props) => {
	return (
		<div
			className={`${props.brandsBgColour} flex w-full flex-col space-y-5 pt-5 lg:pt-0 `}
		>
			<div className="flex  justify-center ">
				<span className="title-5 lg:title-2 text-primary-black">
					{props.brandsTitle}
				</span>
			</div>
			<div className="slider-wrapper m-2" id="brands-slider">
				<Slider {...settings}>
					{props.logoArray?.map((logo, index) => {
						return (
							logo &&
							logo.image && (
								<div key={index} className="grid grid-cols-1 sm:grid-cols-4	">
									<Image
										alt={logo?.image?.asset?.altText || ''}
										width={200}
										height={100}
										src={logo?.image?.asset?.url || ''}
									/>
								</div>
							)
						);
					})}
				</Slider>
			</div>
		</div>
	);
};

export default Brands;
