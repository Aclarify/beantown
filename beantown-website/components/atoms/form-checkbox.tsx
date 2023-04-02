import React from 'react';
import clsx from 'clsx';
import { UseFormRegister } from 'react-hook-form';

interface Props {
	id?: string;
	name: string;
	defaultValue?: boolean;
	bgColor?: string;
	fontColor?: string;
	borderColor?: string;
	register?: UseFormRegister<any>;
}
const FormCheckBox: React.FC<Props> = ({
	id,
	name,
	defaultValue,
	bgColor = 'bg-secondary-shade-3',
	fontColor = 'text-primary-shade-1',
	borderColor = 'border-primary-shade-3',
	register,
}) => {
	return (
		<input
			id={id}
			defaultChecked={defaultValue}
			{...(register ? register(name) : {})}
			type="checkbox"
			className={clsx(
				"h-6 w-6 appearance-none rounded border pr-4 shadow transition-all duration-150 ease-linear after:px-1 after:py-4 after:opacity-0 after:transition-all after:content-['✔'] checked:after:opacity-100",
				bgColor,
				fontColor,
				borderColor
			)}
		/>
	);
};
export default FormCheckBox;
