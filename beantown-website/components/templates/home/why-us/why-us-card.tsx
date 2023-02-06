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
			<div className="flex  rounded-2xl bg-white items-center lg:m-4">
				<div className=" py-4 pl-4 flex-none">
					<Image
						src={props.thumbnailSrc}
						alt={props.thumbnailAltText}
						width="100"
						height="100"
					/>
				</div>
				<div className=" pl-4 flex-1">
					<h1 className="subtitle-5 lg:subtitle-2 font-semibold text-primary-black ">
						{props.title}
					</h1>
					<div className="lg:para-2 para-4  text-gray-shade-1 pt-2">
						<RichText value={props.description} />
					</div>
				</div>
			</div>
		</>
	);
};
export default WhyUsCard;
