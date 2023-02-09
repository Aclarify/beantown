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
		<section id="testimonialCard">
			<div className="">
				<div className="flex justify-center mt-4">
					<Image
						alt="An image for quotes in testimonial card"
						width={40}
						height={45}
						src="/images/home/testimonialCardsImageUnionVector.svg"
					/>
				</div>
				<div className="flex flex-col gap-2 items-center pt-10 pb-6">
					<h1 className="subtitle-2 md:subtitle-4 text-primary-black">
						{props.clientName}
					</h1>
					<h4 className="md:para-3 para-4 text-gray-shade-2">
						{props.clientDetails}
					</h4>
					<div className="pt-10 para-4 md:para-3 text-center text-primary-black  overflow-y-scroll ">
						<ReadMore
							content={props.reviewComments}
							limit={250}
							onShowMore={props.onShowMore}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};
export default TestimonialCard;
