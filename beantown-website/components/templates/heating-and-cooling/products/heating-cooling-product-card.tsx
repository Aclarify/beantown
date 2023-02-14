import Image from 'next/image';
import React from 'react';
interface Props {
	title: string;
	thumbnailSrc: string;
	thumbnailAltText: string;
    description:string;
}
const ProductCard: React.FC<Props> = (props) => {
	return (
		<>
			<div >
				<div className="mt-4 flex justify-center">
					<Image
						alt="An image for quotes in testimonial card"
						width={1000}
						height={700}
						src={props.thumbnailSrc}
					/>
				</div>
				<div className="flex flex-col items-center gap-2 pt-10 pb-6">
					<h1 className="subtitle-2 md:subtitle-4 text-primary-black">
						{props.title}
					</h1>

					<div className="para-4 md:para-3 text-primary-black pt-6  text-center ">
						<p>{props.description}</p>
					</div>
				</div>
			</div>
		</>
	);
};
export default ProductCard;
