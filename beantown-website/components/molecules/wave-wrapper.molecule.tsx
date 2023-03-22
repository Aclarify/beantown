import Image from 'next/image';
import React from 'react';

interface IProps {
	waveURL: string;
	shouldBePrefetched?: boolean;
	className?: string;
}
const WaveWrapper: React.FC<IProps> = ({
	waveURL,
	shouldBePrefetched = false,
}) => {
	return (
		<Image
			alt="Wave"
			style={{
				width: '100%',
				height: 'auto',
			}}
			priority={shouldBePrefetched}
			src={waveURL}
		></Image>
	);
};

export default WaveWrapper;
