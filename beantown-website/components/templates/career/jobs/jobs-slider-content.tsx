import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { SCREEN_BREAKPOINTS } from '@typing/common/interfaces/devices.interface';
import Animate from 'components/molecules/animate.molecule';
import { CareersContentProps } from 'temporary-ondeck-pages/careers';
import CMSImageWrapper from 'components/molecules/cms-image-wrapper.molecule';
import { jobsContext } from '@contexts/jobs/Job-benefits-context';
import clsx from 'clsx';
import debounce from 'lodash/debounce';
const JobsSliderContent = () => {
	const slider = React.useRef<Slider | null>(null);
	const { pageContent } =
		useContext<GlobalContextProps<CareersContentProps>>(GlobalContext);
	const { activeJobDetails, setActiveJobDetails } = useContext(jobsContext);

	if (!pageContent) {
		return null;
	}

	const pageData = pageContent.page[0];
	const { jobList } = pageData;
	if (!jobList) {
		return null;
	}
	const previous = () => {
		if (slider.current) {
			slider.current.slickPrev();
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
		}
	};
	const next = () => {
		if (slider.current) {
			slider.current.slickNext();
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
		}
	};
	const debouncedNext = debounce(next, 500);
	const debouncedPrevious = debounce(previous, 500);
	const settings = {
		dots: false,
		infinite: true,
		speed: 1300,
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
	return (
		<>
			<div className=" w-full pl-5 pt-4 pb-8 md:pl-8 2xl:pl-[120px] ">
				<Slider ref={slider} {...settings}>
					{jobList?.map((jobDetails, index) => {
						return (
							jobDetails && (
								<Animate key={index}>
									<div
										key={index}
										onClick={() => setActiveJobDetails(jobDetails)}
										className={clsx(
											'container  h-[410px]  w-[281px] cursor-pointer   p-4  lg:h-[650px] lg:w-[480px]',
											jobDetails?._key == activeJobDetails?._key &&
												'z-10 scale-105'
										)}
									>
										<div className="container overflow-hidden rounded-3xl">
											<CMSImageWrapper
												altText={jobDetails?.jobImage?.asset?.altText || ''}
												image={jobDetails?.jobImage || null}
												shouldBePrefetched={true}
												style={{
													width: '100%',
													height: 'auto',
													objectFit: 'contain',
												}}
											/>
										</div>

										<div className="container absolute bottom-24 left-0 flex  w-full items-end   justify-between  p-8    md:gap-2  lg:pt-4  ">
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

				<div className="relative mt-0 flex justify-between   p-2 pr-4 md:pr-24 ">
					<button
						aria-label={'left-arrow'}
						onClick={debouncedPrevious}
						className=" text-primary-shade-1 bg-secondary-shade-3 flex  h-12 w-20 justify-center rounded-full  px-6  py-4 md:px-12 "
					>
						<FontAwesomeIcon icon={faArrowLeft} />
					</button>
					<button
						aria-label={'right-arrow'}
						onClick={debouncedNext}
						className="bg-primary-shade-1 text-secondary-shade-3 flex h-12 w-20 justify-center rounded-full px-6  py-4  md:px-12 "
					>
						<FontAwesomeIcon icon={faArrowRight} />
					</button>
				</div>
			</div>
		</>
	);
};

export default JobsSliderContent;
