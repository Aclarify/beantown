export type JobApplicationFormDto = {
	email: string;
	firstName: string;
	lastName: string;
	phoneNumber: string;
	address1: string;
	address2: string;
	city: string;
	state: string;
	zipCode: string;
	resume: File | null;
	experience: string;
	jobOption: string;
	jobDesired: string;
};
