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
		<section id="testimonialCard" className="bg-white lg:min-h-[550px]">
			<div className="flex justify-center pt-4 lg:py-10">
				<Image
					alt="An image for quotes in testimonial card"
					width={40}
					height={45}
					src="/images/home/testimonials-quote.svg"
				/>
			</div>
			<div className="flex flex-col items-center gap-2 py-10 ">
				<h1 className="subtitle-2 md:subtitle-4 text-primary-black">
					{props.clientName}
				</h1>
				<h4 className="md:para-3 para-4 text-gray-shade-2">
					{props.clientDetails}
				</h4>
				<div className="para-4 md:para-3 text-primary-black pt-6  text-center lg:px-10 ">
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
