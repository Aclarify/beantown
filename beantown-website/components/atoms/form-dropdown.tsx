import React from 'react';
import { FieldError } from 'react-hook-form';

interface IPorps {
	id?: string;
	name: string;
	type?: string;
	options?: Array<{ label: string; value: string }>;
	value?: any;
	width?: string;
	customClass?: string;
	disabled?: boolean;
	error?: FieldError;
	showErrorText?: boolean;
}

const FormDropdown: React.FC<IPorps> = ({
	id,
	name,
	options,
	customClass = '',
	disabled = false,
	error,
	showErrorText = true,
}) => {
	return (
		<>
			<select
				id={id}
				name={name}
				className={` ${customClass}  text-gray-shade-2 invalid:text-gray-shade-2 focus:border-gray-shade-3  light:bg-white mt-1.5 block  rounded-lg border bg-white  px-3 py-4   tracking-wide focus:outline-none`}
				disabled={disabled}
				required
			>
				<option disabled selected value={''} hidden className="!font-neuePlak ">
					{'Select One'}
				</option>
				{options?.map((option: any, id: number) => (
					<option
						className="!font-neuePlak "
						value={option.value}
						key={`${option}_${id}`}
						style={{ color: 'white', fontFamily: 'neuePlak' }}
					>
						{option.label}
					</option>
				))}
			</select>
			{error && showErrorText && (
				<p className="text-service-red -mt-1 text-sm">{error.message}</p>
			)}
		</>
	);
};

export default FormDropdown;
