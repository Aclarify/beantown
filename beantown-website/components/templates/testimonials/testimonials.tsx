import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faArrowRight,
	faArrowLeft,
	faMapLocation,
} from '@fortawesome/free-solid-svg-icons';
import TestimonialCard from './testimonial-card';
import React, { Component, useContext } from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { HomePageContentProps } from 'pages';

export default function Testimonials() {
	const { pageContent } =
		useContext<GlobalContextProps<HomePageContentProps>>(GlobalContext);
	if (!pageContent) {
		return;
	}
	const homeData = pageContent.allHome[0];
	const { testimonialTitle, testimonialDescription, testimonialCards } =
		homeData;
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
							<button className="w-8 border rounded-lg h-2 bg-blue-100 "></button>
							<button className="w-8 border rounded-lg h-2 bg-[#1E1E1E] "></button>
							<button className="w-8 border rounded-lg h-2 bg-blue-100 "></button>
							<button className="w-8 border rounded-lg h-2 bg-blue-100 "></button>
						</div>
						<div className="flex gap-4 pt-4 ">
							<button className="bg-blue-100 py-2 px-4 rounded-full w-16">
								<FontAwesomeIcon icon={faArrowLeft} />
							</button>
							<button className=" py-2 px-4 rounded-full w-16 text-white bg-[#1E1E1E]">
								<FontAwesomeIcon icon={faArrowRight} />
							</button>
						</div>
					</div>
				</div>

				<div>
					{testimonialCards?.map((reviews, index) => {
						return (
							<TestimonialCard
								clientName={reviews?.titleText}
								clientDetails={reviews?.subText}
								reviewComments={reviews?.description?.contentRaw}
							/>
						);
					})}
				</div>
			</div>
			<div className="md:hidden">
				<div className="flex items-center justify-between ">
					<div className="flex gap-2 m-4">
						<button className="w-8 border rounded-lg h-2 bg-blue-100 "></button>
						<button className="w-8 border rounded-lg h-2 bg-[#1E1E1E] "></button>
						<button className="w-8 border rounded-lg h-2 bg-blue-100 "></button>
						<button className="w-8 border rounded-lg h-2 bg-blue-100 "></button>
					</div>
					<div className="flex gap-4 pt-4 ">
						<button className="bg-blue-100 py-2 px-4 rounded-full w-16">
							<FontAwesomeIcon icon={faArrowLeft} />
						</button>
						<button className=" py-2 px-4 rounded-full w-16 text-white bg-[#1E1E1E]">
							<FontAwesomeIcon icon={faArrowRight} />
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}
