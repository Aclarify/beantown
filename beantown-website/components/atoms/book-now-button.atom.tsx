import React from 'react';
import clsx from 'clsx';
import { buttonHoverStyle } from '@lib/styles/button.style';

declare const window: any;

interface Props {
	children?: React.ReactNode;
	buttonStyle?: string;
	bgColor: string;
	fontColor: string;
}

export const activateScheduleEngine = (retry = 0) => {
	const maxRetries = 10;
	const delay = Math.min(1000, Math.pow(2, retry) * 100); // 100ms, 200ms, 400ms, ..., up to 1000ms

	if (retry > maxRetries) {
		console.error('ScheduleEngine failed to load');
		return;
	}

	if (window.ScheduleEngine) {
		window.ScheduleEngine.show();
	} else {
		// Add a delay to allow the ScheduleEngine to load
		window.setTimeout(() => activateScheduleEngine(retry + 1), delay);
	}
};

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
				className={clsx(
					' se-widget-button',
					buttonHoverStyle,
					buttonStyle,
					fontColor,
					bgColor
				)}
				onClick={() => activateScheduleEngine()}
			>
				{children}
			</button>
		</>
	);
};
export default BookNowButton;
