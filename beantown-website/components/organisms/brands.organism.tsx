import React from 'react';
import { ImageIcon, Maybe } from '@typing/gql/graphql';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CMSImageWrapper from 'components/molecules/cms-image-wrapper.molecule';
import Animate from 'components/molecules/animate.molecule';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
	brandsTitle: string;
	logoArray: Maybe<Array<Maybe<ImageIcon>>>;
	brandsBgColour: string;
}

const settings = {
	dots: false,
	infinite: true,
	speed: 8000,
	autoplay: true,
	autoplaySpeed: 0,
	cssEase: 'linear',
	slidesToShow: 4,
	slidesToScroll: 1,
	pauseOnHover: false,
	useTransform: false,
	responsive: [
		{
			breakpoint: 1800,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
				infinite: true,
			},
		},
		{
			breakpoint: 1500,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
				infinite: true,
			},
		},
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
				infinite: true,
			},
		},
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true,
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
			breakpoint: 400,
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
			className={`${props.brandsBgColour} flex w-full flex-col space-y-5 pt-5 pb-4 lg:pt-0 `}
		>
			<Animate bottom>
				<div className="flex  justify-center ">
					<h2 className=" text-primary-black">{props.brandsTitle}</h2>
				</div>
			</Animate>
			<div className="slider-wrapper w-full pt-6" id="brands-slider">
				<Slider {...settings}>
					{props.logoArray?.map((logo, index) => {
						return (
							logo &&
							logo.image && (
								<div
									key={index}
									className="3xl:px-[10rem] 4xl:px-[13rem] 5xl:px-[18rem]  h-[92px] w-[182px] px-8 py-4 sm:px-[5rem] lg:h-[180px] lg:w-[354px] lg:p-10 2xl:px-[5rem] "
								>
									<div className="flex h-full items-center py-4">
										<CMSImageWrapper
											altText={logo?.image?.asset?.altText || ''}
											image={logo?.image || null}
											shouldBePrefetched={true}
										/>
									</div>
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
