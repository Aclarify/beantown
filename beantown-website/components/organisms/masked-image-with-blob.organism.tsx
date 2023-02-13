import Image from 'next/image';
import React from 'react';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
	imageURL: string;
	imgAltText: string;
	width: number;
	height: number;
	maskImg: any;
	bgImg: string;
}
const MaskedImageWithBackgroundVector: React.FC<IProps> = (props) => {
	return (
		<div className={`bg-[url(${props.bgImg})] bg-cover`}>
			<Image
				src={props.imageURL || ''}
				alt={props.imgAltText || ''}
				width={props.width}
				height={props.height}
				// style={{
				// 	WebkitMaskImage: "url('./images/home/why-us/why-us-blob.svg')",
				// 	WebkitMaskSize: 'cover',
				// 	maskImage: "url('./images/home/why-us/why-us-blob.svg')",
				// 	maskSize: 'cover',
				// }}
				className={`[mask-image: ${props.maskImg} mask-size: cover]`}
			/>
		</div>
	);
};

export default MaskedImageWithBackgroundVector;
