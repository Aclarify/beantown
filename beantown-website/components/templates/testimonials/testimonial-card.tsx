import ReadMoreReadLess from 'components/molecules/show-more-show-less.molecule';
import RichText from 'components/molecules/rich-text.molecule';
import Image from 'next/image';
import React from 'react';
interface Props {
	clientName: string;
	clientDetails: string;
	reviewComments: string;
}
let blogContent: string;
const TestimonialCard: React.FC<Props> = (props) => {
	blogContent = props.reviewComments;
	console.log(blogContent);

	return (
		<section id="testimonialCard">
			<div className="mx-4">
				<div className="flex justify-center mt-4">
					<Image
						alt="An image for quotes in testimonial card"
						width={40}
						height={45}
						src="/images/home_page/testimonialCardsImageUnionVector.svg"
					/>
				</div>
				<div className="flex flex-col gap-2 items-center pt-10 pb-6">
					<div>
						<h1 className="subtitle-2 lg:subtitle-4 text-primary-black">
							{props.clientName}
						</h1>
					</div>
					<div>
						<h4 className="lg:para-3 para-4 text-gray-shade-2">
							{props.clientDetails}
						</h4>
					</div>
					<div className="pt-10 para-4 md:para-3 text-center text-primary-black  overflow-y-scroll ">
						
						<ReadMoreReadLess content={props.reviewComments} limit={50}/>
					</div>
				</div>
			</div>
		</section>
	);
};
export default TestimonialCard;
