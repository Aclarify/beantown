import React from 'react';
import Image from 'next/image';
import Animate from 'components/molecules/animate.molecule';
import Link from 'next/link';
interface Props {
	blogName: string;
	buttonText: string;
	blogSlug: string;
	blogDescription: string;
	thumbnailSrc: string;
	thumbnailAltText: string;
}
const BlogCard: React.FC<Props> = (props) => {
	return (
		<Link href={`/blog/${props.blogSlug}`}>
			<div className=" cursor-pointer flex-col justify-center border-none p-1">
				<div className="flex transform justify-center transition duration-500 hover:scale-105 ">
					<Image
						src={props.thumbnailSrc}
						alt={props.thumbnailAltText}
						width="600"
						height="600"
						className="h-48 w-full rounded-3xl object-cover md:h-60 xl:h-80"
					/>
				</div>

				<div>
					<Animate>
						<div className="mb-4 h-16 overflow-hidden md:h-24 lg:h-28">
							<h5 className="text-primary-black py-4">{props.blogName}</h5>
						</div>
					</Animate>
					<Animate>
						<div className="text-primary-shade-1 mb-4">
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
		</Link>
	);
};
export default BlogCard;
