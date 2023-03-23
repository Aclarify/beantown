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
	const onBtnClick = () => {
		if (window.ScheduleEngine) {
			window.ScheduleEngine.show();
		} else {
			// Add a delay to allow the ScheduleEngine to load
			window.setTimeout(onBtnClick, 100);
		}
	};

	return (
		<>
			<button
				type="button"
				className={clsx(' se-widget-button', buttonStyle, fontColor, bgColor)}
				onClick={onBtnClick}
			>
				{children}
			</button>
		</>
	);
};
export default BookNowButton;
