import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useEffect, useRef } from 'react';
import {
	TitleDescription as TestimonialCards,
	Maybe,
} from '@typing/gql/graphql';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import TestimonialCard from './testimonial-card.organism';
import TestimonialModal from './testimonial-modal.organism';
import SectionContentWrapper from 'components/molecules/section-content-wrapper.molecule';
import Animate from 'components/molecules/animate.molecule';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
	testimonialTitle: string;
	testimonialDescription: string;
	testimonialCards: Maybe<Array<Maybe<TestimonialCards>>>;
}

const Testimonials: React.FC<IProps> = (props) => {
	const slider = React.useRef<Slider | null>(null);
	const [showTestimonialModel, setShowTestimonialModel] = useState(false);
	const [selectedTestimonial, setSelectedTestimonial] = useState<any>(null);

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
		speed: 800,
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: false,
		initialSlide: 0,
		focusOnSelect: false,
		variableWidth: true,
		responsive: [
			{
				breakpoint: 324,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					variableWidth: false,
				},
			},
			{
				breakpoint: 355,
				settings: {
					slidesToShow: 1.1,
					slidesToScroll: 1,
					variableWidth: true,
				},
			},
			{
				breakpoint: 450,
				settings: {
					slidesToShow: 1.2,
					slidesToScroll: 1,
					variableWidth: true,
				},
			},
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 1.2,
					slidesToScroll: 1,
					variableWidth: true,
				},
			},

			{
				breakpoint: 720,
				settings: {
					slidesToShow: 1.7,
					slidesToScroll: 1,
					variableWidth: true,
				},
			},
			{
				breakpoint: 820,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					variableWidth: true,
				},
			},
			{
				breakpoint: 920,
				settings: {
					slidesToShow: 2.5,
					slidesToScroll: 1,
					variableWidth: true,
				},
			},
			// 3 slide but square shape
			{
				breakpoint: 1048,
				settings: {
					slidesToShow: 1.7,
					slidesToScroll: 1,
					variableWidth: true,
				},
			},

			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					variableWidth: true,
				},
			},
			{
				breakpoint: 1600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					variableWidth: true,
				},
			},
			{
				breakpoint: 1690,
				settings: {
					slidesToShow: 1.8,
					slidesToScroll: 1,
					variableWidth: true,
				},
			},
			{
				breakpoint: 1900,
				settings: {
					slidesToShow: 2.7,
					slidesToScroll: 1,
					variableWidth: true,
				},
			},
			{
				breakpoint: 2182,
				settings: {
					slidesToShow: 3.1,
					slidesToScroll: 1,
					variableWidth: true,
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
					<div className=" w-full flex-none">
						<div className="ml-8 pb-6">
							<Animate bottom>
								<h5 className="text-primary-shade-1 !font-thin ">
									{props.testimonialTitle}
								</h5>
								<h2 className=" text-primary-black">
									{props.testimonialDescription}
								</h2>
							</Animate>
						</div>
					</div>
				</div>
				<div className=" flex space-x-6">
					<div className="gap-15 z-40 ml-28 mr-16 hidden flex-none   flex-col  items-center justify-center    lg:flex  ">
						<div className="flex-none  gap-5 ">
							<Animate bottom>
								<h5 className=" text-primary-shade-1 !font-thin ">
									{props.testimonialTitle}
								</h5>
								<h2 className="  text-primary-black">
									{props.testimonialDescription}
								</h2>
							</Animate>
							<div className="mt-8 flex space-x-6">
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
									<div
										className="testimonial-card-wrapper slick-item !flex justify-center px-2 outline-none xl:px-4"
										key={index}
									>
										<Animate>
											<TestimonialCard
												key={index}
												clientName={reviews?.titleText || ''}
												clientDetails={reviews?.subText || ''}
												reviewComments={reviews?.description || ''}
												onShowMore={() => onTestimonialCardClick(reviews)}
											/>
										</Animate>
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
