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
	console.log(props);
	return (
		<>
			<div className="border rounded-lg flex flex-col items-center bg-[#FFFFFF]">
				<Image
					src={props.thumbnailSrc}
					alt={props.thumbnailAltText}
					width="350"
					height="350"
				/>

				<h1 className="pt-4 sm:text-4xl text-3xl">{props.title}</h1>
				<button className="border rounded-lg text-white sm:text-xl text-lg bg-[#15284C] py-2 sm:px-8 px-10 my-4 ">
					{props.buttonText}
				</button>
			</div>
		</>
	);
};
export default ServiceCard;
