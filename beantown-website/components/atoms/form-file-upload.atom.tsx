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
	const [fileName, setFileName] = useState('Choose a file');
	function chooseFile() {		
	  	 inputFile.current?.click()
		 
	}
	const handleFileChange = (event:any) => {

		const fileObj = event.target.files && event.target.files[0];
			if (!fileObj) {
			return;
			}
			event.target.value = null;
			setFileName(fileObj.name);	 	
			alert(fileObj.name);
			
	}

	return (
		<>
			<div className=" text-placeholder-gray-shade-2 ">
				<button onClick={chooseFile} className="w-full md:w-1/2 ">
					<input
						id={id}
						type={type}
						value={value}
						placeholder={fileName}
						autoComplete={autoComplete}
						{...(register ? register(name) : {})}
						className={clsx(
							'relative w-full   rounded-lg border p-3 pl-6 pr-2 focus:outline-0',
							bgColor,
							fontColor,
							className,
							error ? 'border-service-red' : borderColor
						)}
					/>
					<input
						id="resume-upload"
						type="file"
						ref={inputFile}
						onChange={handleFileChange}
						style={{ display: 'none' }}
					/>
					<FontAwesomeIcon
						icon={faPaperclip}
						className=" text-gray-shade-2 absolute left-2 top-4  "
					/>
				</button>
			</div>

			{error && showErrorText && (
				<p className="text-service-red -mt-1 text-sm">{error.message}</p>
			)}
		</>
	);
};
export default FormUploadFile;

