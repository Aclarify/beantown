import RichText from 'components/molecules/rich-text.molecule';
import React from 'react';
import Image from 'next/image';

interface Props {
	title: string;
	description: string;
	thumbnailSrc: string;
	thumbnailAltText: string;
}
const WhyUsCard: React.FC<Props> = (props) => {
	return (
		<>
			<div className="m-2 flex items-center  rounded-xl bg-white shadow-sm md:m-4  ">
				<div className=" flex-none ">
					<Image
						src={props.thumbnailSrc}
						alt={props.thumbnailAltText}
						width="150"
						height="150"
						className="h-32 w-24 flex-none py-1 pl-4 md:h-44 md:w-32 md:py-4 "
					/>
				</div>
				<div className=" flex-1 pl-4">
					<h1 className="subtitle-5 lg:subtitle-2 text-primary-black font-semibold ">
						{props.title}
					</h1>
					<div className="lg:para-2 para-4  text-gray-shade-1 pt-2">
						<p>{props.description}</p>
					</div>
				</div>
			</div>
		</>
	);
};
export default WhyUsCard;
