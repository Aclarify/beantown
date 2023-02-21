import Image from 'next/image';
import React from 'react';
interface Props {
	title: string;
	thumbnailSrc: string;
	thumbnailAltText: string;
	description: string;
}
const ProductCard: React.FC<Props> = (props) => {
	return (
		<>
			<div className="mt-10 h-[500px] rounded-3xl bg-[#FCF7F7] p-2 lg:h-[620px] lg:p-4">
				<div className=" flex h-2/3 justify-center rounded-3xl bg-white px-[30px]  py-[20px] md:px-[50px] md:py-[43px]">
					<Image
						alt="An image for quotes in testimonial card"
						width={1000}
						height={700}
						src={props.thumbnailSrc}
					/>
				</div>
				<div className="flex flex-col items-start gap-2 px-2 pt-4 pb-8 lg:px-4 lg:pt-8">
					<h1 className="title-6 md:title-3 text-primary-black pb-2 lg:pb-4">
						{props.title}
					</h1>

					<div className="para-4 md:para-3 text-gray-shade-1  mx-2 text-left  ">
						<p>{props.description}</p>
					</div>
				</div>
			</div>
		</>
	);
};
export default ProductCard;
