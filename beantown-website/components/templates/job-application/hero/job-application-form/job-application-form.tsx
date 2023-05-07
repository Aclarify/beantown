import React, { useContext, useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';

import FormLabel from 'components/atoms/form-label.atom';
import FormInput from 'components/atoms/form-input.atom';
import FormTextArea from 'components/atoms/form-textarea.atoms';
import SectionContentWrapper from 'components/molecules/section-content-wrapper.molecule';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { CareersContentProps } from 'pages/careers';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import Image from 'next/image';
import FormUploadFile from 'components/atoms/form-file-upload.atom';
import Modal from 'components/organisms/modal.organism';
import JobApplicationModal from './job-application-modal';
import { CreateJobApplicationInboundDto } from '@lib/api/careers/jobApplication.handler';
import { createJobApplication } from '@lib/clients/services/careers/job-application.service';
import {
	isValidFileSize,
	isValidFileType,
	uploadFileToOneDrive,
} from 'utils/file-upload.helper';
import { getAuthToken } from '@lib/clients/services/auth/auth.service';
import ComboBox from 'components/atoms/form-combo-box.atom';
import { useRouter } from 'next/router';

type JobApplicationFormValues = {
	email: string;
	firstName: string;
	lastName: string;
	phoneNumber: string;
	address: string;
	city: string;
	state: string;
	zipCode: string;
	resume: File;
	experience: string;
	jobOption: string;
	jobDesired: string;
};

const validationSchema = Yup.object().shape({
	email: Yup.string()
		.required('Your email is required')
		.email('Email is invalid'),
	firstName: Yup.string().required('Your first name is required'),
	lastName: Yup.string().required('Your last name is required'),
	address: Yup.string().required('Your address is required'),
	city: Yup.string().required('Your city is required'),
	state: Yup.string().required('Your state is required'),
	resume: Yup.mixed()
		.required('Please upload your resume')
		.test(
			'is-valid-type',
			'Not a valid resume type. Allowed types are pdf, doc, docx, jpeg, jpg, png',
			(value: any) => {
				console.log('In test, value is', value);
				return value && isValidFileType(value.name.toLowerCase());
			}
		)
		.test(
			'is-valid-size',
			'Max allowed size is 5MB',
			(value: any) => value && isValidFileSize(value.size)
		),
	experience: Yup.string()
		.required('Please tell us about your experience')
		.min(20, 'Please enter data, at least 20 words')
		.max(250, 'Please enter data, at most 250 words'),
	zipCode: Yup.string()
		.matches(/^\d{5}(-\d{4})?$/, 'Zip code is not valid')
		.required('Your zip code is required'),
	phoneNumber: Yup.string()
		.matches(/^\+?\d{10,14}$/, 'Phone number is not valid') //
		.required('Your phone number is required'),
	jobOption: Yup.string().required('Please select a job position'),
	jobDesired: Yup.string().required('Please select the employment desired'),
});

const JobApplicationForm: React.FC = () => {
	const { pageContent } =
		useContext<GlobalContextProps<CareersContentProps>>(GlobalContext);
	const formOptions = { resolver: yupResolver(validationSchema) };
	const accessToken = useRef<string | null>(null);
	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue,
	} = useForm<JobApplicationFormValues>(formOptions);
	const [showConfirmationDialog, setShowConfirmationDialog] = useState(false);

	useEffect(() => {
		// Get the access token from the server
		const accessTokenPromise = getAuthToken();
		accessTokenPromise.then((token) => {
			console.log('token is:::', token);
			accessToken.current = token;
		});
	}, []);
	const router = useRouter();
	const selectedPositionName = router.query;
	const defaultPositionName = selectedPositionName['positionName']
		? selectedPositionName['positionName']
		: 'Select One';
	const [formValue, setFormValue] = useState<Record<string, any>>({});
	if (!pageContent) {
		return null;
	}

	const pageData = pageContent.page[0];
	const { jobList, logoDark, employmentTypeOptions } = pageData;
	if (!jobList) {
		return null;
	}
	const jobOptions: any = ([] = jobList.map((data: any) => {
		return { label: data?.positionName, value: data?.positionName };
	}));

	const employmentTypes: any = employmentTypeOptions?.map((data) => {
		return { label: data?.label, value: data?.value };
	});

	const onSubmit: SubmitHandler<JobApplicationFormValues> = async (data) => {
		// Submit form data to server
		console.log('data in submit:::', data);
		if (data) {
			// Frame the form data to be sent to server
			const formData = new FormData();
			formData.append('file', data.resume);

			const jobApplicationDetails: CreateJobApplicationInboundDto = {
				name: `${data.firstName} ${data.lastName}`,
				contactInfo: {
					email: data.email,
					phoneNumber: data.phoneNumber,
				},
				address: {
					address1: data.address,
					address2: data.address,
					city: data.city,
					state: data.state,
					zip: data.zipCode,
					country: 'USA',
				},
				jobDetail: {
					positionApplyingFor: data.positionApplyingFor,
					employmentDesired: data.employmentDesired,
					aboutApplicant: data.experience,
					resumeURL: '', // Convert this to Form data
				},
			};
			formData.append(
				'jobApplicationData',
				JSON.stringify(jobApplicationDetails)
			);

			console.log('jobApplicationDetails', jobApplicationDetails);
			const jobApplicationPromise = createJobApplication(formData);

			toast.promise(
				jobApplicationPromise,
				{
					loading: 'Loading',
					error: (err) => {
						console.error('Error: ', err);
						return `Cannot complete this operation, please try again later`;
					},
					success: () => {
						setShowConfirmationDialog(true);
						return `Successfully submitted`;
					},
				},
				{
					style: {
						minWidth: '250px',
					},
				}
			);
		}
	};

	const onResumeFileChange = (file: File) => {
		console.log('file', file);
		if (file && accessToken.current) {
			setValue('resume', file);
			uploadFileToOneDrive(file, accessToken.current);
		}
	};

	return (
		<>
			<div className="relative z-20 mb-96 ">
				<SectionContentWrapper>
					<div className="flex justify-center">
						<form onSubmit={handleSubmit(onSubmit)} className="  container  ">
							<div className=" border-gray-shade-6  container  flex flex-col rounded-2xl  border  bg-white p-2 shadow-[rgba(29,_39,_87,_0.04)_0px_8px_200px]  2xl:rounded-[40px]">
								<div className="container  m-4 flex items-center p-4">
									<h3 className="text-primary-shade-1 mx-auto">
										Job Application
									</h3>
								</div>
								<div className="mt-2 flex flex-col gap-4 py-2 md:mt-6 lg:py-5  ">
									<div className="mx-auto flex w-full flex-col  gap-4 px-2 md:w-5/6  md:flex-row">
										<div className="flex  w-full flex-col gap-2  ">
											<FormLabel inputId="first-name" labelText="First Name" />
											<FormInput
												id="first-name"
												placeholderText="Enter your first name"
												name={'firstName'}
												bgColor="white"
												register={register}
												error={errors.firstName}
											/>
										</div>
										<div className="flex w-full flex-col gap-2">
											<FormLabel inputId="last-name" labelText="Last Name" />
											<FormInput
												id="last-name"
												placeholderText="Enter your last name"
												name={'lastName'}
												bgColor="white"
												register={register}
												error={errors.lastName}
											/>
										</div>
									</div>

									<div className="mx-auto flex w-full flex-col gap-4 px-2 md:w-5/6  md:flex-row">
										<div className={`flex w-full flex-col gap-2`}>
											<FormLabel inputId="address-1" labelText="Address1" />

											<FormInput
												id="address-1"
												type="text"
												placeholderText="Enter your address"
												autoComplete="address-line1"
												name={'address'}
												error={errors.address}
												register={register}
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
												error={errors.address}
												register={register}
												bgColor="white"
											/>
										</div>
									</div>
									<div className="mx-auto flex w-full flex-col gap-4 px-2 md:w-5/6  md:flex-row">
										<div className="flex w-full flex-col gap-2">
											<FormLabel inputId="city" labelText="City" />
											<FormInput
												id="city"
												type="text"
												placeholderText="Enter your city"
												autoComplete="address-level2"
												name={'city'}
												bgColor="white"
												register={register}
												error={errors.city}
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
												register={register}
												error={errors.state}
											/>
										</div>
									</div>
									<div className="mx-auto flex w-full flex-col  gap-4 px-2 md:w-5/6  md:flex-row">
										<div className=" flex w-full  flex-col md:w-1/2">
											<FormLabel inputId="zip-code" labelText="Zip Code" />
											<FormInput
												id="zip-code"
												placeholderText="Enter your Zip Code"
												name={'zip'}
												bgColor="white"
												error={errors.zipCode}
												register={register}
											/>
										</div>
									</div>
									<div className="mx-auto flex w-full flex-col gap-4 px-2 md:w-5/6 md:flex-row">
										<div className="flex w-full flex-col gap-2">
											<FormLabel
												inputId="phone-number"
												labelText="Phone number"
											/>
											<FormInput
												id="phone-number"
												type="phone"
												placeholderText="Enter your phone number"
												name={'phoneNumber'}
												bgColor="white"
												register={register}
												error={errors.phoneNumber}
											/>
										</div>
										<div className=" flex w-full flex-col gap-2">
											<FormLabel inputId="email" labelText="Mail Address" />
											<FormInput
												id="email"
												type="email"
												placeholderText="Enter your email"
												name={'email'}
												bgColor="white"
												register={register}
												error={errors.email}
											/>
										</div>
									</div>

									<div className="mx-auto flex w-full flex-col  gap-4 px-2 md:w-5/6 md:flex-row">
										<div className=" flex w-full flex-col gap-2">
											<FormLabel
												inputId="position"
												labelText="Position Applying for"
											/>
											<ComboBox
												id="jobOption"
												name="jobOption"
												options={jobOptions}
												register={register}
												error={errors.jobOption}
												selectedValue={`${defaultPositionName}`}
											/>
										</div>
										<div className="flex w-full flex-col gap-2">
											<FormLabel
												inputId="employmentDesired"
												labelText="Employment Desired"
											/>
											<ComboBox
												id="jobDesired"
												name="jobDesired"
												selectedValue="Select One"
												options={employmentTypes}
												register={register}
												error={errors.jobDesired}
											/>
										</div>
									</div>

									<div className="mx-auto flex w-full px-2 md:w-5/6 ">
										<div className={'flex w-full  flex-col gap-2'}>
											<FormLabel
												inputId="resume"
												labelText="Upload your resume"
											/>
											<div className="relative block  ">
												<FormUploadFile
													id="resume"
													name={'resume'}
													register={register}
													error={errors.resume}
													onFileChange={onResumeFileChange}
												/>
											</div>
										</div>
									</div>
									<div className="mx-auto w-full px-2 md:w-5/6">
										<div className={'flex w-full flex-col gap-2'}>
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
												error={errors.experience}
												register={register}
											/>
										</div>
									</div>
								</div>

								<div className="container m-4 mx-auto flex items-center p-4">
									<button
										type="submit"
										className="bg-primary-shade-1 para-2 mx-auto mt-2 w-full rounded-xl py-3 text-white md:w-2/6 "
									>
										Submit
									</button>
								</div>
							</div>
						</form>
						<div className="container sticky top-0 mx-auto">
							<Modal
								isVisible={showConfirmationDialog}
								onClose={() => setShowConfirmationDialog(false)}
							>
								<JobApplicationModal logoImage={logoDark?.image} />
							</Modal>
						</div>
					</div>
				</SectionContentWrapper>
			</div>

			<Image
				src={'/images/job-application/right-blob.svg'}
				height={400}
				width={500}
				alt="Bottom Left Blob "
				className="absolute	left-0   z-10 hidden -translate-y-[98%] -translate-x-[40%] transform lg:block 2xl:-translate-y-[105%]"
			/>
		</>
	);
};

export default JobApplicationForm;
