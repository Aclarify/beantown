import { ConfidentialClientApplication } from '@azure/msal-node';

const { AZURE_APP_CLIENT_ID, AZURE_APP_CLIENT_SECRET, AZURE_APP_TENANT_ID } =
	process.env;

const config = {
	auth: {
		clientId: AZURE_APP_CLIENT_ID || '',
		// authority: `https://login.microsoftonline.com/consumers`,
		// authority: `https://login.microsoftonline.com/common`,
		authority: `https://login.microsoftonline.com/${AZURE_APP_TENANT_ID}`,
		clientSecret: AZURE_APP_CLIENT_SECRET,
	},
};

const pca = new ConfidentialClientApplication(config);

const authRequest = {
	scopes: ['https://graph.microsoft.com/.default'],
};

export const getAccessToken = async () => {
	console.log('Getting access token using msal');

	return pca
		.acquireTokenByClientCredential(authRequest)
		.then((response) => {
			if (!response) console.log('No response');
			return response?.accessToken;
		})
		.catch((error) => {
			console.log('Error acquiring access token:', error);
			return null;
		});
};
