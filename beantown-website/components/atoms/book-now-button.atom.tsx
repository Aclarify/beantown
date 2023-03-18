import React from 'react';
import clsx from 'clsx';

declare const window: any;

interface Props {
	children?: React.ReactNode;
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
					'button se-widget-button',
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
