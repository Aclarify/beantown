import React from 'react';
import { FieldError, UseFormRegister } from 'react-hook-form';
import clsx from 'clsx';

interface Props {
	id?: string;
	name: string;
	type?: string;
	placeholder?: string;
	bgColor?: string;
	fontColor?: string;
	placeholderColor?: string;
	borderColor?: string;
	placeholderText?: string;
	value?: string;
	autoComplete?: string;
	register?: UseFormRegister<any>;
	error?: FieldError;
	showErrorText?: boolean;
}
const FormTextArea: React.FC<Props> = ({
	id,
	name,
	type = 'text',
	bgColor = 'bg-secondary-shade-3',
	fontColor = 'text-primary-shade-1',
	placeholderColor = 'placeholder-gray-shade-2',
	borderColor = 'border-primary-shade-3',
	placeholderText,
	autoComplete,
	value,
	register,
	error,
	showErrorText = true,
}) => {
	return (
		<>
			<textarea
				id={id}				
				value={value}
				placeholder={placeholderText}
				autoComplete={autoComplete}
				{...(register ? register(name) : {})}
				className={clsx(
					'w-full h-[200px]   rounded-lg border p-3 focus:outline-none',
					bgColor,
					fontColor,
					placeholderColor,
					error ? 'border-service-red' : borderColor
				)}
			/>
			{/* Making the modal heigh too high */}
			{error && showErrorText && (
				<p className="text-service-red -mt-1 text-sm">{error.message}</p>
			)}
		</>
	);
};
export default FormTextArea;
