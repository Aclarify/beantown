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
import { CareersContentProps } from 'pages/careers';
import CMSImageWrapper from 'components/molecules/cms-image-wrapper.molecule';
import { jobsContext } from '@contexts/jobs/jobs.context';
import Button from 'components/atoms/button.atom';

const JobsSliderContent = () => {
	const slider = React.useRef<Slider | null>(null);
	const { pageContent } =
		useContext<GlobalContextProps<CareersContentProps>>(GlobalContext);
	const { activeJobDetails, setActiveJobDetails } =
	     useContext(jobsContext);		
	if (!pageContent) {
		return null;
	}
	
	const pageData = pageContent.page[0];
	const { jobList  } = pageData;
	if (!jobList) {
		return null;
	}
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
		focusOnSelect: true,
		variableWidth: true,
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
				},
			},
		],
	};
	return (
		<>
			<div className=" w-full pl-5 pt-4 md:pl-8 2xl:pl-[120px] ">
				<Slider ref={slider} {...settings}>
					{jobList?.map((jobDetails, index) => {
						return (
							jobDetails && (
								<Animate>
									<div
										key={index}
										onClick={() => setActiveJobDetails(jobDetails)}
										className={`${
											jobDetails == activeJobDetails
												? 'container  z-10 h-[410px] w-[281px]  scale-105 cursor-pointer p-4  lg:h-[650px] lg:w-[480px]   '
												: 'container  h-[410px]  w-[281px] cursor-pointer   p-4  lg:h-[650px] lg:w-[480px] '
										}`}
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
										

										<div className="container absolute bottom-20 left-0 flex  w-full  items-center   justify-between  p-8  pb-8  md:gap-2  lg:pt-4  ">
											<h6 className="text-white w-1/2 text-lg md:text-3xl xl:text-4xl font-semibold  ">
												{jobDetails?.positionName}
											</h6>

											<button className=" text-primary-black  rounded-lg bg-[#7AADD3]  px-4 py-4 text-sm  md:text-xl  lg:px-8  md:text-2xl  ">
												{jobDetails?.learnMoreButton?.text}
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
						onClick={previous}
						aria-label={'left-arrow'}
						className=" text-primary-shade-1 bg-secondary-shade-3  flex h-12 w-20 flex justify-center  rounded-full  px-6 py-4 md:px-12 "
					>
						<FontAwesomeIcon icon={faArrowLeft} />
					</button>
					<button
						onClick={next}
						aria-label={'right-arrow'}
						className="bg-primary-shade-1 text-secondary-shade-3 flex h-12 w-20 justify-center rounded-full  px-6 py-4 md:px-12 "
					>
						<FontAwesomeIcon icon={faArrowRight} />
					</button>
				</div>
			</div>
		</>
	);
};

export default JobsSliderContent;
