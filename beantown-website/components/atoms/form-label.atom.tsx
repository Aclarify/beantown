import React from 'react';
import clsx from 'clsx';

interface Props {
	inputId?: string;
	labelText: string;
	className?: string;
}
const FormLabel: React.FC<Props> = (props) => {
	return (
		<label
			htmlFor={props.inputId}
			className={clsx(props.className, {
				'text-gray-shade-1': !props.className,
			})}
		>
			{props.labelText}
		</label>
	);
};
export default FormLabel;
