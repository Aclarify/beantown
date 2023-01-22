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
			<div className="flex border rounded-lg bg-white">
				<div className="p-2 flex-none">
					<Image
						src={props.thumbnailSrc}
						alt={props.thumbnailAltText}
						width="100"
						height="100"
					/>
				</div>
				<div className="p-2 flex-1">
					<h1 className="subtitle-4 md:subtitle-1 text-primary-black">
						{props.title}
					</h1>
					<div className="para-4 md:para-1  text-gray-shade-1 pt-6">
						<RichText value={props.description} />
					</div>
				</div>
			</div>
		</>
	);
};
export default WhyUsCard;
