import ReadMore from 'components/molecules/read-more.molecule';
import React from 'react';
import testimonialQuoteImg from 'public/images/home/testimonials-quote.svg';
import StaticImageWrapper from 'components/molecules/static-image-wrapper.molecule';
interface Props {
	clientName: string;
	clientDetails: string;
	reviewComments: string;
	onShowMore?: () => void;
}

const TestimonialCardWrapper: React.FC<Props> = (props) => {
	return (
		<section
			id="testimonialCard"
			className="z-5  relative flex h-[360px] w-[280px] flex-col rounded-2xl bg-white px-6  lg:h-[600px] lg:w-[378px]  lg:rounded-3xl"
		>
			<TestimonialCard {...props} />
		</section>
	);
};

const padding = 'lg:px-10';

export const TestimonialCard: React.FC<Props> = (props) => {
	return (
		<>
			<div className={`flex justify-start ${padding} py-6 lg:py-10`}>
				<div className="image-wrapper w-[30px]  lg:h-[56px] lg:w-[60px]">
					<StaticImageWrapper
						altText="An image for quotes in testimonial card"
						src={testimonialQuoteImg}
					/>
				</div>
			</div>
			<div className={`flex flex-col items-start gap-1 text-left ${padding}`}>
				<h5 className="text-primary-black">{props.clientName}</h5>
				<span className="subtitle-2 text-gray-shade-2">
					{props.clientDetails}
				</span>
				<div className="para text-primary-black no-scrollbar cursor-pointer overflow-y-auto pt-4 pb-2 text-left leading-6 md:h-96  lg:leading-9">
					{props.onShowMore && (
						<ReadMore
							content={props.reviewComments}
							limit={240}
							onShowMore={props.onShowMore}
						/>
					)}
					{!props.onShowMore && props.reviewComments}
				</div>
			</div>
		</>
	);
};
export default TestimonialCardWrapper;
