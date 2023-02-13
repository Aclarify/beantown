import Image from 'next/image';
import React from 'react';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
	imageURL: string;
	imgAltText: string;
	width: number;
	height: number;
	maskImg: string;
	bgImg: string;
}
const MaskedImageWithBackgroundVector: React.FC<IProps> = (props) => {
	return (
		<div
			className={'bg-cover'}
			style={{
				backgroundImage: `url(${props.bgImg})`,
			}}
		>
			<Image
				src={props.imageURL || ''}
				alt={props.imgAltText || ''}
				width={props.width}
				height={props.height}
				style={{
					WebkitMaskImage: `url(${props.maskImg})`,
					WebkitMaskSize: 'cover',
					maskImage: `url(${props.maskImg})`,
					maskSize: 'cover',
				}}
			/>
		</div>
	);
};

export default MaskedImageWithBackgroundVector;
