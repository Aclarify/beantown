import RichText from 'components/molecules/rich-text.molecule';
import React from 'react';
interface Props {
	clientName: string;
	clientDetails: string;
	reviewComments: string;
}

const TestimonialCard: React.FC<Props> = (props) => {
	return (
		<div className="flex flex-col items-center bg-[#FFFFFF] my-6 p-4 flex-none gap-2 border rounded-xl ">
			<div className=" ">
				<img src="images/home_page/testimonialCardsImageUnionVector.svg" />
			</div>
			<div className=" flex flex-col gap-2 items-center pt-10 pb-6 ">
				<div>
					<h1 className="subtitle-2 md:subtitle-4 text-primary-black">
						{props.clientName}
					</h1>
				</div>
				<div>
					<h4 className="md:text-light-1 para-4 text-gray-shade-2">
						{props.clientDetails}
					</h4>
				</div>
				<div className="pt-10 para-4 md:para-2 text-primary-black">
					<RichText value={props.reviewComments} />
				</div>
			</div>
		</div>
	);
};
export default TestimonialCard;
