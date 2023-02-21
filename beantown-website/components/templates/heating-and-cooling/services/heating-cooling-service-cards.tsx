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
			<div className="w-full">
				<div
					className="rounded-3xl bg-[#FFFFFF] px-4 py-6
			shadow-[rgba(29,_39,_87,_0.04)_0px_6px_10px] lg:px-2 xl:px-6 
			"
				>
					<div className="image-icon-wrapper mx-auto h-[60px] w-[60px] md:h-[80px] md:w-[80px]">
						<Image
							src={props.thumbnailSrc}
							alt={props.thumbnailAltText}
							width={80}
							height={80}
							style={{
								width: '100%',
							}}
						></Image>
					</div>
					<div className="text-center md:pt-8">
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
