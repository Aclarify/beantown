import React from 'react';
interface Props {
	children?: React.ReactNode;
	bgColor?: string;
	fontColor?: string;
}
const Button: React.FC<Props> = (props) => {
	return (
		<>
			<button
				className={`${props.fontColor} py-1 px-4 md:py-2 md:px-6  lg:py-2 lg:px-8 w-28 md:w-32 lg:w-36  rounded  tracking-wide lg:tracking-wider para-3  ${props.bgColor}`}
			>
				{props.children}
			</button>
		</>
	);
};
export default Button;
