import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from 'components/atoms/button.atom';

interface Props {
	title: string;
	buttonText: string;
	hRef: string;
	thumbnailSrc: string;
	thumbnailAltText: string;
}

const ServiceCard: React.FC<Props> = (props) => {
	return (
	
			<div
				id="card-container"
				className="flex flex-col items-center justify-center  rounded-xl  shadow-lg "
			>
				<Image
					src={props.thumbnailSrc}
					alt={props.thumbnailAltText}
					width="600"
					height="350"
					className="lg:h-72 lg:w-full   rounded-t-lg lg:object-cover  "
				/>

			
				<h1 className="title-5  md:title-5 lg:title-4 text-primary-shade-1 p-4 text-center  ">
					{props.title}
				</h1>			
		
				<Button fontColor="text-white" bgColor=" bg-primary-shade-1 mb-4">
					<Link className="basis-1/8 mt-4 " href={'/'}>
						{props.buttonText}
					</Link>
				</Button>
		
			</div>
	
	);
};
export default ServiceCard;
