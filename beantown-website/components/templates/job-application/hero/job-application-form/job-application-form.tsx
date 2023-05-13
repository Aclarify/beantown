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
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import Image from 'next/image';
import FormUploadFile from 'components/atoms/form-file-upload.atom';
import Modal from 'components/organisms/modal.organism';
import JobApplicationModal from './job-application-modal';
import { createJobApplication } from '@lib/clients/services/careers/job-application.service';
import { isValidFileSize, isValidFileType } from 'utils/file-upload.helper';
import ComboBox from 'components/atoms/form-combo-box.atom';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { config } from '@lib/config';
import { JobApplicationFormDto } from '@typing/api/dto';

const AddressAutofill = dynamic(
	() => import('@mapbox/search-js-react').then((c) => c.AddressAutofill),
	{
		ssr: false,
	}
);

const validationSchema = Yup.object().shape({
	email: Yup.string()
		.required('Your email is required')
		.email('Email is invalid'),
	firstName: Yup.string().required('Your first name is required'),
	lastName: Yup.string().required('Your last name is required'),
	address1: Yup.string().required('Your address is required'),
	address2: Yup.string(),
	city: Yup.string().required('Your city is required'),
	state: Yup.string().required('Your state is required'),
	resume: Yup.mixed()
		.required('Please upload your resume')
		.test(
			'is-valid-type',
			'Not a valid resume type. Allowed types are pdf, doc, docx, jpeg, jpg, png',
			(value: any) => {
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
		.required('Your phone number is required')
		.matches(/^\+?\d{10,14}$/, 'Phone number is not valid'),
	jobOption: Yup.string().required('Please select a job position'),
	jobDesired: Yup.string().required('Please select the employment desired'),
});

const JobApplicationForm: React.FC = () => {
	const { pageContent } =
		useContext<GlobalContextProps<CareersContentProps>>(GlobalContext);
	const formOptions = {
		resolver: yupResolver(validationSchema),
		defaultValues: {
			email: '',
			firstName: '',
			lastName: '',
			phoneNumber: '',
			address1: '',
			address2: '',
			city: '',
			state: '',
			zipCode: '',
			resume: null,
			experience: '',
			jobOption: '',
			jobDesired: '',
		},
	};
	const mapBoxAccessToken = config.mapBoxAccessToken;

	const {
		handleSubmit,
		formState: { errors },
		setValue,
		control,
	} = useForm<JobApplicationFormDto>(formOptions);
	const [showConfirmationDialog, setShowConfirmationDialog] = useState(false);
	const router = useRouter();

	useEffect(() => {
		if (router.query['positionName']) {
			setValue('jobOption', router.query['positionName'] as string);
		}
	}, [router.query, setValue]);

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

	const onSubmit: SubmitHandler<JobApplicationFormDto> = async (data) => {
		try {
			// Submit form data to server
			if (data) {
				// Frame the form data to be sent to server
				const formData = new FormData();
				formData.append('file', data.resume || '');
				// Append all the other form data
				formData.append('firstName', data.firstName);
				formData.append('lastName', data.lastName);
				formData.append('email', data.email);
				formData.append('phoneNumber', data.phoneNumber);
				formData.append('address1', data.address1);
				formData.append('address2', data.address2);
				formData.append('city', data.city);
				formData.append('state', data.state);
				formData.append('zipCode', data.zipCode);
				formData.append('experience', data.experience);
				formData.append('jobOption', data.jobOption);
				formData.append('jobDesired', data.jobDesired);

				const jobApplicationPromise = createJobApplication(formData);

				toast.promise(
					jobApplicationPromise,
					{
						loading: 'Submitting...',
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
		} catch (error) {
			console.error('Error: ', error);
			toast.error('Cannot complete this operation, please try again later');
		}
	};

	const onResumeFileChange = (file: File) => {
		if (file) {
			setValue('resume', file, { shouldValidate: true });
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
										<div className="flex  w-full flex-col gap-2">
											<FormLabel inputId="first-name" labelText="First Name" />
											<Controller
												name="firstName"
												control={control}
												rules={{ required: true }}
												render={({ field }) => (
													<FormInput
														id="first-name"
														placeholderText="Enter your first name"
														bgColor="white"
														{...field}
														error={errors.firstName}
													/>
												)}
											/>
										</div>
										<div className="flex w-full flex-col gap-2">
											<FormLabel inputId="last-name" labelText="Last Name" />
											<Controller
												name="lastName"
												control={control}
												rules={{ required: true }}
												render={({ field }) => (
													<FormInput
														id="last-name"
														placeholderText="Enter your last name"
														bgColor="white"
														{...field}
														error={errors.lastName}
													/>
												)}
											/>
										</div>
									</div>

									<div className="mx-auto flex w-full flex-col gap-4 px-2 md:w-5/6  md:flex-row">
										<div className={`flex w-full flex-col gap-2`}>
											<FormLabel inputId="address-1" labelText="Address1" />
											<Controller
												name="address1"
												control={control}
												rules={{ required: true }}
												render={({ field }) =>
													mapBoxAccessToken ? (
														<AddressAutofill
															{...field}
															accessToken={mapBoxAccessToken}
														>
															<FormInput
																id="address-1"
																type="text"
																placeholderText="Enter your address"
																autoComplete="address-line1"
																showErrorText={false}
																error={errors.address1}
																{...field}
																bgColor="white"
															/>
														</AddressAutofill>
													) : (
														<FormInput
															id="address-1"
															type="text"
															placeholderText="Enter your address"
															autoComplete="address-line1"
															error={errors.address1}
															{...field}
															bgColor="white"
														/>
													)
												}
											/>
										</div>
										<div className={`flex w-full flex-col gap-2`}>
											<FormLabel inputId="address2" labelText="Address2" />
											<Controller
												name="address2"
												control={control}
												render={({ field }) => (
													<FormInput
														id="address-1"
														type="text"
														placeholderText="Enter your address"
														autoComplete="address-line2"
														error={errors.address2}
														{...field}
														bgColor="white"
													/>
												)}
											/>
										</div>
									</div>
									<div className="mx-auto flex w-full flex-col gap-4 px-2 md:w-5/6  md:flex-row">
										<div className="flex w-full flex-col gap-2">
											<FormLabel inputId="city" labelText="City" />
											<Controller
												name="city"
												control={control}
												render={({ field }) => (
													<FormInput
														id="city"
														type="text"
														placeholderText="Enter your city"
														autoComplete="address-level2"
														bgColor="white"
														{...field}
														error={errors.city}
													/>
												)}
											/>
										</div>
										<div className="flex w-full flex-col gap-2">
											<FormLabel inputId="state" labelText="State" />
											<Controller
												name="state"
												control={control}
												render={({ field }) => (
													<FormInput
														id="state"
														type="text"
														placeholderText="Enter your state"
														autoComplete="address-level1"
														bgColor="white"
														{...field}
														error={errors.state}
													/>
												)}
											/>
										</div>
									</div>
									<div className="mx-auto flex w-full flex-col  gap-4 px-2 md:w-5/6  md:flex-row">
										<div className=" flex w-full  flex-col gap-2 md:w-1/2">
											<FormLabel inputId="zip-code" labelText="Zip Code" />
											<Controller
												name="zipCode"
												control={control}
												render={({ field }) => (
													<FormInput
														id="zip-code"
														placeholderText="Enter your zip code"
														autoComplete="postal-code"
														bgColor="white"
														error={errors.zipCode}
														{...field}
													/>
												)}
											/>
										</div>
									</div>
									<div className="mx-auto flex w-full flex-col gap-4 px-2 md:w-5/6 md:flex-row">
										<div className="flex w-full flex-col gap-2">
											<FormLabel
												inputId="phone-number"
												labelText="Phone number"
											/>
											<Controller
												name="phoneNumber"
												control={control}
												rules={{ required: true }}
												render={({ field }) => (
													<FormInput
														id="phone-number"
														type="phone"
														placeholderText="Enter your phone number"
														bgColor="white"
														{...field}
														error={errors.phoneNumber}
													/>
												)}
											/>
										</div>
										<div className=" flex w-full flex-col gap-2">
											<FormLabel inputId="email" labelText="Mail Address" />
											<Controller
												name="email"
												control={control}
												rules={{ required: true }}
												render={({ field }) => (
													<FormInput
														id="email"
														type="email"
														placeholderText="Enter your email"
														bgColor="white"
														{...field}
														error={errors.email}
													/>
												)}
											/>
										</div>
									</div>

									<div className="mx-auto flex w-full flex-col  gap-4 px-2 md:w-5/6 md:flex-row">
										<div className=" flex w-full flex-col gap-2">
											<FormLabel
												inputId="position"
												labelText="Position Applying for"
											/>
											<Controller
												name="jobOption"
												control={control}
												rules={{ required: true }}
												render={({ field }) => (
													<ComboBox
														id="jobOption"
														options={jobOptions}
														error={errors.jobOption}
														{...field}
													/>
												)}
											/>
										</div>
										<div className="flex w-full flex-col gap-2">
											<FormLabel
												inputId="employmentDesired"
												labelText="Employment Desired"
											/>
											<Controller
												name="jobDesired"
												control={control}
												rules={{ required: true }}
												render={({ field }) => (
													<ComboBox
														id="jobDesired"
														options={employmentTypes}
														error={errors.jobDesired}
														{...field}
													/>
												)}
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
												<Controller
													name="resume"
													control={control}
													render={({ field }) => (
														<FormUploadFile
															id="resume"
															error={errors.resume}
															{...field}
															onFileChange={onResumeFileChange}
														/>
													)}
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
											<Controller
												name="experience"
												control={control}
												render={({ field }) => (
													<FormTextArea
														id="experience"
														type="text"
														placeholderText="Describe your Experience Here"
														bgColor="white"
														error={errors.experience}
														{...field}
													/>
												)}
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
							<div className="container sticky top-0 mx-auto">
								<Modal
									isVisible={showConfirmationDialog}
									onClose={() => setShowConfirmationDialog(false)}
								>
									<JobApplicationModal logoImage={logoDark?.image} />
								</Modal>
							</div>
						</form>
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
