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
				className=" bg-secondary-shade-3  overflow-hidden md:px-10"
			>
				<div className="relative md:hidden ">
					<div className="z-50 w-full flex-none  gap-5">
						<div className="mt-20 ml-8 ">
							<h1 className="para-4 text-primary-shade-1 ">
								{testimonialTitle}
							</h1>
							<span className="title-5 text-primary-black">
								{testimonialDescription}
							</span>
						</div>
					</div>
				</div>

				<div className="m-4 flex flex-nowrap  space-x-4 overflow-x-auto">
					<div className="gap-15 z-40 m-8 hidden flex-none flex-col items-center   justify-center md:flex  ">
						<div className="flex-none  gap-5 ">
							<h1 className=" text-light-1 text-primary-shade-1 ">
								{testimonialTitle}
							</h1>
							<span className=" title-2 text-primary-black">
								{testimonialDescription}
							</span>
						</div>
						<div className="hidden  justify-center  gap-4 pt-4 lg:flex  ">
							<button
								onClick={next}
								className="text-primary-shade-1 bg-primary-shade-1 w-28 rounded-full py-4 px-6 text-lg lg:text-white"
							>
								<FontAwesomeIcon icon={faArrowLeft} />
							</button>
							<button
								onClick={previous}
								className=" text-primary-shade-1 w-28 rounded-full bg-white py-4 px-6 text-lg"
							>
								<FontAwesomeIcon icon={faArrowRight} />
							</button>
						</div>
					</div>
					̊
				</div>

				<div>
					<Slider ref={slider} {...settings} className="">
						{testimonialCards?.map((reviews, index) => {
							return (
								<TestimonialCard
									key={index}
									clientName={reviews?.titleText || ''}
									clientDetails={reviews?.subText || ''}
									reviewComments={reviews?.description || ''}
									onShowMore={() => onTestimonialCardClick(reviews)}
								/>
							);
						})}
					</Slider>
				</div>

				<div className="md:hidden">
					<div className="flex justify-center gap-4 pt-4 lg:hidden ">
						<button
							onClick={next}
							className="text-primary-shade-1  w-20 rounded-full  bg-white py-2 px-4"
						>
							<FontAwesomeIcon icon={faArrowLeft} />
						</button>
						<button
							onClick={previous}
							className=" text-primary-shade-1 w-20 rounded-full bg-white py-2 px-4"
						>
							<FontAwesomeIcon icon={faArrowRight} />
						</button>
					</div>
				</div>
				<TestimonialModal
					onClose={handleOnClose}
					visible={showTestimonialModel}
					clientName={selectedTestimonial?.titleText || ''}
					clientDetails={selectedTestimonial?.subText || ''}
					reviewComments={selectedTestimonial?.description || ''}
				/>
			</section>
		</>
	);
}
