import React from 'react'
import FormLabel from 'components/atoms/form-label.atom';
import FormInput from 'components/atoms/form-input.atom';
import Dropdown from 'components/atoms/form-dropdown';
import TextArea from 'components/atoms/form-textarea.atoms';
import FormTextArea from 'components/atoms/form-textarea.atoms';

const JobApplicationForm = () => {

  return (
		<div className="mb-48">
			<form className="form-body flex flex-col py-4 bg-[#FFFFFF] m-4 p-4 shadow rounded-lg mx-auto container">
				<div className="flex flex-col gap-4 py-2 lg:py-5 mt-12  ">
					<div className="mx-auto flex w-3/5 flex-col gap-4  md:flex-row">
						<div></div>
						<div className="flex w-full flex-col gap-2">
							<FormLabel inputId="firstName" labelText="First Name" />
							<FormInput
								id="firstName"
								placeholderText="Enter your first name"
								name={'firstName'}
								bgColor="white"
							/>
						</div>
						<div className="flex w-full flex-col gap-2">
							<FormLabel inputId="lastName" labelText="Last Name" />
							<FormInput
								id="lastName"
								placeholderText="Enter your last name"
								name={'lastName'}
								bgColor="white"
							/>
						</div>
					</div>
					<div className="mx-auto flex w-3/5 flex-col gap-4  md:flex-row">
						<div className={`flex w-full flex-col gap-2`}>
							<FormLabel inputId="address1" labelText="Address1" />

							<FormInput
								id="address1"
								type="text"
								placeholderText="Enter your address"
								autoComplete="address-line1"
								name={'address'}
								showErrorText={false}
								bgColor="white"
							/>
						</div>
						<div className={`flex w-full flex-col gap-2`}>
							<FormLabel inputId="address2" labelText="Address2" />

							<FormInput
								id="address2"
								type="text"
								placeholderText="Enter your  address"
								autoComplete="address-line2"
								name={'address'}
								showErrorText={false}
								bgColor="white"
							/>
						</div>
					</div>
					<div className="mx-auto flex w-3/5 flex-col gap-4  md:flex-row">
						<div className="flex w-full flex-col gap-2">
							<FormLabel inputId="city" labelText="City" />
							<FormInput
								id="city"
								type="text"
								placeholderText="Enter your city"
								autoComplete="address-level2"
								name={'city'}
								bgColor="white"
							/>
						</div>
						<div className="flex w-full flex-col gap-2">
							<FormLabel inputId="state" labelText="State" />
							<FormInput
								id="state"
								type="text"
								placeholderText="Enter your state"
								autoComplete="address-level1"
								name={'state'}
								bgColor="white"
							/>
						</div>
					</div>
					<div className="mx-auto flex w-3/5 flex-col gap-4 md:flex-row">
						<div className="flex w-full flex-col gap-2">
							<FormLabel inputId="phoneNumber" labelText="Phone number" />
							<FormInput
								id="phoneNumber"
								type="phone"
								placeholderText="Enter your phone number"
								name={'phoneNumber'}
								bgColor="white"
							/>
						</div>
						<div className="flex w-full flex-col gap-2">
							<FormLabel inputId="email" labelText="Mail Adress" />
							<FormInput
								id="email"
								type="email"
								placeholderText="Enter your email"
								name={'email'}
								bgColor="white"
							/>
						</div>
					</div>
					<div className="mx-auto flex w-3/5 flex-col gap-4 md:flex-row">
						<div className="flex w-full flex-col gap-2">
							<Dropdown
								options={[]}
								handleChange={function (value: any): void {
									throw new Error('Function not implemented.');
								}}
								value={undefined}
								label={'Position Applying for'}
								width="w-full"
								customClass="bg-white  rounded-lg  p-3 "
							/>
						</div>
						<div className="flex w-full flex-col gap-2">
							<Dropdown
								options={[]}
								handleChange={function (value: any): void {
									throw new Error('Function not implemented.');
								}}
								value={undefined}
								label={'Employment Desired'}
								width="w-full"
								customClass="bg-white"
							/>
						</div>
					</div>

					<div className="mx-auto w-3/5">
						<div className={`flex w-full flex-col gap-2`}>
							<FormLabel inputId="resume" labelText="Upload your resume" />
							<FormInput
								id="resume"
								placeholderText="@ Choose a file"
								name={'resume'}
								
							/>
						</div>
					</div>
					<div className="mx-auto w-3/5">
						<div className={`flex w-full flex-col gap-2`}>
							<FormLabel
								inputId="experiencelabel"
								labelText="Tell Us About Yourself & Your Experience"
							/>

							<FormTextArea
								id="experience"
								type="text"
								placeholderText="Describe your Experience Here"
								autoComplete="experience"
								name={'experience'}
								showErrorText={false}
								bgColor="white"
							/>
						</div>
					</div>
				</div>
				<button
					type="submit"
					className="bg-primary-shade-1 para-2 mx-auto mt-2 w-1/4 rounded-xl py-3 text-white "
				>
					Submit
				</button>
			</form>
		</div>
	);
}

export default JobApplicationForm