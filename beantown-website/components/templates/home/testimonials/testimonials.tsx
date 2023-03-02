import React, { useContext } from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { HomePageContentProps } from 'pages';
import Image from 'next/image';
import Testimonials from 'components/organisms/testimonials.organism';

export default function HomeTestimonials() {
	const { pageContent } =
		useContext<GlobalContextProps<HomePageContentProps>>(GlobalContext);

	if (!pageContent) {
		return null;
	}
	const homeData = pageContent.page[0];
	const { testimonialSection } = homeData;

	return (
		<section
			id="testimonials"
			className=" bg-secondary-shade-3  relative bottom-[24rem] -mb-[24rem]  "
		>
			<Image
				src={'/images/home/testimonials/home-testimonial-left-blob.svg'}
				height={590}
				width={650}
				alt="Left Blob "
				className="z-1  absolute top-0 left-0 hidden -translate-x-[55%] transform lg:block lg:-translate-y-[45%] "
			/>
			<Image
				src={'/images/home/testimonials/home-testimonial-right-blob.svg'}
				height={390}
				width={450}
				alt="Right Blob tab "
				className="z-1  absolute top-0 right-0 hidden translate-x-[50%] -translate-y-[70%] transform md:block lg:hidden"
			/>
			<Image
				src={'/images/home/testimonials/home-testimonial-right-blob.svg'}
				height={250}
				width={250}
				alt="Right Blob mobile"
				className="z-1  absolute top-0 right-0 translate-x-[48%] -translate-y-[70%] transform md:hidden"
			/>
			<Testimonials
				testimonialTitle={testimonialSection?.testimonialTitle || ''}
				testimonialDescription={
					testimonialSection?.testimonialDescription || ''
				}
				testimonialCards={testimonialSection?.testimonialCards || []}
			/>
		</section>
	);
}
