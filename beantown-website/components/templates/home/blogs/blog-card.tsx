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
			<div className="flex-col justify-center cursor-pointer">
				<div>
					<Image
						src={props.thumbnailSrc}
						alt={props.thumbnailAltText}
						width="600"
						height="600"
						className="  border-2 rounded-3xl"
					/>
				</div>
				<p className="py-4 title-7 lg:title-5 text-primary-black">
					{props.blogName}
				</p>
				<div className="para-4 lg:para-2 mb-4 text-primary-shade-1">
					<RichText value={props.blogDescription} />
				</div>
				<div className="lg:py-6 flex justify-between align-middle">
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
		</>
	);
};
export default BlogCard;
