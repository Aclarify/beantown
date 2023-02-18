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
			<button
				className={`${props.fontColor} para-3 w-28 rounded py-1  px-4 tracking-wide md:w-32 md:py-2 md:px-6  lg:w-36  lg:py-2 lg:px-8 lg:tracking-wider  ${props.bgColor}`}
			>
				{props.children}
			</button>
		</>
	);
};
export default Button;
