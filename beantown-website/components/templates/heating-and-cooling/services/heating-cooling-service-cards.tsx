import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from 'components/atoms/button.atom';
interface Props {
	title: string;	
	thumbnailSrc: string;
	thumbnailAltText: string;
	content:string;
}

const HeatingCoolingServiceCard: React.FC<Props> = (props) => {

	return (
		<>
			<div className=" sm:m-8  flex  flex-col items-center justify-center  space-y-4  p-8 text-center shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]   sm:h-[448px] sm:w-[354px] ">
				<div>
					<Image
						src={props.thumbnailSrc}
						alt={props.thumbnailAltText}
						width={80}
						height={80}
					></Image>
				</div>
				<div>
					<p className="subtitle-1">{props.title}</p>
				</div>

				<div className="sm:h-[180px] sm:w-[284px]">
					<p>{props.content}</p>
				</div>
			</div>
		</>
	);
};
export default HeatingCoolingServiceCard