import ReadMore from 'components/molecules/read-more.molecule';
import React from 'react';
import testimonialQuoteImg from 'public/images/home/testimonials-quote.svg';
import StaticImageWrapper from 'components/molecules/static-image-wrapper.molecule';
interface Props {
	clientName: string;
	clientDetails: string;
	reviewComments: string;
	onShowMore: () => void;
}

const TestimonialCard: React.FC<Props> = (props) => {
	return (
		<section
			id="testimonialCard"
			className="flex h-[358px]  w-[280px] flex-col rounded-2xl bg-white px-6 lg:h-[556px] lg:w-[378px]  lg:rounded-3xl"
		>
			<div className="flex justify-center py-6 lg:py-10">
				<div className="image-wrapper w-[30px]  lg:h-[56px] lg:w-[60px]">
					<StaticImageWrapper
						altText="An image for quotes in testimonial card"
						src={testimonialQuoteImg}
					/>
				</div>
			</div>
			<div className="flex flex-col items-center gap-1 py-2 lg:py-5 ">
				<h1 className="subtitle-2 lg:subtitle-4 text-primary-black">
					{props.clientName}
				</h1>
				<h4 className="md:para-3 para-4 text-gray-shade-2">
					{props.clientDetails}
				</h4>
				<div className="para-4 lg:para-3 text-primary-black pt-6 pb-2 text-center leading-6 lg:px-10 lg:leading-9">
					<ReadMore
						content={props.reviewComments}
						limit={230}
						onShowMore={props.onShowMore}
					/>
				</div>
			</div>
		</section>
	);
};
export default TestimonialCard;
