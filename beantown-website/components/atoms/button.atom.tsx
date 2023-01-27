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
				className={`${props.fontColor} py-2 px-6 my-6 w-32 md:w-36 rounded-md  tracking-wide sm:tracking-wider para-3  ${props.bgColor}`}
			>
				{props.children}
			</button>
		</>
	);
};
export default Button;
