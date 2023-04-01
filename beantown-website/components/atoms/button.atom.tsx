import React from 'react';
import clsx from 'clsx';
import { buttonHoverStyle } from '@lib/styles/button.style';

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
				className={clsx(
					`${props.fontColor} button  ${props.bgColor}`,
					buttonHoverStyle
				)}
			>
				{props.children}
			</button>
		</>
	);
};
export default Button;
