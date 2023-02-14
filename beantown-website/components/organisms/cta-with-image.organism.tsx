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
	gradientFromColor: string;
	gradientToColor: string;
	gradientFromColorForMobile: string;
	gradientToColorForMobile: string;
}
const CTAWithImage: React.FC<IProps> = ({
	heroImagePosition,
	children,
	textContentBGImage,
	textContentBGImageForSmallScreen,
	heroImageURL,
	gradientFromColor,
	gradientToColor,
	gradientFromColorForMobile,
	gradientToColorForMobile,
}) => {
	const { width } = useWindowDimensions();
	const bgImage =
		width > SCREEN_BREAKPOINTS.MD
			? textContentBGImage
			: textContentBGImageForSmallScreen;
	return (
		<>
			<div
				className={clsx('hidden md:flex', {
					'flex-row-reverse': heroImagePosition === 'right',
				})}
			>
				<div
					id="hero-image-wrapper"
					// Below for pseudo with image approach
					// className="after:width-full after:height-full after:from-secondary-shade-2 relative w-full after:absolute after:top-0 after:left-0 after:z-10 after:bg-gradient-to-r after:content-[''] lg:w-2/3"
					className="w-full lg:w-2/3"
					style={{
						backgroundImage: `linear-gradient(${
							heroImagePosition === 'right' ? 'to right' : 'to left'
						}, ${gradientToColor}, transparent 20%),url(${heroImageURL})`,
						backgroundSize: '100% 100%',
						backgroundRepeat: 'no-repeat',
					}}
				>
					{/* TODO Need for pseudo */}
					{/* <Image
					src={heroImageURL}
					alt="Image mask"
					height={2000}
					width={2000}
					style={{
						width: '100%',
					}}
				/> */}
				</div>
				<div
					id="content-wrapper"
					style={{
						backgroundImage: `url(${bgImage}), linear-gradient(${
							heroImagePosition === 'right' ? 'to right' : 'to left'
						}, ${gradientFromColor}, ${gradientToColor})`,
						backgroundSize: '100% auto',
						backgroundPosition: 'center',
					}}
					className="flex w-full items-center justify-center py-4 lg:w-1/2"
				>
					{children}
				</div>
			</div>

			<div className="flex flex-col md:hidden">
				<div
					id="hero-image-wrapper"
					className="h-[40vh] w-full"
					style={{
						backgroundImage: `linear-gradient(transparent 20%, ${gradientFromColorForMobile}),url(${heroImageURL})`,
						backgroundSize: '100% 100%',
						backgroundRepeat: 'no-repeat',
					}}
				></div>
				<div
					id="content-wrapper"
					style={{
						backgroundImage: `url(${bgImage}), linear-gradient(${gradientFromColorForMobile}, ${gradientToColorForMobile})`,
						backgroundPosition: 'center',
						backgroundRepeat: 'no-repeat',
						backgroundSize: '100% 100%',
					}}
					className="flex h-[40vh] w-full items-center justify-center"
				>
					{children}
				</div>
			</div>
		</>
	);
};

export default CTAWithImage;
