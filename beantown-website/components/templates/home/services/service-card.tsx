import React from 'react';
import Image from 'next/image';

interface Props {
	title: string;
	buttonText: string;
	hRef: string;
	thumbnailSrc: string;
	thumbnailAltText: string;
}

const ServiceCard: React.FC<Props> = (props) => {
	return (
		<>
			<div className="border border-white rounded-lg flex flex-col items-center bg-[#FFFFFF] ">
				<Image
					src={props.thumbnailSrc}
					alt={props.thumbnailAltText}
					width="350"
					height="350"
				/>

				<h1 className="pt-4 title-5 md:title-3 text-primary-shade-1 text-center">
					{props.title}
				</h1>
				<button className="border rounded-lg text-white para-3 bg-primary-shade-1 py-2 sm:px-8 px-10 my-4 md:tracking-wider tracking-wide  ">
					{props.buttonText}
				</button>
			</div>
		</>
	);
};
export default ServiceCard;
