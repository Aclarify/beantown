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
			className="flex-col  rounded-xl rounded-t-3xl shadow-lg group-hover:blur-sm hover:!blur-none group-hover:scale-[1.05] hover:!scale-100 duration-500 "
		>
			
				<Image
					src={props.thumbnailSrc}
					alt={props.thumbnailAltText}
					width="600"
					height="350"
					className="rounded-t-lg w-96 h-72 object-cover  "
				/>
			
			<div id="name-container" className=" basis-1/8">
				<h1 className="p-4  title-5 md:title-5 lg:title-4 text-primary-shade-1 text-center  ">
					{props.title}
				</h1>
			</div>
			<div id="button-container" className="basis-1/8 text-center mt-4 mb-6">
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
