import React from 'react';
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
}
const FormInput: React.FC<Props> = ({
	id,
	type = 'text',
	bgColor = 'bg-secondary-shade-3',
	fontColor = 'text-primary-shade-1',
	placeholderColor = 'placeholder-gray-shade-2',
	borderColor = 'border-primary-shade-3',
	placeholderText,
}) => {
	return (
		<input
			id={id}
			type={type}
			placeholder={placeholderText}
			className={clsx(
				'w-full rounded-lg border p-3 focus:outline-none',
				bgColor,
				fontColor,
				placeholderColor,
				placeholderColor,
				borderColor
			)}
		/>
	);
};
export default FormInput;
