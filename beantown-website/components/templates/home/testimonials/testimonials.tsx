import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import React, { useState, useContext, useEffect, useRef } from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { HomePageContentProps } from 'pages';
import Image from 'next/image';
import TestimonialCard from './testimonial-card';
import TestimonialModal from './testimonial-modal';

export default function Testimonials() {
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
	const homeData = pageContent.home[0];
	const { testimonialTitle, testimonialDescription, testimonialCards } =
		homeData;

	const handleOnClose = () => {
		setShowTestimonialModel(false);
		// Unsets Background Scrolling to use when SideDrawer/Modal is closed
		document.body.style.overflow = 'unset';
	};

	const movePrevious = () => {
		if (currentIndex > 0) {
			setCurrentIndex((previousState) => previousState - 1);
		}
	};
	const moveNext = () => {
		if (
			carousel.current !== null &&
			carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
		) {
			setCurrentIndex((previousState) => previousState + 1);
		}
	};

	const isDisabled = (direction: any) => {
		if (direction === 'prev') {
			return currentIndex <= 0;
		}

		if (direction === 'next' && carousel.current !== null) {
			return (
				carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
			);
		}

		return false;
	};

	const goToSlide = (slideIndex: number) => {
		setCurrentIndex(slideIndex);
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
				className=" bg-secondary-shade-3  overflow-hidden lg:px-10"
			>
				<div
					id="left-blob"
					className="relative bottom-[12rem] right-[35em] hidden h-0 lg:block"
				>
					<Image
						src="/blob-shape-1.svg"
						alt="Left-blob"
						width={700}
						height={700}
					></Image>
				</div>
				<div
					id="left-blob-tab"
					className=" relative bottom-[12rem] right-[35em] hidden h-0 md:block lg:hidden"
				>
					<Image
						src="/blob-shape-1.svg"
						alt="Left-blob"
						width={700}
						height={700}
					></Image>
				</div>
				<div
					id="right-blob-mobile"
					className="-z-1 relative bottom-[4rem] -right-[66%] hidden h-0"
				>
					<Image
						src="/testimonial-right-half-blob.svg"
						alt="Right-blob"
						width={150}
						height={150}
					></Image>
				</div>
				<div className="relative lg:hidden ">
					<div className=" w-full flex-none  gap-5">
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

				<div className="m-4 flex flex-nowrap space-x-4  overflow-x-auto ">
					<div className="gap-15 z-10 m-8 hidden flex-none flex-col items-center   justify-center lg:flex  ">
						<div className="flex-none  gap-5 ">
							<h1 className=" text-light-1 text-primary-shade-1 ">
								{testimonialTitle}
							</h1>
							<span className=" title-2 text-primary-black">
								{testimonialDescription}
							</span>
						</div>
						<div className="m-4 hidden items-center justify-center lg:flex lg:flex-col ">
							<div className="flex  justify-center pt-4 ">
								<button
									onClick={movePrevious}
									disabled={isDisabled('prev')}
									className="bg-primary-shade-1 z-10 m-1 h-full w-24 rounded-full  p-2 text-center text-white transition-all duration-300 ease-in-out hover:opacity-100  disabled:cursor-not-allowed disabled:bg-white disabled:text-black"
									aria-label="Button for moving left"
								>
									<FontAwesomeIcon icon={faArrowLeft} size="lg" />
								</button>
								<button
									onClick={moveNext}
									disabled={isDisabled('next')}
									className="bg-primary-shade-1 z-10 m-1 h-full  w-24 rounded-full p-2   text-center text-white transition-all duration-300 ease-in-out hover:opacity-100 disabled:cursor-not-allowed disabled:bg-white disabled:text-black"
									aria-label="Button for moving right"
								>
									<FontAwesomeIcon icon={faArrowRight} size="lg" />
								</button>
							</div>
						</div>
					</div>

					<div
						ref={carousel}
						className="no-scrollbar group z-0 mt-16    flex snap-x snap-mandatory gap-6  overflow-x-scroll scroll-smooth "
					>
						{testimonialCards?.map((reviews, index) => {
							return (
								<div
									// id="slider"
									key={index}
									className=" my-6 h-[70vh] max-h-[500px] w-80 flex-none snap-start items-center rounded-2xl border  bg-[#FFFFFF] p-2 "
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
					</div>
				</div>

				<div className="lg:hidden">
					<div className="mr-8 flex items-center justify-end ">
						<div className="flex justify-center pt-4 ">
							<button
								onClick={movePrevious}
								disabled={isDisabled('prev')}
								className="bg-primary-shade-1  z-10 m-1 h-full w-16  rounded-full  p-2   text-center text-white transition-all duration-300 ease-in-out hover:opacity-100 disabled:cursor-not-allowed disabled:bg-white disabled:text-black"
								aria-label="Button for moving left"
							>
								<FontAwesomeIcon icon={faArrowLeft} />
							</button>
							<button
								id="right"
								onClick={moveNext}
								disabled={isDisabled('next')}
								className="bg-primary-shade-1 z-10 m-1 h-full  w-16 rounded-full   p-2  text-center text-white transition-all duration-300 ease-in-out hover:opacity-100 disabled:cursor-not-allowed disabled:bg-white disabled:text-black"
								aria-label="Button for moving right"
							>
								<FontAwesomeIcon icon={faArrowRight} />
							</button>
						</div>
					</div>
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
			</section>
		</>
	);
}
