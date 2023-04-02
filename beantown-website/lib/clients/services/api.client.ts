export interface RequestOptions extends Omit<RequestInit, 'body' | 'headers'> {
	query?: Record<string, string | number | boolean>;
	body?: Record<string, unknown>;
	headers?: Record<string, string>;
}

export async function apiClient<T = any>(
	endpoint: string,
	options?: RequestOptions
): Promise<T> {
	const { query, body, headers, ...fetchOptions } = options || {};

	// Build the query string from the query object.
	const url = new URL(`/api/${endpoint}`, window.location.origin);

	if (query) {
		url.search = new URLSearchParams(
			query as Record<string, string>
		).toString();
	}

	// Set headers and body if provided.
	const requestOptions: RequestInit = {
		...fetchOptions,
		headers: new Headers(headers),
	};

	if (body) {
		(requestOptions.headers as Headers).set('Content-Type', 'application/json');
		requestOptions.body = JSON.stringify(body);
	}

	// Make the request and handle the response.
	const response = await fetch(url.toString(), requestOptions);

	if (!response.ok) {
		throw new Error(`An error occurred: ${response.statusText}`);
	}

	// Parse and return the JSON response.
	return response.json();
}
