import React from 'react'
import FormLabel from 'components/atoms/form-label.atom';
import FormInput from 'components/atoms/form-input.atom';
import Dropdown from 'components/atoms/form-dropdown';
import FormTextArea from 'components/atoms/form-textarea.atoms';
import SectionContentWrapper from 'components/molecules/section-content-wrapper.molecule';

const JobApplicationForm = () => {

  return (
		<>
			<SectionContentWrapper>
				<div className="mb-48 ">
					<div className=" container mx-auto flex flex-col  rounded-lg bg-[#FFFFFF] shadow">
						<div className="container  m-4 flex items-center p-4">
							<h3 className="mx-auto">Job Application</h3>
						</div>
						<div className="mt-12 flex flex-col gap-4 py-2 lg:py-5  ">
							<div className="mx-auto flex w-3/5 flex-col gap-4  md:flex-row">
								<div className="flex w-full flex-col gap-2">
									<FormLabel inputId="first-name" labelText="First Name" />
									<FormInput
										id="first-name"
										placeholderText="Enter your first name"
										name={'firstName'}
										bgColor="white"
									/>
								</div>
								<div className="flex w-full flex-col gap-2">
									<FormLabel inputId="last-name" labelText="Last Name" />
									<FormInput
										id="last-name"
										placeholderText="Enter your last name"
										name={'lastName'}
										bgColor="white"
									/>
								</div>
							</div>
							<div className="mx-auto flex w-3/5 flex-col gap-4  md:flex-row">
								<div className={`flex w-full flex-col gap-2`}>
									<FormLabel inputId="address-1" labelText="Address1" />

									<FormInput
										id="address-1"
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
										id="address-2"
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
							<div className="mx-auto flex w-3/5 flex-col gap-4  md:flex-row">
								<div className="flex w-1/2 flex-col ">
									<FormLabel inputId="zip-code" labelText="Zip Code" />
									<FormInput
										id="zip-code"
										type="text"
										placeholderText="Enter your Zip Code"
										autoComplete=""
										name={'city'}
										bgColor="white"
									/>
								</div>
							</div>
							<div className="mx-auto flex w-3/5 flex-col gap-4 md:flex-row">
								<div className="flex w-full flex-col gap-2">
									<FormLabel inputId="phone-number" labelText="Phone number" />
									<FormInput
										id="phone-number"
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
										customClass="bg-white  rounded-lg  p-2 "
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
									<div className='relative block'>
										
										
										<FormInput
											id="resume"
											placeholderText=" Choose a file"
											name={'resume'}
										/>
									</div>
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
						<div className="container m-4 mx-auto flex items-center p-4">
							<button
								type="submit"
								className="bg-primary-shade-1 para-2 mx-auto mt-2 w-1/4 rounded-xl py-3 text-white "
							>
								Submit
							</button>
						</div>
					</div>
				</div>
			</SectionContentWrapper>
		</>
	);
}

export default JobApplicationForm