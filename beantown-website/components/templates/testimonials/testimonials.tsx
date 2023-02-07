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
				className=" lg:px-10  bg-secondary-shade-3 overflow-hidden"
			>
				<div
					id="left-blob"
					className="hidden lg:block relative bottom-[12rem] right-[35em] h-0"
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
					className="lg:hidden md:block hidden relative bottom-[12rem] right-[35em] h-0"
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
					className="md:hidden block relative bottom-[4rem] -right-[66%] h-0 -z-1"
				>
					<Image
						src="/testimonial-right-half-blob.svg"
						alt="Right-blob"
						width={150}
						height={150}
					></Image>
				</div>
				<div className="lg:hidden relative ">
					<div className=" w-full flex-none  gap-5">
						<div className="mt-20 ml-8 ">
							<span className="para-4 text-primary-shade-1 ">
								{testimonialTitle}
							</span>
							<h1 className="title-5 text-primary-black">
								{testimonialDescription}
							</h1>
						</div>
					</div>
				</div>

				<div className="flex flex-nowrap overflow-x-auto space-x-4  m-4 ">
					<div className="hidden z-10 lg:flex flex-col items-center justify-center m-8   flex-none gap-15  ">
						<div className="flex-none  gap-5 ">
							<div className="">
								<span className=" text-light-1 text-primary-shade-1 ">
									{testimonialTitle}
								</span>
							</div>
							<div>
								<h1 className=" title-2 text-primary-black">
									{testimonialDescription}
								</h1>
							</div>
						</div>
						<div className="hidden lg:flex lg:flex-col items-center justify-center m-4 ">
							<div className="flex gap-4 m-4 ">
								{testimonialCards?.map((cards, index) => {
									return (
										<span
											key={index}
											onClick={() => goToSlide(index)}
											className="w-8 border rounded-lg h-2 bg-white hover:bg-primary-shade-1 "
										></span>
									);
								})}
							</div>
							<div className="flex  pt-4 justify-center ">
								<button
									onClick={movePrevious}
									disabled={isDisabled('prev')}
									className="bg-primary-shade-1 rounded-full text-white w-24 h-full text-center  hover:opacity-100 disabled:bg-white disabled:text-black disabled:cursor-not-allowed z-10 p-2 m-1  transition-all ease-in-out duration-300"
									aria-label="Button for moving left"
								>
									<FontAwesomeIcon icon={faArrowLeft} size="lg" />
								</button>
								<button
									onClick={moveNext}
									disabled={isDisabled('next')}
									className="bg-primary-shade-1 rounded-full text-white w-24  h-full text-center hover:opacity-100   disabled:bg-white disabled:text-black disabled:cursor-not-allowed z-10 p-2 m-1 transition-all ease-in-out duration-300"
									aria-label="Button for moving right"
								>
									<FontAwesomeIcon icon={faArrowRight} size="lg" />
								</button>
							</div>
						</div>
					</div>

					<div
						ref={carousel}
						className="no-scrollbar flex gap-6 mt-16    overflow-x-scroll scroll-smooth snap-x snap-mandatory  z-0 group "
					>
						{testimonialCards?.map((reviews, index) => {
							return (
								<div
									// id="slider"
									key={index}
									className=" w-80 h-[70vh] max-h-[500px] snap-start items-center bg-[#FFFFFF] my-6 p-2 flex-none  border rounded-2xl "
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
					<div className="flex items-center justify-center ">
						<div className="flex justify-center pt-4 ">
							<button
								onClick={movePrevious}
								disabled={isDisabled('prev')}
								className="bg-primary-shade-1  rounded-full text-white w-16 h-full  text-center  hover:opacity-100   disabled:bg-white disabled:text-black disabled:cursor-not-allowed z-10 p-2 m-1 transition-all ease-in-out duration-300"
								aria-label="Button for moving left"
							>
								<FontAwesomeIcon icon={faArrowLeft} />
							</button>
							<button
								id="right"
								onClick={moveNext}
								disabled={isDisabled('next')}
								className="bg-primary-shade-1 rounded-full text-white w-16  h-full text-center   hover:opacity-100  disabled:bg-white disabled:text-black disabled:cursor-not-allowed z-10 p-2 m-1 transition-all ease-in-out duration-300"
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
