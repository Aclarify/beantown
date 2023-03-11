import { toastBuilder } from 'components/molecules/toast.molecule';

export const limitText = (text: string, limit = 20): string => {
	if (text.length > limit) {
		return `${text.substring(0, limit)} ...`;
	}
	return text;
};

export const showUnderConstructionMsg = () => {
	toastBuilder('This feature is under construction', 'default');
};
