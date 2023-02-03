import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faArrowRight,
	faArrowLeft,
	faMapLocation,
} from '@fortawesome/free-solid-svg-icons';
import TestimonialCard from './testimonial-card';
import React, {
	Component,
	useContext,
	useEffect,
	useRef,
	useState,
} from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { HomePageContentProps } from 'pages';
import RichText from 'components/molecules/rich-text.molecule';
import Image from 'next/image';

export default function Testimonials() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const maxScrollWidth = useRef(0);
	const carousel = useRef<any>(null);

	useEffect(() => {
		if (carousel !== null && carousel.current !== null) {
			carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
		}
	}, [currentIndex]);

	useEffect(() => {
		maxScrollWidth.current = carousel.current
			? carousel.current.scrollWidth - carousel.current.offsetWidth
			: 0;
	}, []);

	const { pageContent } =
		useContext<GlobalContextProps<HomePageContentProps>>(GlobalContext);

	if (!pageContent) {
		return null;
	}
	const homeData = pageContent.home[0];
	const { testimonialTitle, testimonialDescription, testimonialCards } =
		homeData;

	const movePrevious = () => {
		if (currentIndex > 0) {
			console.log('current Index before' + currentIndex);
			setCurrentIndex((previousState) => previousState - 1);
			console.log('current Index after click' + currentIndex);
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
			console.log('current offsetWidth ' + carousel.current.offsetWidth);
			console.log('current Index ' + currentIndex);
			console.log('max Scroll width ' + maxScrollWidth.current);
			return (
				carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
			);
		}

		return false;
	};

	const goToSlide = (slideIndex: number) => {
		setCurrentIndex(slideIndex);
	};

	return (
		<>
			{/* <section id="top-curve-testimonial" className="md:-mt-14 -mt-3">
				<Image
					src="/testimonial-top-curve.svg"
					alt="top-curve"
					width={1900}
					height={800}
				></Image>
			</section> */}
			<section
				id="testimonials-cards"
				className=" md:px-10  bg-secondary-shade-3"
			>
				<div
					id="left-blob-mobile"
					className="hidden md:block relative bottom-[12rem] right-[35em] h-0"
				>
					<Image
						src="/blob-shape-1.svg"
						alt="Left-blob"
						width={700}
						height={700}
					></Image>
				</div>
				<div
					id="left-blob-mobile"
					className="sm:hidden block relative  place-content-end ml-44  bottom-[12rem]  h-0 z-10"
				>
					<Image
						src="/testimonial-right-half-blob.svg"
						alt="Left-blob"
						width={240}
						height={200}
					></Image>
				</div>
				<div className="md:hidden">
					<div className=" w-full flex-none  gap-5">
						<div className="mt-20 ">
							<h4 className="para-4 text-primary-shade-1 ">
								{testimonialTitle}
							</h4>
							<h1 className="title-5 text-primary-black">
								{testimonialDescription}
							</h1>
						</div>
					</div>
				</div>

				<div className="flex flex-nowrap overflow-x-auto space-x-4   ">
					{/* card data from sanity */}

					<div className="hidden z-10 md:flex flex-col items-center justify-center    flex-none gap-2 ">
						<div className="flex-none  gap-5 ">
							<div className="">
								<span className=" text-light-1 text-primary-shade-1 ">
									{testimonialTitle}
								</span>
							</div>
							<div>
								<span className=" title-2 text-primary-black">
									{testimonialDescription}
								</span>
							</div>
						</div>
						<div className="flex flex-col items-center justify-center  ">
							<div className="flex gap-2 m-4 ">
								{testimonialCards?.map((cards, index) => {
									return (
										<button
											key={index}
											onClick={() => goToSlide(index)}
											className="w-8 border rounded-lg h-2 bg-white hover:bg-primary-shade-1 "
										></button>
									);
								})}
							</div>
							<div className="flex  pt-4 justify-center ">
								<button
									onClick={movePrevious}
									disabled={isDisabled('prev')}
									className="bg-primary-shade-1 rounded-full text-white w-24 h-full text-center  hover:opacity-100 disabled:bg-white disabled:text-black disabled:cursor-not-allowed z-10 p-2 m-1  transition-all ease-in-out duration-300"
								>
									<FontAwesomeIcon icon={faArrowLeft} size="lg" />
								</button>
								<button
									onClick={moveNext}
									disabled={isDisabled('next')}
									className="bg-primary-shade-1 rounded-full text-white w-24  h-full text-center hover:opacity-100   disabled:bg-white disabled:text-black disabled:cursor-not-allowed z-10 p-2 m-1 transition-all ease-in-out duration-300"
								>
									<FontAwesomeIcon icon={faArrowRight} size="lg" />
								</button>
							</div>
						</div>
					</div>

					<div
						ref={carousel}
						className=" relative flex gap-10 mt-16  overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
					>
						{testimonialCards?.map((reviews, index) => {
							return (
								<div
									key={index}
									className="relative w-96 h-120 snap-start items-center bg-[#FFFFFF] my-6 p-4 flex-none gap-2 border rounded-xl "
								>
									<TestimonialCard
										key={index}
										clientName={reviews?.titleText || ''}
										clientDetails={reviews?.subText || ''}
										reviewComments={reviews?.description || ''}
									/>
								</div>
							);
						})}
					</div>
				</div>
				<div className="md:hidden">
					<div className="flex items-center justify-between ">
						<div className="flex gap-2 m-4">
							{testimonialCards?.map((cards, index) => {
								return (
									<button
										key={index}
										onClick={() => goToSlide(index)}
										className="w-8 border rounded-lg h-2 bg-white hover:bg-primary-shade-1 "
									></button>
								);
							})}
						</div>
						<div className="flex  pt-4 ">
							<button
								onClick={movePrevious}
								disabled={isDisabled('prev')}
								className="bg-primary-shade-1  rounded-full text-white w-16 h-full  text-center  hover:opacity-100   disabled:bg-white disabled:text-black disabled:cursor-not-allowed z-10 p-2 m-1 transition-all ease-in-out duration-300"
							>
								<FontAwesomeIcon icon={faArrowLeft} />
							</button>
							<button
								onClick={moveNext}
								disabled={isDisabled('next')}
								className="bg-primary-shade-1 rounded-full text-white w-16  h-full text-center   hover:opacity-100  disabled:bg-white disabled:text-black disabled:cursor-not-allowed z-10 p-2 m-1 transition-all ease-in-out duration-300"
							>
								<FontAwesomeIcon icon={faArrowRight} />
							</button>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
