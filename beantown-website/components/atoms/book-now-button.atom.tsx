import React from 'react';
import clsx from 'clsx';

declare const window: any;

interface Props {
	children?: React.ReactNode;
	buttonStyle?: string;
	bgColor: string;
	fontColor: string;
}
const BookNowButton: React.FC<Props> = ({
	children,
	buttonStyle = 'button',
	bgColor,
	fontColor,
}) => {
	return (
		<>
			<button
				type="button"
				className={clsx(' se-widget-button', buttonStyle, fontColor, bgColor)}
				onClick={() => window.ScheduleEngine.show()}
			>
				{children}
			</button>
		</>
	);
};
export default BookNowButton;
