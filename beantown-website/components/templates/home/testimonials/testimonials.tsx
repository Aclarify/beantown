import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useContext, useEffect, useRef } from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { HomePageContentProps } from 'pages';
import Image from 'next/image';
import TestimonialCard from './testimonial-card';
import TestimonialModal from './testimonial-modal';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { SCREEN_BREAKPOINTS } from '@typing/common/interfaces/devices.interface';

export default function Testimonials() {
	const slider = React.useRef<Slider | null>(null);
	const [showTestimonialModel, setShowTestimonialModel] = useState(false);
	const [selectedTestimonial, setSelectedTestimonial] = useState<any>(null);
	const [currentIndex, setCurrentIndex] = useState(0);
	const maxScrollWidth = useRef(0);
	const carousel = useRef<any>(null);

	useEffect(() => {
		maxScrollWidth.current = carousel.current
			? carousel.current.scrollWidth - carousel.current.offsetWidth
			: 0;
	}, []);
	useEffect(() => {
		if (carousel !== null && carousel.current !== null) {
			carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
		}
	}, [currentIndex]);

	const { pageContent } =
		useContext<GlobalContextProps<HomePageContentProps>>(GlobalContext);

	if (!pageContent) {
		return null;
	}
	const homeData = pageContent.page[0];
	const { testimonialTitle, testimonialDescription, testimonialCards } =
		homeData;

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
		slidesToShow: 3.1,
		slidesToScroll: 1,
		arrows: false,
		responsive: [
			{
				breakpoint: SCREEN_BREAKPOINTS.XL,
				settings: {
					slidesToShow: 2.16,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: SCREEN_BREAKPOINTS.LG,
				settings: {
					slidesToShow: 1.6,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: SCREEN_BREAKPOINTS.MD,
				settings: {
					slidesToShow: 3.1,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2.5,
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
				breakpoint: 620,
				settings: {
					slidesToShow: 1.8,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 520,
				settings: {
					slidesToShow: 1.3,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 420,
				settings: {
					slidesToShow: 1.1,
					slidesToScroll: 1,
				},
			},
		],
	};
	const handleOnClose = () => {
		setShowTestimonialModel(false);
		// Unsets Background Scrolling to use when SideDrawer/Modal is closed
		document.body.style.overflow = 'unset';
	};
	const onTestimonialCardClick = (testimonial: any) => {
		setSelectedTestimonial(testimonial);
		setShowTestimonialModel(true);
		// Disables Background Scrolling whilst the SideDrawer/Modal is open
		if (typeof window != 'undefined' && window.document) {
			document.body.style.overflow = 'hidden';
		}
	};

	return (
		<>
			<section
				id="testimonials-cards"
				className=" bg-secondary-shade-3  relative bottom-[24rem] -mb-[24rem]  "
			>
				<Image
					src={'/images/home/testimonials/home-testimonial-left-blob.svg'}
					height={590}
					width={650}
					alt="Left Blob "
					className="z-1  absolute top-0 left-0 hidden -translate-x-[55%] transform lg:block lg:-translate-y-[45%] "
				/>
				<Image
					src={'/images/home/testimonials/home-testimonial-right-blob.svg'}
					height={390}
					width={450}
					alt="Right Blob tab "
					className="z-1  absolute top-0 right-0 hidden translate-x-[50%] -translate-y-[70%] transform md:block lg:hidden"
				/>
				<Image
					src={'/images/home/testimonials/home-testimonial-right-blob.svg'}
					height={250}
					width={250}
					alt="Right Blob mobile"
					className="z-1  absolute top-0 right-0 translate-x-[48%] -translate-y-[70%] transform md:hidden"
				/>
				<div>
					<div className="relative lg:hidden ">
						<div className=" w-full flex-none  gap-5">
							<div className="m-10  ">
								<h1 className="para-4 text-primary-shade-1 ">
									{testimonialTitle}
								</h1>
								<span className="title-5 text-primary-black">
									{testimonialDescription}
								</span>
							</div>
						</div>
					</div>
					<div className=" flex space-x-6">
						<div className="gap-15 z-40 ml-28 mr-16 hidden flex-none flex-col items-center   justify-center lg:flex  ">
							<div className="flex-none  gap-5 ">
								<h1 className=" text-light-1 text-primary-shade-1 ">
									{testimonialTitle}
								</h1>
								<span className=" title-2 text-primary-black">
									{testimonialDescription}
								</span>
								<div className="mt-14 flex space-x-6">
									<button
										onClick={next}
										className=" text-primary-shade-1 h-16 w-32 rounded-full bg-white py-4 px-6 text-lg"
									>
										<FontAwesomeIcon icon={faArrowLeft} />
									</button>
									<button
										onClick={previous}
										className="text-primary-shade-1 bg-primary-shade-1 h-16 w-32 rounded-full py-4 px-6 text-lg md:text-white"
									>
										<FontAwesomeIcon icon={faArrowRight} />
									</button>
								</div>
							</div>
						</div>
						<div className="slider-wrapper w-full lg:w-3/4 ">
							<Slider ref={slider} {...settings} className="">
								{testimonialCards?.map((reviews, index) => {
									return (
										<div
											className="testimonial-card-wrapper h-[358px] w-[280px]  px-2 lg:h-[556px] lg:w-[378px] lg:px-2 xl:px-5"
											key={index}
										>
											<TestimonialCard
												key={index}
												clientName={reviews?.titleText || ''}
												clientDetails={reviews?.subText || ''}
												reviewComments={reviews?.description || ''}
												onShowMore={() => onTestimonialCardClick(reviews)}
											/>
										</div>
									);
								})}
							</Slider>
						</div>
					</div>

					<div className="mt-2 flex justify-end gap-4 pt-4 pr-4 lg:hidden ">
						<button
							onClick={next}
							className="text-primary-shade-1 h-12 w-20 rounded-full  bg-white py-2 px-4"
						>
							<FontAwesomeIcon icon={faArrowLeft} />
						</button>
						<button
							onClick={previous}
							className=" bg-primary-shade-1 h-12 w-20 rounded-full py-2 px-4 text-white"
						>
							<FontAwesomeIcon icon={faArrowRight} />
						</button>
					</div>
					<TestimonialModal
						onClose={handleOnClose}
						visible={showTestimonialModel}
						clientName={selectedTestimonial?.titleText || ''}
						clientDetails={selectedTestimonial?.subText || ''}
						reviewComments={selectedTestimonial?.description || ''}
					/>
				</div>
			</section>
		</>
	);
}
