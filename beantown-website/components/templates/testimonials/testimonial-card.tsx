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
			<div className="">
				<img src="images/home_page/testimonialCardsImageUnionVector.svg" />
			</div>
			<div className=" flex flex-col gap-2 items-center pt-10 pb-6 ">
				<div>
					<h1 className="text-4xl font-bold">{props.clientName}</h1>
				</div>
				<div>
					<h4 className="text-2xl font-light">{props.clientDetails}</h4>
				</div>
				<div className="text-center text-xl pt-10">
					<RichText value={props.reviewComments} />
				</div>
			</div>
		</div>
	);
};
export default TestimonialCard;
