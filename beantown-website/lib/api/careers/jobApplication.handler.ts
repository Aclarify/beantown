export type Address = {
	address1: string;
	address2: string;
	city: string;
	state: string;
	zip: string;
	country: 'USA';
};

export type Contact = {
	phoneNumber: string;
	email: string;
};

export type JobDetail = {
	positionApplyingFor: string;
	employmentDesired: string;
	aboutApplicant: string;
	resumeURL: string;
};

export type CreateJobApplicationInboundDto = {
	name: string;
	externalId: string;
	address?: Address;
	contactInfo: Contact;
	jobDetail?: JobDetail;
};

export const applyJob = async (
	createJobApplicationDto: CreateJobApplicationInboundDto
) => {
	try {
		// TODO: Add validation rules for the event body

		// Insert job application to Sanity or MongoDB
		const rsp1 = await insertJobApplicationToSanity(createJobApplicationDto);
		if (!rsp1) {
			return formatJSONInternalErrorResponse({
				message: 'Unable to save job application. Please try again',
			});
		}
		// Insert job application to Sanity or MongoDB
		const rsp2 = await insertJobApplicationToMongo(createJobApplicationDto);
		if (!rsp2) {
			return formatJSONInternalErrorResponse({
				message: 'Unable to save job application. Please try again',
				event,
			});
		}

		const notificationRsp = await sendEmailNotification(
			createJobApplicationDto
		);
		if (!notificationRsp) {
			return formatJSONInternalErrorResponse({
				message: 'Unable to send notification. Please try again',
				event,
			});
		}

		return formatJSONResponse({
			message: `Job application created successfully`,
			event,
		});
	} catch (error) {
		console.error(error);
		return formatJSONInternalErrorResponse({
			message: 'Something went wrong',
			event,
		});
	}
};
