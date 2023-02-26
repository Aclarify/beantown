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
	bgColor?: string;
	isImageToBePrefetched?: boolean;
}
const CTAWithImage: React.FC<IProps> = ({
	heroImagePosition,
	children,
	textContentBGImage,
	textContentBGImageForSmallScreen,
	heroImageURL,
	gradientFromColor,
	gradientToColor,
	bgColor,
	isImageToBePrefetched = false,
}) => {
	const { width } = useWindowDimensions();
	const bgImage =
		width > SCREEN_BREAKPOINTS.LG
			? textContentBGImage
			: textContentBGImageForSmallScreen;
	return (
		<>
			<div
				className={clsx(
					'hidden lg:flex',
					{
						'flex-row-reverse': heroImagePosition === 'right',
					},
					gradientToColor
				)}
			>
				<div
					id="hero-image-wrapper"
					className={clsx(
						'z-0 w-full lg:w-1/2',
						heroImagePosition === 'left' && '-mr-24',
						heroImagePosition === 'right' && '-ml-24'
					)}
				>
					<Image
						src={heroImageURL}
						alt="Image mask"
						height={2000}
						width={2000}
						priority={isImageToBePrefetched}
						style={{
							width: '100%',
							height: '100%',
							objectFit: 'cover',
						}}
					/>
				</div>
				<div
					id="text-content-wrapper"
					style={{
						backgroundImage: `url(${bgImage})`,
						backgroundPosition: 'center',
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',
					}}
					className={clsx(
						`relative flex w-full items-center justify-center py-4 lg:w-[60%]`
						// heroImagePosition === 'left' &&
						// 	`before:from-[${gradientToColor}] before:absolute before:left-[-181px] before:top-0 before:bottom-0 before:z-[1] before:w-[182px] before:bg-gradient-to-l`
					)}
				>
					{/* linear-gradient(to right, rgb(188 59 57 /50%), rgb(188 59 57 /30%), rgb(188 59 57),transparent); */}
					<div className="z-4">{children}</div>
					{heroImagePosition === 'right' && (
						<div
							id="gradient-block"
							style={{
								position: 'absolute',
								top: 0,
								bottom: 0,
								width: '592px',
								right: '-107px',
								height: '100%',
								backgroundImage: `linear-gradient(to right, rgba(${bgColor},0.5), rgba(${bgColor},0.3), rgba(${bgColor},1),transparent)`,
								zIndex: 1,
							}}
						></div>
					)}
					{heroImagePosition === 'left' && (
						<div
							id="gradient-block"
							style={{
								position: 'absolute',
								top: 0,
								bottom: 0,
								width: '592px',
								left: '-107px',
								height: '100%',
								backgroundImage: `linear-gradient(to left, rgba(${bgColor},0.5), rgba(${bgColor},0.3), rgba(${bgColor},1),transparent)`,
								zIndex: 1,
							}}
						></div>
					)}
				</div>
			</div>

			<div id="wrapper-mobile" className="flex flex-col lg:hidden">
				<div id="hero-image-wrapper" className="w-full">
					<Image
						src={heroImageURL}
						alt="Image mask"
						height={2000}
						width={2000}
						priority={isImageToBePrefetched}
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
						backgroundPosition: 'center',
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',
					}}
					className={clsx(
						'relative flex w-full items-center justify-center bg-gradient-to-t',
						gradientFromColor,
						gradientToColor,
						`before:absolute before:left-0 before:top-[-160px] before:bottom-0 before:z-[1] before:h-[163px] before:w-full before:bg-gradient-to-t`
					)}
				>
					{children}
				</div>
			</div>
		</>
	);
};

export default CTAWithImage;
