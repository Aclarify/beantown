import React from 'react';
import Image from 'next/image';
interface Props {
	title: string;
	thumbnailSrc: string;
	thumbnailAltText: string;
	content: string;
}

const HeatingCoolingServiceCard: React.FC<Props> = (props) => {
	return (
		<>
			<div className="w-full p-4 sm:w-1/2 md:w-1/2 lg:w-1/4">
				<div
					className=" rounded-3xl bg-[#FFFFFF] px-4 py-6
			shadow-[rgba(29,_39,_87,_0.04)_0px_6px_10px] lg:px-2 xl:px-6 
			"
				>
					<Image
						src={props.thumbnailSrc}
						alt={props.thumbnailAltText}
						width={80}
						height={80}
						className="mx-auto pb-6"
					></Image>
					<div className=" text-center">
						<p className="title-5 md:title-3 text-primary-black pb-4">
							{props.title}
						</p>
						<p className="para-2 md:para-1 text-gray-shade-1 ">
							{props.content}
						</p>
					</div>
				</div>
			</div>
		</>
	);
};
export default HeatingCoolingServiceCard;
