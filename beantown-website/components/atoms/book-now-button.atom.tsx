import React from 'react';
import clsx from 'clsx';

declare const window: any;

interface Props {
	children?: React.ReactNode;
	buttonStyle?: string;
	bgColor?: string;
	fontColor?: string;
	className?: string;
}
const BookNowButton: React.FC<Props> = (props) => {
	return (
		<>
			<button
				type="button"
				className={clsx(
					' se-widget-button',
					props.buttonStyle,
					props.fontColor,
					props.bgColor
				)}
				onClick={() => window.ScheduleEngine.show()}
			>
				{props.children}
			</button>
		</>
	);
};
export default BookNowButton;
