import React from 'react';
import clsx from 'clsx';

interface Props {
	children?: React.ReactNode;
	bgColor?: string;
	fontColor?: string;
	className?: string;
}
const Button: React.FC<Props> = (props) => {
	return (
		<>
			<button className={`${props.fontColor} button  ${props.bgColor}`}>
				{props.children}
			</button>
		</>
	);
};
export default Button;
