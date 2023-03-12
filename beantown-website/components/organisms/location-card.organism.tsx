import React from 'react';
import Image from 'next/image';

interface Props {
	locationText: string;
}
const LocationCard: React.FC<Props> = (props) => {
	return (
		<div className="location-card flex  h-[32px] w-[154px] items-center py-2 pl-[6px]  lg:min-h-[54px] lg:min-w-[315px]">
			<div className=" icon-image-wrapper h-[12px] w-[12px] lg:h-[24px] lg:w-[24px]">
				<Image
					src={'/images/home/location-icon.svg'}
					alt="location icon"
					width="100"
					height="100"
					style={{
						width: '100%',
					}}
				></Image>
			</div>
			<div className="text-container  pl-[10px]">
				<span className=" text-xs font-light lg:text-2xl ">
					{props.locationText}
				</span>
			</div>
		</div>
	);
};
export default LocationCard;
