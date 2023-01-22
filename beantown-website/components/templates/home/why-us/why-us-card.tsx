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
			<div className="flex border rounded-lg bg-[#F5F5F5]">
				<div className="p-2">
					<Image
						src={props.thumbnailSrc}
						alt={props.thumbnailAltText}
						width="100"
						height="100"
					/>
				</div>
				<div className="p-2">
					<h1 className="text-2xl sm:text-4xl font-semibold">{props.title}</h1>
					<div className="text-base sm:text-xl font-light text-gray-500">
						<RichText value={props.description} />
					</div>
				</div>
			</div>
		</>
	);
};
export default WhyUsCard;
