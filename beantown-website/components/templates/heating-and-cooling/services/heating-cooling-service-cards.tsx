import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from 'components/atoms/button.atom';
interface Props {
	title: string;
	thumbnailSrc: string;
	thumbnailAltText: string;
	content: string;
}

const HeatingCoolingServiceCard: React.FC<Props> = (props) => {
	return (
		<>
			<div className=" m-8 flex   flex-col justify-center  space-y-2 p-8  shadow-[rgba(29,_39,_87,_0.04)_0px_4px_8px]  sm:h-[448px] sm:w-[354px] ">
				<div className="flex justify-center sm:h-80 sm:w-80">
					<Image
						src={props.thumbnailSrc}
						alt={props.thumbnailAltText}
						width={80}
						height={80}
					></Image>
				</div>
				<div className="sm:w-148 text-center  sm:h-60 ">
					<p className="subtitle-1">{props.title}</p>
				</div>

				<div className="text-center sm:h-[180px]  sm:w-[284px]">
					<p>{props.content}</p>
				</div>
			</div>
		</>
	);
};
export default HeatingCoolingServiceCard;
