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
				className={` ${props.fontColor} py-1  md:py-2 md:px-6 px-4  m-2 rounded  ${props.bgColor}`}
			>
				{props.children}
			</button>
		</>
	);
};
export default Button;
