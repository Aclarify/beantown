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
			<div className="w-[281px] rounded-3xl bg-[#FCF7F7] p-2  lg:w-[480px] lg:p-4">
				{/* <div className=" flex h-[209px] justify-center rounded-3xl bg-white px-[30px] py-[20px] md:px-[50px]  md:py-[43px] lg:h-[360px] lg:max-h-full"> */}
				<div className="flex flex-col  justify-center rounded-xl  bg-white  ">
					<div className="h-[209px] w-[265px] object-cover  pt-4 pl-4 md:ml-14 md:h-[350px] md:w-[250px] md:pt-14">
						<Image
							alt="An image for quotes in testimonial card"
							width={250}
							height={200}
							// style={{
							// 	width: '100%',
							// }}
							className="md:h-[200px] md:w-[250px]  w-[200px] h-[160px]"
							src={props.thumbnailSrc}
						/>
					</div>
				</div>
				<div className="flex flex-col items-start gap-2 px-2 py-4 pb-8 lg:px-4 lg:pt-8 ">
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
