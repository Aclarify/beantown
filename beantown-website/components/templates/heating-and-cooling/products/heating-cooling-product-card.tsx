import React from 'react';

import { Image as CMSImage } from '@typing/gql/graphql';
import CMSImageWrapper from 'components/molecules/cms-image-wrapper.molecule';
interface Props {
	title: string;
	thumbnailAltText: string;
	description: string;
	image: CMSImage | null;
}
const ProductCard: React.FC<Props> = (props) => {
	return (
		<>
			<div className="w-[281px] rounded-3xl bg-[#FCF7F7] p-2  lg:w-[480px] lg:p-4">
				<div className=" flex h-[209px] justify-center rounded-3xl bg-white px-[30px] py-[20px] md:px-[50px]  md:py-[43px] lg:h-[360px] lg:max-h-full">
					<CMSImageWrapper image={props.image} altText="A product image" />
				</div>
				<div className="flex flex-col items-start gap-2 px-2 py-4 pb-8 lg:px-4 lg:pt-8">
					<h1 className="title-6 md:title-3 text-primary-black pb-2 lg:pb-4">
						{props.title}
					</h1>

					<div className="para-4 md:para-3 text-gray-shade-1  text-left  ">
						<p>{props.description}</p>
					</div>
				</div>
			</div>
		</>
	);
};
export default ProductCard;
