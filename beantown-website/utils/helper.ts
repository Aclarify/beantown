import { toastBuilder } from 'components/molecules/toast.molecule';
import { DateTime } from 'luxon';

export const limitText = (text: string, limit = 20): string => {
	if (text.length > limit) {
		return `${text.substring(0, limit)} ...`;
	}
	return text;
};

export const showUnderConstructionMsg = () => {
	toastBuilder('This feature is under construction', 'default');
};

export const formatDate = (dateStr: string) => {
	const date = DateTime.fromISO(dateStr);
	return date.toFormat('dd-MM-yyyy');
};

export const getExcerpt = (content: any = [], maxLength = 100): string => {
	let plainText = '';

	// Loop through each block in the portable text array
	content.forEach((block: any) => {
		// If the block is a text block, concatenate its value to the plainText string
		if (block._type === 'block' && block.children) {
			block.children.forEach((span: any) => {
				if (span._type === 'span' && span.text) {
					plainText += span.text;
				}
			});
		}
	});

	// Truncate the plain text to the desired length
	if (plainText.length > maxLength) {
		plainText = plainText.substring(0, maxLength - 3) + '...';
	}

	return plainText;
};
