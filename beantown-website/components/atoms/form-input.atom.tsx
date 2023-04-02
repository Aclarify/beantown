import React, { ChangeEvent } from 'react';
import clsx from 'clsx';

interface Props {
	id?: string;
	type?: string;
	placeholder?: string;
	bgColor?: string;
	fontColor?: string;
	placeholderColor?: string;
	borderColor?: string;
	placeholderText?: string;
	value?: string;
	autoComplete?: string;
	checked?: boolean;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
const FormInput: React.FC<Props> = ({
	id,
	type = 'text',
	bgColor = 'bg-secondary-shade-3',
	fontColor = 'text-primary-shade-1',
	placeholderColor = 'placeholder-gray-shade-2',
	borderColor = 'border-primary-shade-3',
	placeholderText,
	autoComplete,
	value,
	onChange,
	checked,
}) => {
	return (
		<input
			id={id}
			type={type}
			value={value}
			placeholder={placeholderText}
			onChange={onChange}
			autoComplete={autoComplete}
			checked={checked}
			className={clsx(
				'w-full rounded-lg border p-3 focus:outline-none',
				bgColor,
				fontColor,
				placeholderColor,
				borderColor
			)}
		/>
	);
};
export default FormInput;
