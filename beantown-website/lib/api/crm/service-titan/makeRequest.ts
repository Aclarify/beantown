import { prepareFormUrlEncoded } from '@lib/forms/data-prep.forms';

const CLIENT_ID = process.env.NEXT_PUBLIC_SERVICE_TITAN_CLIENT_ID;
const CLIENT_SECRET = process.env.NEXT_PUBLIC_SERVICE_TITAN_CLIENT_SECRET;
const ST_APP_KEY = process.env.NEXT_PUBLIC_SERVICE_TITAN_APP_KEY;

export const authenticate = async () => {
	try {
		const response = await fetch('https://auth.servicetitan.io/connect/token', {
			method: 'POST',
			headers: {
				'content-type': 'application/x-www-form-urlencoded',
				accept: 'application/json',
			},
			// Body must be x-www-form-urlencoded
			// for the auth endpoint
			body: prepareFormUrlEncoded({
				client_id: CLIENT_ID,
				client_secret: CLIENT_SECRET,
				grant_type: 'client_credentials',
			}),
		});

		const data = await response.json();

		if (!data.access_token) {
			throw new Error('No access token returned when authenticating');
		}
		return data.access_token;
	} catch (error) {
		console.error(error);
		throw error;
	}
};

export interface MakeRequestOptions<Dto extends Record<string, unknown>>
	extends Omit<RequestInit, 'body'> {
	url: string;
	params?: Record<string, string>;
	body: Dto;
}

export const makeRequest = async <
	Dto extends Record<string, unknown>,
	ResponseData = unknown
>(
	options: MakeRequestOptions<Dto>
): Promise<ResponseData> => {
	try {
		const accessToken = await authenticate();
		const { method, body, url, params } = options;
		const targetUrl = params ? url + new URLSearchParams(params) : url;

		const response = await fetch(targetUrl, {
			method,
			headers: {
				'ST-App-Key': ST_APP_KEY as string,
				Authorization: `Bearer ${accessToken}`, // Add "Bearer" prefix
				'content-type': 'application/json',
			},
			body: JSON.stringify(body),
		});

		const data = await response.json();
		return data as ResponseData;
	} catch (error) {
		console.error(error);
		throw error;
	}
};
