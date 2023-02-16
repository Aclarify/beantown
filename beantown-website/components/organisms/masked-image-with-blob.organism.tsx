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
			style={{
				backgroundImage: `url(${props.bgImg})`,
				backgroundSize: 'contain',
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'inherit',
			}}
		>
			<Image
				src={props.imageURL || ''}
				alt={props.imgAltText || ''}
				width={props.width}
				height={props.height}
				style={{
					WebkitMaskImage: `url(${props.maskImg})`,
					WebkitMaskSize: 'contain',
					WebkitMaskRepeat: 'no-repeat',
					maskImage: `url(${props.maskImg})`,
					maskSize: 'contain',
					maskRepeat: 'no-repeat',
				}}
			/>
		</div>
	);
};

export default MaskedImageWithBackgroundVector;
