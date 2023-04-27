import React from 'react'

interface IPorps {
  options: Option[]
  handleChange: (value: any) => void
  value: any
  label: string
  width?: string
  customClass?: string
  showTopMargin?: boolean
  disabled?: boolean
}
interface Option {
  value: string
  label: string
}

const customStyles = {
  menuList: (base: any) => {
    return { ...base, zIndex: '9999', height: '120px', fontSize: '15px' }
  },
}

// TODO use combobox? but without search type
const Dropdown: React.FC<IPorps> = ({
  options,
  handleChange,
  value,
  label,
  width = 'w-[150px]',
  customClass = '',
  showTopMargin = true,
  disabled = false,
}) => {
  return (
		<>
			<div className={`${showTopMargin && 'mt-3'}`}>
				{label && (
					<label
						htmlFor={label}
						className="text-gray-shade-1 border-primary-shade-3 block  font-medium"
					>
						{label}
					</label>
				)}
				<select
					id={label}
					name={label}
					className={`${width} ${customClass} mt-1.5 block rounded-lg border p-3 py-4   pl-3 pr-10  text-${
						disabled ? 'gray-400' : '[#44444F]'
					} focus:border-[#0062FF] focus:outline-none focus:ring-[#0062FF] sm:text-sm`}
					//   defaultValue=''
					value={value}
					onChange={handleChange}
					disabled={disabled}
				>
					{options.map((option, idx) => (
						<option value={option.value} key={`${option.value}_${idx}`}>
							{option.label}
						</option>
					))}
				</select>
			</div>
		</>
	);
}

export default Dropdown
