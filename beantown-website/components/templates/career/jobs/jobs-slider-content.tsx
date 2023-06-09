import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import debounce from 'lodash/debounce';
import clsx from 'clsx';

import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { SCREEN_BREAKPOINTS } from '@typing/common/interfaces/devices.interface';
import Animate from 'components/molecules/animate.molecule';
import { CareersContentProps } from 'pages/careers';
import CMSImageWrapper from 'components/molecules/cms-image-wrapper.molecule';
import { jobsContext } from '@contexts/jobs/Job-benefits-context';
import SectionContentWrapper from 'components/molecules/section-content-wrapper.molecule';

const animationSpeed = 500;

const settings = {
	dots: false,
	infinite: true,
	speed: animationSpeed,
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	initialSlide: 0,
	focusOnSelect: true,
	variableWidth: true,
	useTransform: false,
	swipe: false,
	responsive: [
		{
			breakpoint: SCREEN_BREAKPOINTS.XXL,
			settings: {
				slidesToShow: 3.5,
				slidesToScroll: 1,
				variableWidth: true,
			},
		},
		{
			breakpoint: 1972,
			settings: {
				slidesToShow: 2.7,
				slidesToScroll: 1,
				variableWidth: true,
			},
		},
		{
			breakpoint: 1576,
			settings: {
				slidesToShow: 2.2,
				slidesToScroll: 1,
				variableWidth: true,
			},
		},
		{
			breakpoint: SCREEN_BREAKPOINTS.LG,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				variableWidth: true,
			},
		},
		{
			breakpoint: 1040,
			settings: {
				slidesToShow: 1.8,
				slidesToScroll: 1,
				variableWidth: true,
			},
		},
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 1.8,
				slidesToScroll: 1,
				variableWidth: true,
			},
		},
		{
			breakpoint: SCREEN_BREAKPOINTS.SM,
			settings: {
				slidesToShow: 1.5,
				slidesToScroll: 1,
				variableWidth: true,
			},
		},
		{
			breakpoint: SCREEN_BREAKPOINTS.XS,
			settings: {
				slidesToShow: 1.1,
				slidesToScroll: 1,
				variableWidth: true,
				ltr: true,
			},
		},
	],
};

