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
		<>
			<div className="flex">
				<div className="rounded-lg shadow-lg flex flex-col justify-center items-center  bg-white max-w-sm ">
					<div>
						<Image
							src={props.thumbnailSrc}
							alt={props.thumbnailAltText}
							width="350"
							height="350"
						/>
					</div>
					<div className="flex flex-col justify-center items-center">
						<h1 className="pt-4  title-5 md:title-3 text-primary-shade-1 text-center">
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
			</div>
		</>
	);
};
export default ServiceCard;
