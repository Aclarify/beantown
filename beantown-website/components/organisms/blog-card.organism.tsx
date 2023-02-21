import React from 'react';
import Image from 'next/image';

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
			<div className=" cursor-pointer flex-col justify-center border-none p-1">
				<div className="flex justify-center ">
					<Image
						src={props.thumbnailSrc}
						alt={props.thumbnailAltText}
						width="600"
						height="600"
						className="w-full rounded-3xl border-2"
					/>
				</div>
				<div>
					<p className="title-7 lg:title-5 text-primary-black py-4">
						{props.blogName}
					</p>
					<div className="para-4 lg:para-2 text-primary-shade-1 mb-4">
						<p> {props.blogDescription} </p>
					</div>
					<div className="flex justify-between align-middle lg:py-6">
						<button className="para-4 lg:para-2 text-primary-black underline ">
							{props.buttonText}
						</button>

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
