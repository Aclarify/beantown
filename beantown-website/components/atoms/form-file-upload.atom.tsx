import React from 'react';
import { FieldError, UseFormRegister } from 'react-hook-form';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
import  { useRef, useState } from 'react';

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
	error?: FieldError;
	showErrorText?: boolean;
}
const FormUploadFile: React.FC<Props> = ({
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
}) => {
	
	const inputFile = useRef<HTMLInputElement | null>(null);
	function chooseFile() {
		inputFile.current?.click()
	}
	

	return (
		<>
			<div className=" text-placeholder-gray-shade-2 ">
				<button onClick={chooseFile}>
					<input
						id={id}
						type={type}
						value={value}
						placeholder={placeholderText}
						autoComplete={autoComplete}
						{...(register ? register(name) : {})}
						className={clsx(
							'relative w-full   rounded-lg border p-3 pl-6 focus:outline-0',
							bgColor,
							fontColor,
							placeholderColor,
							className,
							error ? 'border-service-red' : borderColor
						)}
					/>
					<input type="file" ref={inputFile} style={{ display: 'none' }} />
					<FontAwesomeIcon
						icon={faPaperclip}
						className=" absolute left-0 top-4"
					/>
				</button>
			</div>

			{/* Making the modal heigh too high */}
			{error && showErrorText && (
				<p className="text-service-red -mt-1 text-sm">{error.message}</p>
			)}
		</>
	);
};
export default FormUploadFile;

