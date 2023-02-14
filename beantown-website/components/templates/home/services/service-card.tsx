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
			className="flex-col  rounded-xl rounded-t-3xl bg-white shadow-lg"
		>
			<div id="image-container" className="basis-3/4  ">
				<Image
					src={props.thumbnailSrc}
					alt={props.thumbnailAltText}
					width="600"
					height="350"
					className="h-96 rounded-t-lg object-cover  "
				/>
			</div>
			<div id="name-container" className=" basis-1/8">
				<h1 className="title-5  lg:title-3 text-primary-shade-1 p-4 text-center  ">
					{props.title}
				</h1>
			</div>
			<div id="button-container" className="basis-1/8 -mt-4 mb-4 text-center">
				
					<Button fontColor="text-white" bgColor=" bg-primary-shade-1">
						<Link href={'/'}>
							{props.buttonText}
						</Link>
				</Button>
		
			</div>
		</div>
	);
};
export default ServiceCard;
