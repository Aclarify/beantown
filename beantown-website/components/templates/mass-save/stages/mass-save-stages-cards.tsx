import React from 'react';
import Image from 'next/image';
import Animate from 'components/molecules/animate.molecule';

interface Props {
	title: string;
	thumbnailSrc: string;
	thumbnailAltText: string;
	content: string;
}

const MassSaveStagesCard: React.FC<Props> = (props) => {
	return (
		<>
			<div className="h-full  w-[100px] ">
				<Animate cascade>
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
					<div className=" text-center lg:pt-8">
						<h5 className=" text-primary-black pb-4">{props.title}</h5>
						<p className=" text-gray-shade-1 !text-[20px] !font-thin ">
							{props.content}
						</p>
					</div>
				</Animate>
			</div>
		</>
	);
};
export default MassSaveStagesCard;
