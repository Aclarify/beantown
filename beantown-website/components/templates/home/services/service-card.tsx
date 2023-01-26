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
	console.log('inside service card', imagePath);
	return (
		<>
			<div className="flex">
				<div className="rounded-lg shadow-lg flex flex-col justify-center items-center  bg-white max-w-sm ">
					<div
						className="w-96 h-72 rounded-t-lg }} "
						style={{ backgroundImage: `url(${imagePath})` }}
					></div>
					{/* <Image
							src={props.thumbnailSrc}
							alt={props.thumbnailAltText}
							width="400"
							height="350"
							className='rounded-t-lg h-72 object-cover'
						
						/> */}

					<div className="flex flex-col justify-center items-center">
						<h1 className="p-4  title-5 md:title-3 text-primary-shade-1 text-center">
							{props.title}
						</h1>
						<Link href={'/'}>
							<Button fontColor="text-white" bgColor=" bg-primary-shade-1">
								{props.buttonText}
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};
export default ServiceCard;
