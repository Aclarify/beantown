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
			<div className="m-8 mx-auto flex h-[448px] w-[354px] flex-col place-content-center justify-center space-y-6  rounded-lg bg-[#FFFFFF]  p-8 shadow-[rgba(29,_39,_87,_0.04)_0px_4px_8px]  sm:m-12 sm:p-12 ">
				<Image
					src={props.thumbnailSrc}
					alt={props.thumbnailAltText}
					width={100}
					height={100}
					className="mx-auto"
				></Image>
				<div className="flex flex-col  space-y-6 text-center">
					<p className="title-5 md:title-3">{props.title}</p>

					<p className="para-2 md:para-1 ">{props.content}</p>
				</div>
			</div>
		</>
	);
};
export default HeatingCoolingServiceCard;