const JobsSliderContent = () => {
	const slider = React.useRef<Slider | null>(null);
	const { pageContent } =
		useContext<GlobalContextProps<CareersContentProps>>(GlobalContext);
	const { activeJobDetails, setActiveJobDetails } = useContext(jobsContext);
	const [isAnimating, setIsAnimating] = React.useState(false);

	if (!pageContent) {
		return null;
	}

	const pageData = pageContent.page[0];
	const { jobList, jobListTitle } = pageData;
	if (!jobList) {
		return null;
	}
	const previous = () => {
		// wait for animation to end before triggering prev
		if (slider.current && !isAnimating) {
			slider.current.slickPrev();
			setIsAnimating(true);

			// Update the active job details to the previous job details
			const activeJobIndex = jobList.findIndex(
				(jobDetails) => jobDetails?._key == activeJobDetails?._key
			);
			if (activeJobIndex > 0 && jobList[activeJobIndex - 1]) {
				setActiveJobDetails(jobList[activeJobIndex - 1] as any);
			}
			// Handle the case when the active job is the first job in the list
			if (activeJobIndex == 0) {
				setActiveJobDetails(jobList[jobList.length - 1] as any);
			}

			setTimeout(() => {
				setIsAnimating(false);
			}, animationSpeed);
		}
	};
	const next = () => {
		// wait for animation to end before triggering next
		if (slider.current && !isAnimating) {
			slider.current.slickNext();
			setIsAnimating(true);

			// Update the active job details to the next job details
			const activeJobIndex = jobList.findIndex(
				(jobDetails) => jobDetails?._key == activeJobDetails?._key
			);
			if (activeJobIndex < jobList.length - 1 && jobList[activeJobIndex + 1]) {
				setActiveJobDetails(jobList[activeJobIndex + 1] as any);
			}
			// Handle the case when the active job is the last job in the list
			if (activeJobIndex == jobList.length - 1) {
				setActiveJobDetails(jobList[0] as any);
			}

			setTimeout(() => {
				setIsAnimating(false);
			}, animationSpeed);
		}
	};

	return (
		<>
			<div className=" w-full pl-5 pt-4 pb-8 md:pl-8 2xl:pl-[120px] ">
				<div className={clsx('mb-6', 'pr-5', 'md:pr-8', '2xl:pr-[120px]')}>
					<div
						className={clsx(
							'flex',
							'flex-wrap',
							'justify-center',
							'md:justify-between',
							'items-center'
						)}
					>
						<h2
							className={clsx(
								'text-primary-black',
								'md:text-left',
								'w-full',
								'mt-8',
								'mb-2',
								'z-10',
								'md:w-auto',
								'text-center'
							)}
						>
							{jobListTitle}
						</h2>
						<div className="hidden space-x-6 md:flex">
							<button
								onClick={previous}
								aria-label={'left-arrow'}
								className=" text-primary-shade-1 bg-gray-shade-3 h-16 w-24 rounded-full py-4 px-6 text-lg md:w-32"
							>
								<FontAwesomeIcon icon={faArrowLeft} />
							</button>
							<button
								onClick={next}
								aria-label={'right-arrow'}
								className="bg-primary-shade-1 h-16 w-24 rounded-full py-4 px-6 text-lg text-white md:w-32"
							>
								<FontAwesomeIcon icon={faArrowRight} />
							</button>
						</div>
					</div>
				</div>
				<Slider ref={slider} {...settings}>
					{jobList?.map((jobDetails, index) => {
						return (
							jobDetails && (
								<Animate key={index}>
									<div
										key={index}
										onClick={() => setActiveJobDetails(jobDetails)}
										className={clsx(
											'container h-[300px] w-[281px] cursor-pointer   p-4  lg:h-[420px] lg:w-[380px] ',
											jobDetails?._key == activeJobDetails?._key &&
												'z-10 scale-105'
										)}
									>
										<div className="after:z-1 after:from-career-cards-gradient  container relative h-full w-full overflow-hidden rounded-3xl after:absolute after:top-0 after:left-0 after:h-full after:w-full after:bg-gradient-to-t">
											<CMSImageWrapper
												altText={jobDetails?.jobImage?.asset?.altText || ''}
												image={jobDetails?.jobImage || null}
												shouldBePrefetched={true}
												className={clsx('')}
											/>
										</div>

										<div className="container absolute bottom-4  left-0 z-10 flex  w-full items-end   justify-between  p-8    md:gap-2  lg:bottom-8  lg:pt-4">
											<span className="w-[60%] text-2xl font-semibold text-white 2xl:text-4xl ">
												{jobDetails?.positionName}
											</span>

											<button
												className={clsx(
													'text-primary-black  h-[36px]   w-[80px]  rounded-lg  text-center  text-xs lg:h-[56px]  lg:w-[128px] lg:text-xl',
													jobDetails?._key !== activeJobDetails?._key &&
														'bg-secondary-shade-1',
													jobDetails?._key == activeJobDetails?._key &&
														'bg-white'
												)}
											>
												{jobDetails?._key == activeJobDetails?._key
													? 'Selected'
													: jobDetails?.learnMoreButton?.text}
											</button>
										</div>
									</div>
								</Animate>
							)
						);
					})}
				</Slider>
				<div className="mt-8 flex w-full justify-center space-x-6 md:hidden">
					<button
						onClick={previous}
						aria-label={'left-arrow'}
						className=" text-primary-shade-1 bg-gray-shade-3 h-16 w-24 rounded-full py-4 px-6 text-lg md:w-32"
					>
						<FontAwesomeIcon icon={faArrowLeft} />
					</button>
					<button
						onClick={next}
						aria-label={'right-arrow'}
						className="bg-primary-shade-1 h-16 w-24 rounded-full py-4 px-6 text-lg text-white md:w-32"
					>
						<FontAwesomeIcon icon={faArrowRight} />
					</button>
				</div>
			</div>
		</>
	);
};

export default JobsSliderContent;
