export const limitText = (text: string, limit = 20): string => {
	if (text.length > limit) {
		return `${text.substring(0, limit)}...`;
	}
	return text;
};
