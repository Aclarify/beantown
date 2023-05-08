import Image from 'next/image';
import React from 'react';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
	imageURL: string;
	imgAltText: string;
	width: number;
	height: number;
	maskImg: string;
	maskPosition?: string;
	bgImg: string;
}
const MaskedImageWithBackgroundVector: React.FC<IProps> = (props) => {
	return (
		<div
			style={{
				backgroundImage: `url(${props.bgImg})`,
				backgroundSize: 'contain',
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center',
			}}
		>
			<Image
				src={props.imageURL || ''}
				alt={props.imgAltText || ''}
				width={props.width}
				height={props.height}
				style={{
					width: '100%',
					WebkitMaskImage: `url(${props.maskImg})`,
					WebkitMaskSize: 'contain',
					WebkitMaskRepeat: 'no-repeat',
					WebkitMaskPosition: `${props.maskPosition ?? 'center'}`,
					maskImage: `url(${props.maskImg})`,
					maskSize: 'contain',
					maskRepeat: 'no-repeat',
					maskPosition: `${props.maskPosition ?? 'center'}`,
				}}
			/>
		</div>
	);
};

export default MaskedImageWithBackgroundVector;
