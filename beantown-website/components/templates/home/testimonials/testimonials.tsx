import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import React, { useState, useContext, useEffect, useRef } from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { HomePageContentProps } from 'pages';
import Image from 'next/image';
import TestimonialCard from './testimonial-card';
import TestimonialModal from './testimonial-modal';
import Head from 'next/head';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';

import 'slick-carousel/slick/slick-theme.css';

export default function Testimonials() {
	const [showTestimonialModel, setShowTestimonialModel] = useState(false);
	const [selectedTestimonial, setSelectedTestimonial] = useState<any>(null);

	const slider = useRef();
	const { pageContent } =
		useContext<GlobalContextProps<HomePageContentProps>>(GlobalContext);

	if (!pageContent) {
		return null;
	}
	const homeData = pageContent.page[0];
	const { testimonialTitle, testimonialDescription, testimonialCards } =
		homeData;

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

	const previous = () => {
		slider.current.slickNext();
	};
	const next = () => {
		slider.current.slickPrev();
	};

	var settings = {
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
		initialSlide: 0,
		arrows: false,
		dots: true,

		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,				
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
					centerMode: true,
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
		<>
			<main
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
				
				<div className="gap-15 z-10 m-8 hidden flex-none flex-col items-center   justify-center lg:flex  ">
					<div className="flex-none  gap-5 ">
						<h1 className=" text-light-1 text-primary-shade-1 ">
							{testimonialTitle}
						</h1>
						<span className=" title-2 text-primary-black">
							{testimonialDescription}
						</span>
					</div>
					<div className="hidden items-center justify-center lg:flex lg:flex-col ">
						<div className="z-50 flex w-full flex-col  gap-5 ">
							<div className="flex justify-center">
								<button
									onClick={next}
									className="bg-primary-shade-1  z-10 m-1 h-full w-16  rounded-full  p-2   text-center text-white transition-all duration-300 ease-in-out hover:opacity-100 disabled:cursor-not-allowed disabled:bg-white disabled:text-black"
									aria-label="Button for moving left"
								>
									<FontAwesomeIcon icon={faArrowLeft} />
								</button>
								<button
									id="right"
									onClick={previous}
									className="bg-primary-shade-1 z-10 m-1 h-full  w-16 rounded-full   p-2  text-center text-white transition-all duration-300 ease-in-out hover:opacity-100 disabled:cursor-not-allowed disabled:bg-white disabled:text-black"
									aria-label="Button for moving right"
								>
									<FontAwesomeIcon icon={faArrowRight} />
								</button>
							</div>
						</div>
					</div>
				</div>

				{/* carousel code */}

				<div className="">
					<Slider ref={(current) => (slider.current = current)} {...settings}>
						{testimonialCards?.map((reviews, index) => {
							return (
								<div
									key={index}
									className=" my-6 h-[70vh] max-h-[500px] w-80 flex-none snap-start items-center rounded-2xl border  bg-[#FFFFFF] p-2  "
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

				{/* mobile view button */}
				<div className="flex items-center justify-center pt-10  lg:hidden">
					<button
						onClick={next}
						className="bg-primary-shade-1  z-10 m-1 h-full w-16  rounded-full  p-2   text-center text-white transition-all duration-300 ease-in-out hover:opacity-100 disabled:cursor-not-allowed disabled:bg-white disabled:text-black"
						aria-label="Button for moving left"
					>
						<FontAwesomeIcon icon={faArrowLeft} />
					</button>
					<button
						id="right"
						onClick={previous}
						className="bg-primary-shade-1 z-10 m-1 h-full  w-16 rounded-full   p-2  text-center text-white transition-all duration-300 ease-in-out hover:opacity-100 disabled:cursor-not-allowed disabled:bg-white disabled:text-black"
						aria-label="Button for moving right"
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

				{/* <Modal
					isOpen={showTestimonialModel}
					// onAfterOpen={afterOpenModal}
					onRequestClose={handleOnClose}
					// style={customStyles}
					contentLabel="Example Modal"
				>
					<TestimonialCard
						key={1}
						clientName={selectedTestimonial?.titleText || ''}
						clientDetails={selectedTestimonial?.subText || ''}
						reviewComments={selectedTestimonial?.description || ''}
					/>
				/>
				</Modal> */}
			</main>
		</>
	);
}
