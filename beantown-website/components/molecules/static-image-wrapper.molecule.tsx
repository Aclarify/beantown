import React from 'react';
import Image from 'next/image';

interface Props {
	src: any;
	altText?: string;
}
const StaticImageWrapper: React.FC<Props> = (props) => {
	return (
		<Image
			alt={props.altText || 'Vector Image'}
			style={{
				width: '100%',
			}}
			src={props.src}
		/>
	);
};

export default StaticImageWrapper;
