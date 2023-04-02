import React, { ChangeEvent } from 'react';
import clsx from 'clsx';

interface Props {
	id?: string;
	checked?: boolean;
	bgColor?: string;
	fontColor?: string;
	borderColor?: string;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
const FormCheckBox: React.FC<Props> = ({
	id,
	onChange,
	checked,
	bgColor = 'bg-secondary-shade-3',
	fontColor = 'text-primary-shade-1',
	borderColor = 'border-primary-shade-3',
}) => {
	return (
		<input
			id={id}
			checked={checked}
			onChange={onChange}
			type="checkbox"
			className={clsx(
				"h-6 w-6 appearance-none rounded border pr-4 shadow after:py-4 after:px-1 after:opacity-0 after:transition-all after:content-['✓'] checked:after:opacity-100",
				bgColor,
				fontColor,
				borderColor
			)}
		/>
	);
};
export default FormCheckBox;
