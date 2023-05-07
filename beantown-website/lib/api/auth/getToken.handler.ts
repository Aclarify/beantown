import { getAccessToken } from '../services/azure.service';

export const getAccessTokenForFileUpload = async () => {
	try {
		console.log('Getting access token');
		const rsp = await getAccessToken();
		if (!rsp) throw new Error('Failed to get access token');
		return rsp;
	} catch (error) {
		console.error(error);
		throw new Error('Failed to create job application');
	}
};
