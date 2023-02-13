import useWindowDimensions from '@lib/hooks/use-window-dimensions.hook';
import { SCREEN_BREAKPOINTS } from '@typing/common/interfaces/devices.interface';
import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

interface IProps {
	children: React.ReactNode;
	heroImageURL: string;
	textContentBGImage: string;
	textContentBGImageForSmallScreen: string;
	heroImagePosition?: 'left' | 'right';
	heroImageAltText?: string;
}
const CTAWithImage: React.FC<IProps> = ({
	heroImagePosition,
	children,
	textContentBGImage,
	textContentBGImageForSmallScreen,
	heroImageURL,
}) => {
	const { width } = useWindowDimensions();
	console.log('width', width);
	const bgImage =
		width > SCREEN_BREAKPOINTS.SM
			? textContentBGImage
			: textContentBGImageForSmallScreen;
	return (
		<div
			className={clsx('flex flex-col md:flex-row', {
				'flex-row-reverse': heroImagePosition === 'right',
			})}
		>
			<div id="image-wrapper" className="w-1/2">
				<Image
					src={heroImageURL}
					// className="object-fill object-center "
					alt="Image mask"
					height={2000}
					width={2000}
					// fill={true}
					style={{
						objectFit: 'cover',
						objectPosition: 'center',
						backgroundSize: '100% auto',
					}}
					// fill={true}
				/>
			</div>
			<div
				id="content-wrapper"
				style={{
					backgroundImage: `url(${bgImage}))`,
					backgroundSize: '100% auto',
				}}
				className="flex w-1/2 items-center"
			>
				{children}
			</div>
		</div>
	);
};

export default CTAWithImage;
