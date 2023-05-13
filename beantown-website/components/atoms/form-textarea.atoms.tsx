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
	error?: any;
	showErrorText?: boolean;
	onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
const FormTextArea: React.FC<Props> = ({
	id,
	name,
	type = 'text',
	bgColor = 'bg-secondary-shade-3',
	fontColor = 'text-primary-shade-1',
	placeholderColor = 'placeholder-gray-shade-2',
	placeholderText,
	autoComplete,
	value,
	register,
	error,
	showErrorText = true,
	onChange,
}) => {
	return (
		<>
			<textarea
				id={id}
				value={value}
				placeholder={placeholderText}
				autoComplete={autoComplete}
				{...(register ? register(name) : {})}
				onChange={onChange}
				className={clsx(
					'h-[200px] w-full rounded-lg border p-3 placeholder:tracking-wide focus:outline-none',
					bgColor,
					fontColor,
					placeholderColor,
					error ? 'border-service-red' : 'placeholder-gray-shade-2'
				)}
				maxLength={200}
			/>

			{error && showErrorText && (
				<p className="text-service-red -mt-1 text-sm">{error.message}</p>
			)}
		</>
	);
};
export default FormTextArea;
