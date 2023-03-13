import Image from 'next/image';
import React from 'react';

interface IProps {
	waveURL: string;
	className?: string;
}
const WaveWrapper: React.FC<IProps> = (props) => {
	return (
		<Image
			alt="Wave"
			style={{
				width: '100%',
				height: 'auto',
			}}
			src={props.waveURL}
		></Image>
	);
};

export default WaveWrapper;
