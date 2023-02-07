import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faArrowRight,
	faArrowLeft,
	faMapLocation,
} from '@fortawesome/free-solid-svg-icons';

import React, {	useContext} from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { HomePageContentProps } from 'pages';
import Image from 'next/image';
import { useRouter } from 'next/router';
import TestimonialCard from './testimonial-card';
import Modal from 'react-modal'; 
import Link from 'next/link';
import ReadMoreReadLess from 'components/molecules/show-more-show-less.molecule';


Modal.setAppElement("#slider");
export default function Testimonials() {
	
	const { pageContent } =
		useContext<GlobalContextProps<HomePageContentProps>>(GlobalContext);

	if (!pageContent) {
		return null;
	}
	const homeData = pageContent.home[0];
	const { testimonialTitle, testimonialDescription, testimonialCards } =
		homeData;
  
	const router = useRouter()
	


	return (
		<>
			{/* <section id="top-curve-testimonial" className="lg:-mt-14 -mt-3">
				<Image
					src="/testimonial-top-curve.svg"
					alt="top-curve"
					width={1900}
					height={800}
				></Image>
			</section> */}
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
							<h4 className="para-4 text-primary-shade-1 ">
								{testimonialTitle}
							</h4>
							<h1 className="title-5 text-primary-black">
								{testimonialDescription}
							</h1>
						</div>
					</div>
				</div>

				<div className="flex flex-nowrap overflow-x-auto space-x-4  m-4 ">
					{/* card data from sanity */}

					<div className="hidden z-10 lg:flex flex-col items-center justify-center m-8   flex-none gap-15  ">
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
						<div className="flex flex-col items-center justify-center m-4 ">
							<div className="flex gap-4 m-4 ">
								{testimonialCards?.map((cards, index) => {
									return (
										<button
											key={index}
											className="w-8 border rounded-lg h-2 bg-white hover:bg-primary-shade-1 "
										></button>
									);
								})}
							</div>
							<div className="flex  pt-4 justify-center ">
								<button className="bg-primary-shade-1 rounded-full text-white w-24 h-full text-center  hover:opacity-100 disabled:bg-white disabled:text-black disabled:cursor-not-allowed z-10 p-2 m-1  transition-all ease-in-out duration-300">
									<FontAwesomeIcon icon={faArrowLeft} size="lg" />
								</button>
								<button className="bg-primary-shade-1 rounded-full text-white w-24  h-full text-center hover:opacity-100   disabled:bg-white disabled:text-black disabled:cursor-not-allowed z-10 p-2 m-1 transition-all ease-in-out duration-300">
									<FontAwesomeIcon icon={faArrowRight} size="lg" />
								</button>
							</div>
						</div>
					</div>

					{/* showing list of cards */}

					<div className="no-scrollbar flex gap-6 mt-16    overflow-x-scroll scroll-smooth snap-x snap-mandatory  z-0 cursor-pointer group ">
						{testimonialCards?.map((reviews, index) => {
							return (
								<div
									id="slider"
									key={index}
									className=" w-80 h-auto snap-start items-center bg-[#FFFFFF] my-6 p-2 flex-none  border rounded-2xl "
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
				<div className="lg:hidden">
					<div className="flex items-center justify-between ">
						<div className="flex gap-2 m-4">
							{testimonialCards?.map((cards, index) => {
								return (
									<button
										key={index}
										className="w-8 border rounded-lg h-2 bg-white hover:bg-primary-shade-1 "
									></button>
								);
							})}
						</div>
						<div className="flex  pt-4 ">
							<button className="bg-primary-shade-1  rounded-full text-white w-16 h-full  text-center  hover:opacity-100   disabled:bg-white disabled:text-black disabled:cursor-not-allowed z-10 p-2 m-1 transition-all ease-in-out duration-300">
								<FontAwesomeIcon icon={faArrowLeft} />
							</button>
							<button
								id="right"
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
