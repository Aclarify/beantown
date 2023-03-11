import toast, { ToastOptions, useToasterStore } from 'react-hot-toast';

import dynamic from 'next/dynamic';
import { useEffect } from 'react';

const Toaster = dynamic(
	() => import('react-hot-toast').then((c) => c.Toaster),
	{
		ssr: false,
	}
);

type toastTypes = 'success' | 'error' | 'loading' | 'default';
export const toastBuilder = (
	message: string,
	type: toastTypes,
	options?: ToastOptions
) => {
	switch (type) {
		case 'success':
			toast.success(message, options);
			break;
		case 'error':
			toast.error(message, options);
			break;
		case 'loading':
			toast.loading(message, options);
			break;
		case 'default':
			toast(message, options);
			break;
		default:
			toast(message, options);
	}
};

const Toast: React.FC = () => {
	const { toasts } = useToasterStore();

	const TOAST_LIMIT = 1;

	useEffect(() => {
		toasts
			.filter((t) => t.visible) // Only consider visible toasts
			.filter((_, i) => i >= TOAST_LIMIT) // Is toast index over limit?
			.forEach((t) => toast.dismiss(t.id)); // Dismiss – Use toast.remove(t.id) for no exit animation
	}, [toasts]);

	return (
		<Toaster
			position="top-center"
			reverseOrder={false}
			gutter={8}
			containerClassName=""
			containerStyle={{}}
			toastOptions={{
				// Define default options
				className: '',
				duration: 3000,
				style: {
					background: '#15284C',
					color: '#fff',
				},

				// Default options for specific types
				success: {
					duration: 3000,
				},
			}}
		/>
	);
};

export default Toast;
