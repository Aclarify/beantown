import React from 'react';
import StaticImageWrapper from './static-image-wrapper.molecule';

interface IProps {
	src: any;
}
const StaticImageWaveWrapper: React.FC<IProps> = (props) => {
	return <StaticImageWrapper src={props.src} altText="Wave" />;
};

export default StaticImageWaveWrapper;
