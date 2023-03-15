import React from 'react';
import Image from 'next/image';
import { showUnderConstructionMsg } from 'utils/helper';
import Animate from 'components/molecules/animate.molecule';

interface Props {
	blogName: string;
	buttonText: string;
	blogDescription: string;
	thumbnailSrc: string;
	thumbnailAltText: string;
}
const BlogCard: React.FC<Props> = (props) => {
	return (
		<>
			<div
				className=" cursor-pointer flex-col justify-center border-none p-1"
				onClick={showUnderConstructionMsg}
			>
				<div className="flex transform justify-center transition duration-500 hover:scale-105 ">
					<Image
						src={props.thumbnailSrc}
						alt={props.thumbnailAltText}
						width="600"
						height="600"
						className="w-full rounded-3xl border-2"
					/>
				</div>

				<div>
					<Animate>
						<h5 className=" text-primary-black py-4">{props.blogName}</h5>
					</Animate>
					<Animate bottom>
						<div className=" text-primary-shade-1 mb-4">
							<p> {props.blogDescription} </p>
						</div>
					</Animate>

					<div className="mt-4 flex justify-between align-middle lg:pb-2 ">
						<Animate>
							<button className="para text-primary-black underline ">
								{props.buttonText}
							</button>
						</Animate>
						<Image
							src="/images/home/blog-arrow.svg"
							width="75"
							height="20"
							alt="Blog Arrow"
						/>
					</div>
				</div>
			</div>
		</>
	);
};
export default BlogCard;
