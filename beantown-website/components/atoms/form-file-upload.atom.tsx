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
	bgColor?: string;
	fontColor?: string;
	borderColor?: string;
	className?: string;
	placeholderText?: string;
	value?: File | null;
	error?: any;
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
	error,
	placeholderText = 'Choose a File',
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
				<div className="w-full md:w-1/2 ">
					<button
						type="button"
						id={id}
						onClick={chooseFile}
						className={clsx(
							'relative w-full rounded-lg   border p-2 px-6 text-left tracking-wide focus:outline-0',
							bgColor,
							fontColor,
							className,
							error ? 'border-service-red' : borderColor
						)}
					>
						{file ? file.name : placeholderText}
					</button>
					<input
						id="resume-upload"
						type="file"
						ref={inputFile}
						onChange={handleFileChange}
						className="hidden"
					/>
					<FontAwesomeIcon
						icon={faPaperclip}
						className=" text-gray-shade-2 absolute left-1 top-3   "
					/>
				</div>
			</div>

			{error && showErrorText && (
				<p className="text-service-red -mt-1 text-sm">{error.message}</p>
			)}
		</>
	);
};
export default FormUploadFile;
