import CMSImageWrapper from 'components/molecules/cms-image-wrapper.molecule';
import React from 'react';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
	image: any;
	imgAltText: string;
	maskImg: string;
	bgImg: string;
}
const MaskedImageWithBackground: React.FC<IProps> = (props) => {
	return (
		<div
			style={{
				backgroundImage: `url(${props.bgImg})`,
				backgroundSize: 'contain',
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center',
			}}
			className="relative h-full w-full"
		>
			<CMSImageWrapper
				image={props.image || null}
				altText={props.imgAltText || ''}
				style={{
					width: '100%',
					WebkitMaskImage: `url(${props.maskImg})`,
					WebkitMaskSize: 'contain',
					WebkitMaskRepeat: 'no-repeat',
					WebkitMaskPosition: 'center',
					maskImage: `url(${props.maskImg})`,
					maskSize: 'contain',
					maskRepeat: 'no-repeat',
					maskPosition: 'center',
				}}
			/>
		</div>
	);
};

export default MaskedImageWithBackground;
