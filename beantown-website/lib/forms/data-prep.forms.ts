type RecordValue = string | number | boolean | null | Record<string, unknown>;

const isRecord = (value: unknown): value is Record<string, unknown> => {
	return typeof value === 'object' && value !== null && !Array.isArray(value);
};

const encodeValue = (value: RecordValue): string => {
	if (
		typeof value === 'string' ||
		typeof value === 'number' ||
		typeof value === 'boolean'
	) {
		return encodeURIComponent(value.toString());
	}

	if (value === null) {
		return '';
	}

	return encodeURIComponent(JSON.stringify(value));
};

const toQueryString = (obj: Record<string, unknown>, prefix = ''): string => {
	const queryString = Object.entries(obj)
		.flatMap(([key, value]) => {
			const encodedKey = encodeURIComponent(key);
			const fullKey = prefix ? `${prefix}[${encodedKey}]` : encodedKey;

			if (isRecord(value)) {
				return toQueryString(value, fullKey);
			}

			return `${fullKey}=${encodeValue(value as RecordValue)}`;
		})
		.join('&');

	return queryString;
};

export const prepareFormUrlEncoded = (
	body: Record<string, unknown>
): string => {
	return toQueryString(body);
};
