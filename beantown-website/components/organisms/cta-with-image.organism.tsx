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
				<div id="hero-image-wrapper" className="z-0 w-full lg:w-1/2">
					<Image
						src={heroImageURL}
						alt="Image mask"
						height={2000}
						width={2000}
						style={{
							width: '100%',
							height: 'auto',
						}}
					/>
				</div>
				<div
					id="content-wrapper"
					style={{
						backgroundImage: `url(${bgImage})`,
						backgroundColor: gradientToColor,
						position: 'relative',
					}}
					className={clsx(
						`relative flex bg-[${gradientToColor}] w-full items-center justify-center py-4 lg:w-1/2`,
						heroImagePosition === 'right' &&
							`after:from-[${gradientToColor}] after:absolute after:top-0 after:bottom-0 after:right-[-121px] after:z-[1] after:w-[170px] after:bg-gradient-to-r`,
						heroImagePosition === 'left' &&
							`before:from-[${gradientToColor}] before:absolute before:left-[-181px] before:top-0 before:bottom-0 before:z-[1] before:w-[182px] before:bg-gradient-to-l`
					)}
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
					className="relative flex h-[40vh] w-full items-center justify-center"
				>
					{children}
				</div>
			</div>
		</>
	);
};

export default CTAWithImage;
