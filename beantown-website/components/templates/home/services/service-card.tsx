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
<<<<<<< HEAD
		<>
			<div className="flex">
				<div className="rounded-lg shadow-lg flex flex-col justify-center items-center  bg-white max-w-sm ">
					<div
						className="w-96 h-72 rounded-t-lg "
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

				{/* <button className="border rounded-lg text-white para-3 bg-primary-shade-1 py-2 sm:px-8 px-10 my-4 md:tracking-wider tracking-wide  ">
					{props.buttonText}
				</button> */}
=======
		<div id="card-container" className="flex-col bg-white rounded-lg shadow-lg">
			<div id="image-container" className="basis-3/4">
				<Image
					src={props.thumbnailSrc}
					alt={props.thumbnailAltText}
					width="400"
					height="350"
					className="rounded-t-lg h-72 object-cover"
				/>
>>>>>>> 3359a74b433aa37cef34a704cd5d5ccae1def621
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
