import {
	ConfidentialClientApplication,
	PublicClientApplication,
} from '@azure/msal-node';

const { AZURE_APP_CLIENT_ID, AZURE_APP_CLIENT_SECRET, AZURE_APP_TENANT_ID } =
	process.env;

const config = {
	auth: {
		clientId: AZURE_APP_CLIENT_ID || '',
		// authority: `https://login.microsoftonline.com/consumers`,
		authority: `https://login.microsoftonline.com/${AZURE_APP_TENANT_ID}`,
		clientSecret: AZURE_APP_CLIENT_SECRET,
	},
};

const pca = new ConfidentialClientApplication(config);

// Create an instance of PublicClientApplication
// const pca = new PublicClientApplication(config);

const requiredScopes = ['Files.Read', 'Files.ReadWrite', 'offline_access'];

const authRequest = {
	scopes: [
		'https://graph.microsoft.com/.default',
		// 'https://graph.microsoft.com/Files.ReadWrite.All/.default',
		// 'Sites.ReadWrite.All/.default',
		// 'Files.ReadWrite.All/.default',
	],
	// scopes: requiredScopes,
	// `api://${AZURE_APP_CLIENT_ID}/.default`,
	// // `api://${AZURE_APP_CLIENT_ID}/Sites.ReadWrite.All/.default`,
	// ],
};

export const getAccessToken = async () => {
	console.log('Getting access token using msal');

	// try {
	// 	const authCodeUrlParameters = {
	// 		scopes: requiredScopes,
	// 		redirectUri: 'http://localhost:3000', // Redirect URI configured for your app
	// 	};

	// 	// Get the authorization code URL
	// 	const authCodeUrl = await pca.getAuthCodeUrl(authCodeUrlParameters);

	// 	// Redirect the user to the authCodeUrl for authentication
	// 	console.log('Please sign in to OneDrive:');
	// 	console.log(authCodeUrl);

	// 	// Handle the authorization code response from the user
	// 	const authCode = 'AUTHORIZATION_CODE'; // Replace with the auth code received after user authentication

	// 	// Acquire a token using the authorization code
	// 	const tokenResponse = await pca.acquireTokenByCode({
	// 		code: authCode,
	// 		scopes: requiredScopes,
	// 		redirectUri: 'http://localhost:3000', // Same redirect URI used above
	// 	});

	// 	console.log('Access token:', tokenResponse.accessToken);

	// 	// Use the access token to perform OneDrive operations
	// } catch (error) {
	// 	console.log('Error during authentication:', error);
	// }

	return pca
		.acquireTokenByClientCredential(authRequest)
		.then((response) => {
			if (response) console.log('Access token:', response.accessToken);
			else console.log('No response');
			return response?.accessToken;
		})
		.catch((error) => {
			console.log('Error acquiring access token:', error);
			return null;
		});
};
