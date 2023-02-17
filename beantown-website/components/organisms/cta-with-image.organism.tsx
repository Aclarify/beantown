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
}
const CTAWithImage: React.FC<IProps> = ({
	heroImagePosition,
	children,
	textContentBGImage,
	textContentBGImageForSmallScreen,
	heroImageURL,
	gradientFromColor,
	gradientToColor,
}) => {
	const { width } = useWindowDimensions();
	const bgImage =
		width > SCREEN_BREAKPOINTS.LG
			? textContentBGImage
			: textContentBGImageForSmallScreen;
	return (
		<>
			<div
				className={clsx('hidden lg:flex', {
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
							height: '100%',
							objectFit: 'cover',
						}}
					/>
				</div>
				<div
					id="content-wrapper"
					style={{
						backgroundImage: `url(${bgImage})`,
						position: 'relative',
					}}
					className={clsx(
						`relative flex w-full items-center justify-center py-4 lg:w-1/2`,
						gradientFromColor,
						gradientToColor,
						heroImagePosition === 'right' &&
							`after:from-[${gradientToColor}] after:absolute after:top-0 after:bottom-0 after:right-[-121px] after:z-[1] after:w-[126px] after:bg-gradient-to-r`,
						heroImagePosition === 'left' &&
							`before:from-[${gradientToColor}] before:absolute before:left-[-181px] before:top-0 before:bottom-0 before:z-[1] before:w-[182px] before:bg-gradient-to-l`
					)}
				>
					{children}
				</div>
			</div>

			<div id="wrapper-mobile" className="flex flex-col lg:hidden">
				<div id="hero-image-wrapper" className="w-full">
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
						backgroundPosition: 'center',
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
