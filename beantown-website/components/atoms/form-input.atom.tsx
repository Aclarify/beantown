import React from 'react';
import { UseFormRegister } from 'react-hook-form';
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
	className?: string;
	placeholderText?: string;
	value?: string;
	autoComplete?: string;
	register?: UseFormRegister<any>;
	error?: any;
	showErrorText?: boolean;
	onChange?: (
		event: React.ChangeEvent<HTMLInputElement> & { key: string }
	) => void;
	onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}
const FormInput: React.FC<Props> = ({
	id,
	name,
	type = 'text',
	bgColor = 'bg-secondary-shade-3',
	fontColor = 'text-primary-shade-1',
	placeholderColor = 'placeholder-gray-shade-2',
	borderColor = 'border-primary-shade-3',
	className,
	placeholderText,
	autoComplete,
	value,
	register,
	error,
	showErrorText = true,
	onChange,
	onKeyDown,
}) => {
	return (
		<>
			<input
				id={id}
				type={type}
				value={value}
				placeholder={placeholderText}
				autoComplete={autoComplete}
				{...(register ? register(name) : {})}
				onChange={onChange}
				onKeyDown={onKeyDown}
				className={clsx(
					'w-full rounded-lg border p-3 placeholder:tracking-wide focus:outline-none',
					bgColor,
					fontColor,
					placeholderColor,
					className,
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
export default FormInput;
