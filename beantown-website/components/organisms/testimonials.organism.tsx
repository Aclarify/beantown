import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useContext, useEffect, useRef } from 'react';
import {
	TitleDescription as TestimonialCards,
	Maybe,
} from '@typing/gql/graphql';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import TestimonialCard from './testimonial-card.organism';
import TestimonialModal from './testimonial-modal.organism';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
	testimonialTitle: string;
	testimonialDescription: string;
	testimonialCards: Maybe<Array<Maybe<TestimonialCards>>>;
}

const Testimonials: React.FC<IProps> = (props) => {
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

	const previous = () => {
		if (slider.current) {
			slider.current.slickPrev();
		}
	};
	const next = () => {
		if (slider.current) {
			slider.current.slickNext();
		}
	};
	const settings = {
		dots: false,
		infinite: true,
		speed: 2000,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 320,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 450,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},

			{
				breakpoint: 720,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 820,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 920,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				},
			},
			// 3 slide but square shape
			{
				breakpoint: 1000,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				},
			},

			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 1600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 1900,
				settings: {
					slidesToShow: 3,
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
			<div>
				<div className="relative lg:hidden ">
					<div className=" w-full flex-none  gap-5">
						<div className="m-10  ">
							<h1 className="para-4 text-primary-shade-1 ">
								{props.testimonialTitle}
							</h1>
							<span className="title-5 text-primary-black">
								{props.testimonialDescription}
							</span>
						</div>
					</div>
				</div>
				<div className=" flex space-x-6">
					<div className="gap-15 z-40 ml-28 mr-16 hidden flex-none flex-col items-center   justify-center lg:flex  ">
						<div className="flex-none  gap-5 ">
							<h1 className=" text-light-1 text-primary-shade-1 ">
								{props.testimonialTitle}
							</h1>
							<span className=" title-2 text-primary-black">
								{props.testimonialDescription}
							</span>
							<div className="mt-14 flex space-x-6">
								<button
									onClick={previous}
									className=" text-primary-shade-1 h-16 w-32 rounded-full bg-white py-4 px-6 text-lg"
								>
									<FontAwesomeIcon icon={faArrowLeft} />
								</button>
								<button
									onClick={next}
									className="text-primary-shade-1 bg-primary-shade-1 h-16 w-32 rounded-full py-4 px-6 text-lg md:text-white"
								>
									<FontAwesomeIcon icon={faArrowRight} />
								</button>
							</div>
						</div>
					</div>
					<div className="slider-wrapper w-full lg:w-3/4 ">
						<Slider ref={slider} {...settings}>
							{props.testimonialCards?.map((reviews, index) => {
								return (
									<div className="testimonial-card-wrapper  " key={index}>
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
						onClick={previous}
						className="text-primary-shade-1 h-12 w-20 rounded-full  bg-white py-2 px-4"
					>
						<FontAwesomeIcon icon={faArrowLeft} />
					</button>
					<button
						onClick={next}
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
		</>
	);
};
export default Testimonials;
