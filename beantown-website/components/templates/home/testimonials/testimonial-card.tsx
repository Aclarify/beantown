import ReadMore from 'components/molecules/read-more.molecule';
import Image from 'next/image';
import React from 'react';
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
			className="flex flex-col rounded-2xl bg-white lg:min-h-[550px] lg:max-w-[370px] lg:rounded-3xl"
		>
			<div className="flex  justify-center pt-6 lg:py-5">
				<Image
					alt="An image for quotes in testimonial card"
					width={40}
					height={45}
					src="/images/home/testimonials-quote.svg"
				/>
			</div>
			<div className="flex flex-col items-center gap-1 py-5 ">
				<h1 className="subtitle-2 md:subtitle-4 text-primary-black">
					{props.clientName}
				</h1>
				<h4 className="md:para-3 para-4 text-gray-shade-2">
					{props.clientDetails}
				</h4>
				<div className="para-4 md:para-3 text-primary-black px-6  pt-6 text-center lg:px-10 ">
					<ReadMore
						content={props.reviewComments}
						limit={250}
						onShowMore={props.onShowMore}
					/>
				</div>
			</div>
		</section>
	);
};
export default TestimonialCard;
