import React from 'react';
import Image from 'next/image';
import { PortableText } from '@typing/gql/graphql';
import RichText from 'components/molecules/rich-text.molecule';

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
			<div className="flex-col justify-center ">
				<div className="">
					<Image
						src={props.thumbnailSrc}
						alt={props.thumbnailAltText}
						width="500"
						height="500"
					/>
				</div>
				<p className="py-4 title-7 md:title-5 text-primary-black">
					{props.blogName}
				</p>
				<div className="para-4 md:para-2 mb-4 text-primary-shade-1">
					<RichText value={props.blogDescription} />
				</div>
				<div className="flex justify-between align-middle">
					<button className="para-4 md:para-2 text-primary-black underline ">
						{props.buttonText}
					</button>

					<img src="images/home_page/blog-arrow.svg" />
				</div>
			</div>
		</>
	);
};
export default BlogCard;
