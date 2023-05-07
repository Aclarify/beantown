import React from 'react';
import { FieldError, UseFormRegister } from 'react-hook-form';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { useRef, useState } from 'react';

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
	register: UseFormRegister<any>;
	error?: FieldError;
	showErrorText?: boolean;
	onFileChange: (file: File) => void;
}
const FormUploadFile: React.FC<Props> = ({
	id,
	name,
	bgColor = 'bg-secondary-shade-3',
	fontColor = 'text-primary-shade-1',
	borderColor = 'border-primary-shade-3',
	className,
	autoComplete,
	register,
	error,
	showErrorText = true,
	onFileChange,
}) => {
	const inputFile = useRef<HTMLInputElement | null>(null);
	const [file, setFile] = useState<File | null>(null);
	function chooseFile() {
		inputFile.current?.click();
	}
	const handleFileChange = (event: any) => {
		const fileObj = event.target.files && event.target.files[0];
		if (!fileObj) {
			return;
		}
		event.target.value = null;
		setFile(fileObj);
		onFileChange(fileObj);
	};

	return (
		<>
			<div className=" text-gray-shade-2 mb-2 ">
				<button onClick={chooseFile} className="w-full md:w-1/2 ">
					<input
						id={id}
						type={'text'}
						value={file ? file.name : ''}
						placeholder={'Upload your resume'}
						autoComplete={autoComplete}
						{...(register ? register(name) : {})}
						className={clsx(
							'relative w-full rounded-lg   border p-2 px-6 tracking-wide focus:outline-0',
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
						className=" text-gray-shade-2 absolute left-1 top-3   "
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
