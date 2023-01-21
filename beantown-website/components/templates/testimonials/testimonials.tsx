
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faArrowRight,
	faArrowLeft,
	faMapLocation,
} from '@fortawesome/free-solid-svg-icons';
import TestimonialCard from './testimonial-card';
import React, { Component, useContext, useEffect, useRef, useState } from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { HomePageContentProps } from 'pages';
import RichText from 'components/molecules/rich-text.molecule';

export default function Testimonials() {
	const { pageContent } =
		useContext<GlobalContextProps<HomePageContentProps>>(GlobalContext);
	if (!pageContent) {
		return null;
	}
	const homeData = pageContent.home[0];
	const { testimonialTitle, testimonialDescription, testimonialCards } =
		homeData;

	const maxScrollWidth = useRef(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const carousel = useRef<any>(null);	

	const movePrevious = () => {
		if (currentIndex > 0) {
			setCurrentIndex((preciousState) => preciousState - 1);
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
		   useEffect(() => {
					if (carousel !== null && carousel.current !== null) {
						carousel.current.scrollLeft =
							carousel.current.offsetWidth * currentIndex;
					}
				}, [currentIndex]);

			useEffect(() => {
				maxScrollWidth.current = carousel.current
					? carousel.current.scrollWidth - carousel.current.offsetWidth
					: 0;
			}, []);

			 const goToSlide = (slideIndex: number) => {
					setCurrentIndex(slideIndex);
				}; 



	return (
		<section id="testimonials" className=" p-6 bg-blue-50">
			<div className="md:hidden">
				<div className="  w-full flex-none  gap-5   ">
					<div className="p-4 m-4">
						<h4>{testimonialTitle}</h4>
						<h1 className="sm:text-4xl text-2xl font-extrabold">
							{testimonialDescription}
						</h1>
					</div>
				</div>
			</div>

			<div className="flex flex-nowrap overflow-x-auto space-x-4 bg-blue-50 ">
				{/* card data from sanity */}

				<div className="hidden md:flex flex-col items-center   w-[250px]  flex-none gap-2 ">
					<div className="  flex-none  gap-5   ">
						<div className="p-8 m-8 bg-blue-50">
							<h4>{testimonialTitle}</h4>
							<h1 className="sm:text-4xl text-2xl font-bold">
								{testimonialDescription}
							</h1>
						</div>
					</div>
					<div className="flex flex-col ">
						<div className="flex gap-2 m-4 ">
							{testimonialCards?.map((cards, index) => {
								return (
									<button
										key={index}
										onClick={() => goToSlide(index)}
										className="w-8 border rounded-lg h-2 bg-blue-100 "
									></button>
								);
							})}
						</div>
						<div className="flex gap-4 pt-4 ">
							<button
								onClick={movePrevious}
								disabled={isDisabled('prev')}
								className="bg-blue-900 rounded-full text-black w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed  transition-all ease-in-out duration-300"
							>
								<FontAwesomeIcon icon={faArrowLeft} />
							</button>
							<button
								onClick={moveNext}
								disabled={isDisabled('next')}
								className="bg-blue-900 rounded-full text-black w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed transition-all ease-in-out duration-300"
							>
								<FontAwesomeIcon icon={faArrowRight} />
							</button>
						</div>
					</div>
				</div>

				<div
					ref={carousel}
					className=" carousel container relative flex gap-1 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
				>
					{testimonialCards?.map((reviews, index) => {
						return (
							// <TestimonialCard
							// 	key={index}
							// 	clientName={reviews?.titleText || ''}
							// 	clientDetails={reviews?.subText || ''}
							// 	reviewComments={reviews?.description?.contentRaw}
							// />
							<div
								key={index}
								className="relative w-96 h-96 snap-start items-center bg-[#FFFFFF] my-6 p-4 flex-none gap-2 border rounded-xl "
							>
								<div className=" flex flex-col text-center  ">
									<div>
										<img src="images/home_page/testimonialCardsImageUnionVector.svg" />
									</div>
									<div>
										<h1 className="text-4xl font-bold">{reviews?.titleText}</h1>
									</div>
									<div>
										<h4 className="text-2xl font-light">{reviews?.subText}</h4>
									</div>
									<div className="text-center text-xl pt-10">
										<RichText value={reviews?.description.contentRaw} />
									</div>
								</div>
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
									className="w-8 border rounded-lg h-2 bg-blue-100 "
								></button>
							);
						})}
					</div>
					<div className="flex gap-4 pt-4 ">
						<button
							onClick={movePrevious}
							disabled={isDisabled('prev')}
							className="bg-blue-900  rounded-full text-black w-10 h-full  text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
						>
							<FontAwesomeIcon icon={faArrowLeft} />
						</button>
						<button
							onClick={moveNext}
							disabled={isDisabled('next')}
							className="bg-blue-900 rounded-full text-black w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
						>
							<FontAwesomeIcon icon={faArrowRight} />
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}
