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
			<div className="mt-10 rounded-3xl bg-[#FCF7F7] p-2 lg:p-4">
				<div className=" flex justify-center rounded-3xl bg-white px-[30px] py-[20px]  md:px-[50px] md:py-[43px]">
					<Image
						alt="An image for quotes in testimonial card"
						width={1000}
						height={700}
						src={props.thumbnailSrc}
					/>
				</div>
				<div className="flex flex-col items-start gap-2 px-4 pt-10 pb-6 lg:px-6">
					<h1 className="title-6 md:title-3 text-primary-black">
						{props.title}
					</h1>

					<div className="para-4 md:para-3 text-primary-black pt-2 text-left  lg:pt-6 ">
						<p>{props.description}</p>
					</div>
				</div>
			</div>
		</>
	);
};
export default ProductCard;
