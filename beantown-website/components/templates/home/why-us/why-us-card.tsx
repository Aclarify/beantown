import RichText from 'components/molecules/rich-text.molecule';
import React from 'react';
import Image from 'next/image';
import Animate from 'components/molecules/animate.molecule';

interface Props {
	title: string;
	description: string;
	thumbnailSrc: string;
	thumbnailAltText: string;
}
const WhyUsCard: React.FC<Props> = (props) => {
	return (
		<section>
			<div className="flex items-center  rounded-xl bg-white py-[3px] shadow-sm md:m-4 ">
				<div className=" flex-none p-2 md:p-4 ">
					<Image
						src={props.thumbnailSrc}
						alt={props.thumbnailAltText}
						width="150"
						height="150"
						className="h-32 w-24 flex-none  md:h-44 md:w-32  "
					/>
				</div>
				<div className=" flex-1 px-3">
					<Animate>
						<h4 className=" text-primary-black  ">{props.title}</h4>
					</Animate>
					<Animate bottom>
						<div className=" text-gray-shade-1 pt-2">
							<p>{props.description}</p>
						</div>
					</Animate>
				</div>
			</div>
		</section>
	);
};
export default WhyUsCard;
