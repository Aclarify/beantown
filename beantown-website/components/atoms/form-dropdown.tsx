import React from 'react';
import { FieldError } from 'react-hook-form';

interface IPorps {
	id?: string;
	name: string;
	type?: string;
	options?: Option[];
	value?: any;
	width?: string;
	customClass?: string;
	disabled?: boolean;
	error?: FieldError;
	showErrorText?: boolean;
}
interface Option {
	value?: string;
}



const FormDropdown: React.FC<IPorps> = ({
	id,
	name,
	options,
	value,
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
				className={` ${customClass}  text-gray-shade-2 invalid:text-gray-shade-2 focus:border-secondary-shade-3 mt-1.5 block rounded-lg   border p-3  py-4 pl-3 pr-10 focus:outline-none sm:text-sm`}
				disabled={disabled}
				required
				
			>
				<option disabled selected value={''} hidden>
					{'Select One'}
				</option>
				{options?.map((option: any, id: number) => (
					<option
						className="!font-neuePlak"
						value={option}
						key={`${option}_${id}`}
					>
						{option}
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
