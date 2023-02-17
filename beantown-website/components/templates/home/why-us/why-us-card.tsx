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
			<div className=" flex items-center  rounded-xl bg-white shadow-sm lg:m-4  ">
				<div className=" flex-none py-4 pl-4">
					<Image
						src={props.thumbnailSrc}
						alt={props.thumbnailAltText}
						width="150"
						height="150"
						className="flex-none py-4 pl-4 md:w-32 md:h-44 w-24 h-32 "
					/>
				</div>
				<div className=" flex-1 pl-4">
					<div className="lg:para-2 para-4  text-gray-shade-1 pt-2">
						<p>{props.description}</p>
					</div>
				</div>
			</div>
		</>
	);
};
export default WhyUsCard;
