import React from 'react';
import Fade from 'react-reveal/Fade';

interface Props {
	children: React.ReactNode;
	bottom?: boolean;
	left?:boolean;
	cascade?: boolean;
}

const Animate: React.FC<Props> = (props) => {
	return (
		<Fade bottom={props.bottom} left={props.left} cascade={props.cascade}>
			{props.children}
		</Fade>
	);
};

export default Animate;
