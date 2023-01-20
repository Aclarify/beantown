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
import react from 'react';
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


		const cards = [
			{
				url:'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
				title:'title',
				subTitle:'subTitle',
				description:'Description Text hsdsadaljdklajklasjdklsdasdfadfafafa',

			},
			{
				url:'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmxvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
				title:'title',
				subTitle:'subTitle',
				description:'Description Text hsdsadaljdklajklasjdklsdasdfadfafafa',
			},
			{
				url:'https://images.unsplash.com/photo-1500989145603-8e7ef71d639e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
				title:'title',
				subTitle:'subTitle',
				description:'Description Text hsdsadaljdklajklasjdklsdasdfadfafafa',
			},
			{
				url:'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
				title:'title',
				subTitle:'subTitle',
				description:'Description Text hsdsadaljdklajklasjdklsdasdfadfafafa'

			},
			{
				url:'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmxvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
				title:'title',
				subTitle:'subTitle',
				description:'Description Text hsdsadaljdklajklasjdklsdasdfadfafafa',
			},
		];
	

	
		const [currentIndex,setCurrentIndex]=  react.useState(0);

        const previousSlide=()=>{
        
            const isFirstSlide = currentIndex === 0;
            const newIndex = isFirstSlide ? cards.length -1 : currentIndex - 1;
            setCurrentIndex(newIndex);            
       
           
        }
        const nextSlide=(event:MouseEvent<HTMLButtonElement>)=>{
           
            const isLastSlide = currentIndex === cards.length -1 
            const newIndex = isLastSlide ? 0 :currentIndex + 1
            setCurrentIndex(newIndex);
         
        }
        const goToSlide =(slideIndex:number)=>{          
            setCurrentIndex(slideIndex)
          
        }



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
					<div className="flex flex-col">
						<div className="flex gap-2 m-4 ">
							<button className="w-8 border rounded-lg h-2 bg-blue-100 "></button>
							<button className="w-8 border rounded-lg h-2 bg-[#1E1E1E] "></button>
							<button className="w-8 border rounded-lg h-2 bg-blue-100 "></button>
							<button className="w-8 border rounded-lg h-2 bg-blue-100 "></button>
						</div>
						<div className="flex gap-4 pt-4 ">
							<button  onClick={previousSlide} className="bg-blue-100 py-2 px-4 rounded-full w-16">
								<FontAwesomeIcon icon={faArrowLeft} />
							</button>
							<button  onClick={nextSlide} className=" py-2 px-4 rounded-full w-16 text-white bg-[#1E1E1E]">
								<FontAwesomeIcon icon={faArrowRight} />
							</button>
						</div>
					</div>
				</div>

				<div>
					{testimonialCards?.map((reviews, index) => {
						return (
							// <TestimonialCard
							// 	key={index}
							// 	clientName={reviews?.titleText || ''}
							// 	clientDetails={reviews?.subText || ''}
							// 	reviewComments={reviews?.description?.contentRaw}
							// />
							<> 
							   <div className="flex flex-col items-center bg-[#FFFFFF] my-6 p-4 flex-none gap-2 border rounded-xl ">
									<div className="">
										<img src="images/home_page/testimonialCardsImageUnionVector.svg" />
									</div>
									<div className=" flex flex-col gap-2 items-center pt-10 pb-6 ">
										<div>
											<h1 className="text-4xl font-bold">name</h1>
										</div>
										<div>
											<h4 className="text-2xl font-light">David</h4>
										</div>
										<div className="text-center text-xl pt-10">
											<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi inventore porro officia explicabo sapiente nobis voluptatibus perspiciatis saepe dolor unde.</p>
										</div>
									</div>
								</div>
							</>
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
						<button  onClick={previousSlide} className="bg-blue-100 py-2 px-4 rounded-full w-16">
							<FontAwesomeIcon icon={faArrowLeft} />
						</button>
						<button  onClick={nextSlide} className=" py-2 px-4 rounded-full w-16 text-white bg-[#1E1E1E]">
							<FontAwesomeIcon icon={faArrowRight} />
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}
