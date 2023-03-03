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
	bgColor: string;
	isImageToBePrefetched?: boolean;
}
const CTAWithImage: React.FC<IProps> = ({
	heroImagePosition,
	children,
	textContentBGImage,
	textContentBGImageForSmallScreen,
	heroImageURL,
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
				style={{
					backgroundColor: `rgba(${bgColor},1)`,
				}}
				className={clsx('hidden lg:flex', {
					'flex-row-reverse': heroImagePosition === 'right',
				})}
			>
				<div id="hero-image-wrapper" className={clsx('z-0 w-full lg:w-1/2')}>
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
					)}
				>
					<div className="z-4 py-24 xl:py-48">{children}</div>
					{heroImagePosition === 'right' && (
						<div
							id="gradient-block"
							style={{
								position: 'absolute',
								top: 0,
								bottom: 0,
								width: '600px',
								right: '-296px',
								height: '100%',
								backgroundImage: `linear-gradient(to right, transparent, rgba(${bgColor},0.3), rgba(${bgColor},0.5), rgba(${bgColor},1),rgba(${bgColor},0.5), rgba(${bgColor},0.3),transparent)`,
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
								width: '600px',
								left: '-296px',
								height: '100%',
								backgroundImage: `linear-gradient(to left, transparent, rgba(${bgColor},0.3), rgba(${bgColor},0.5), rgba(${bgColor},1),rgba(${bgColor},0.5), rgba(${bgColor},0.3),transparent)`,

								zIndex: 1,
							}}
						></div>
					)}
				</div>
			</div>

			<div
				id="wrapper-mobile"
				className="flex flex-col lg:hidden"
				style={{
					backgroundColor: `rgba(${bgColor},1)`,
				}}
			>
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
						'relative flex w-full items-center justify-center bg-gradient-to-t'
					)}
				>
					<div className="z-4 px-16 pt-[2em] pb-[4em] sm:px-48 md:py-48">
						{children}
					</div>
					<div
						id="gradient-block-mobile"
						style={{
							position: 'absolute',
							left: 0,
							top: '-122px',
							height: '363px',
							bottom: 0,
							width: '100%',
							backgroundImage: `linear-gradient(to top, rgba(${bgColor},0.5), rgba(${bgColor},0.3), rgba(${bgColor},1),transparent)`,
							zIndex: 1,
						}}
					></div>
				</div>
			</div>
		</>
	);
};

export default CTAWithImage;
