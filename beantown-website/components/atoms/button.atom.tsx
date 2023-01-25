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
				className={`${props.fontColor} py-2  md:py-4 md:p-6 px-4  m-4 rounded w-28 md:w-32  ${props.bgColor}`}
			>
				{props.children}
			</button>
		</>
	);
};
export default Button;
