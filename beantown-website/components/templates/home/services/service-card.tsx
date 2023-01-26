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
	const imagePath = props.thumbnailSrc;
	return (
		<div id="card-container" className="flex-col bg-white rounded-lg shadow-lg">
			<div id="image-container" className="basis-3/4">
				<Image
					src={props.thumbnailSrc}
					alt={props.thumbnailAltText}
					width="400"
					height="350"
					className="rounded-t-lg h-72 object-cover"
				/>
			</div>
			<div id="name-container" className="basis-1/8">
				<h1 className="p-4  title-5 md:title-3 text-primary-shade-1 text-center">
					{props.title}
				</h1>
			</div>
			<div id="button-container" className="basis-1/8 text-center">
				<Link href={'/'}>
					<Button fontColor="text-white" bgColor=" bg-primary-shade-1">
						{props.buttonText}
					</Button>
				</Link>
			</div>
		</div>
	);
};
export default ServiceCard;
