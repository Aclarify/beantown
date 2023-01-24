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

	const goToSlide = (slideIndex: number) => {
		setCurrentIndex(slideIndex);
	};

	return (
		<section id="testimonials" className=" p-6 md:px-10  bg-secondary-shade-3">
			<div className="md:hidden">
				<div className="  w-full flex-none  gap-5   ">
					<div className="">
						<h4 className="para-4 text-primary-shade-1 ">{testimonialTitle}</h4>
						<h1 className="title-5 text-primary-black">
							{testimonialDescription}
						</h1>
					</div>
				</div>
			</div>

			<div className="flex flex-nowrap overflow-x-auto space-x-4   ">
				{/* card data from sanity */}

				<div className="hidden md:flex flex-col items-center     flex-none gap-2 ">
					<div className="  flex-none  gap-5   ">
						<div className=" ">
							<div>
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
					</div>
					<div className="flex flex-col ">
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
						<div className="flex gap-4 pt-4 justify-center ">
							<button
								onClick={movePrevious}
								disabled={isDisabled('prev')}
								className="bg-primary-shade-1 rounded-full text-black w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed  transition-all ease-in-out duration-300"
							>
								<FontAwesomeIcon icon={faArrowLeft} />
							</button>
							<button
								onClick={moveNext}
								disabled={isDisabled('next')}
								className="bg-primary-shade-1 rounded-full text-black w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed transition-all ease-in-out duration-300"
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
							<div
								key={index}
								className="relative w-72 h-120 snap-start items-center bg-[#FFFFFF] my-6 p-4 flex-none gap-2 border rounded-xl "
							>
								<TestimonialCard
									key={index}
									clientName={reviews?.titleText || ''}
									clientDetails={reviews?.subText || ''}
									reviewComments={reviews?.description?.contentRaw}
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
					<div className="flex gap-4 pt-4 ">
						<button
							onClick={movePrevious}
							disabled={isDisabled('prev')}
							className="bg-primary-shade-1  rounded-full text-black w-10 h-full  text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
						>
							<FontAwesomeIcon icon={faArrowLeft} />
						</button>
						<button
							onClick={moveNext}
							disabled={isDisabled('next')}
							className="bg-primary-shade-1 rounded-full text-black w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
						>
							<FontAwesomeIcon icon={faArrowRight} />
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}
