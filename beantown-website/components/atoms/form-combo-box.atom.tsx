import React, { useState, useEffect, useRef } from 'react';
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid';
import { Combobox } from '@headlessui/react';
import { FieldError, UseFormRegister } from 'react-hook-form';
import clsx from 'clsx';

interface Props {
	id?: string;
	name: string;
	selectedValue: string;
	options: Array<{ label: string; value: string }>;
	onChange?: (event: React.ChangeEvent<any>) => void;
	register?: UseFormRegister<any>;
	error?: FieldError;
	showErrorText?: boolean;
}

const ComboBox: React.FC<Props> = ({
	id,
	name,
	selectedValue,
	options,
	onChange,
	register,
	error,
	showErrorText = true,
}) => {
	const [query, setQuery] = useState('');
	const [showOptions, setShowOptions] = useState(false);
	const wrapperRef = useRef(null);

	const selectedOption = options.find(
		(option) => option.value === selectedValue
	);
	const filteredOption =
		query === ''
			? options
			: options.filter((option) => {
					return option.label.toLowerCase().includes(query.toLowerCase());
			  });

	/**
	 * Hook that alerts clicks outside of the passed ref
	 */
	const useOutsideAlerter = (ref: any) => {
		useEffect(() => {
			/**
			 * Alert if clicked on outside of element
			 */
			function handleClickOutside(event: any) {
				if (ref.current && !ref.current.contains(event.target)) {
					// alert('You clicked outside of me!');
					setShowOptions(false);
				}
			}
			// Bind the event listener
			document.addEventListener('mousedown', handleClickOutside);
			return () => {
				// Unbind the event listener on clean up
				document.removeEventListener('mousedown', handleClickOutside);
			};
		}, [ref]);
	};

	useOutsideAlerter(wrapperRef);
	return (
		<Combobox
			id={id}
			as="div"
			ref={wrapperRef}
			value={selectedOption ? selectedOption.label : ''}
			{...(register ? register(name) : {})}
			// onChange={(event: any) => {
			// 	setShowOptions(false);
			// 	//onChange(event);
			// 	setQuery('');
			// }}
		>
			<div className="relative mb-2 ">
				<Combobox.Input
					className="border-mgh-light-grey focus:border-mgh-primary focus:ring-mgh-primary w-full rounded-md border bg-white py-2 pl-3 pr-10 tracking-wide shadow-sm focus:outline-none focus:ring-1"
					onChange={(event) => {
						setQuery(event.target.value);
					}}
					onClick={() => setShowOptions(true)}
					placeholder={selectedOption ? selectedOption.label : selectedValue}
				/>

				<Combobox.Button
					onClick={() => setShowOptions(!showOptions)}
					className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none"
				>
					<ChevronDownIcon
						className="text-gray-shade-1 h-4 w-4"
						aria-hidden="true"
					/>
				</Combobox.Button>

				{showOptions && filteredOption.length > 0 && (
					<Combobox.Options
						static
						className=" font-neuePlak ring-gray-shade-2 absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base tracking-wide shadow-lg ring-1 ring-opacity-5 focus:outline-none"
					>
						{filteredOption.map((option) => (
							<Combobox.Option
								key={option.value}
								value={option.value}
								className={({ active }) =>
									clsx(
										'relative cursor-default select-none py-2 pl-3 pr-9',
										active
											? 'text-gray-shade-1 bg-secondary-shade-3'
											: 'text-gray-shade-2'
									)
								}
							>
								{({ active, selected }) => (
									<>
										<span
											className={clsx(
												'block truncate',
												selected && 'font-semibold'
											)}
										>
											{option.label}
										</span>

										{selected && (
											<span
												className={clsx(
													'absolute inset-y-0 right-0 flex items-center pr-4',
													active ? 'text-gray-shade-1 ' : 'text-gray-shade-2'
												)}
											>
												<CheckIcon className="h-5 w-5" aria-hidden="true" />
											</span>
										)}
									</>
								)}
							</Combobox.Option>
						))}
					</Combobox.Options>
				)}
			</div>
			{error && showErrorText && (
				<p className="text-service-red -mt-1 text-sm">{error.message}</p>
			)}
		</Combobox>
	);
};
export default ComboBox;
