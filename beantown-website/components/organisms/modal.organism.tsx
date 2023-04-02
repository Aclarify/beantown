import React, { Fragment, ReactNode, useState } from 'react';
import XMarkIcon from '@heroicons/react/20/solid/XMarkIcon';
import { Dialog, Transition } from '@headlessui/react';

type ModalSize = 'sm' | 'md' | 'lg' | 'xl';

interface ModalProps {
	isVisible: boolean;
	onClose: () => void;
	children: ReactNode;
	size?: ModalSize;
}

export const useModal = () => {
	const [isVisible, setIsVisible] = useState(false);

	const openModal = () => {
		setIsVisible(true);
	};

	const closeModal = () => {
		setIsVisible(false);
	};

	const toggleModal = () => {
		setIsVisible((state) => !state);
	};

	return { isVisible, openModal, closeModal, toggleModal };
};

const sizeMapping: Record<ModalSize, string> = {
	sm: 'max-w-md max-h-md',
	md: 'max-w-xl max-h-xl',
	lg: 'max-w-3xl max-h-3xl',
	xl: 'max-w-5xl max-h-[90vh]',
};

const Modal: React.FC<ModalProps> = ({
	isVisible,
	onClose,
	children,
	size = 'md',
}) => {
	return (
		<Transition show={isVisible} as={Fragment}>
			<Dialog
				open={isVisible}
				onClose={onClose}
				className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8"
			>
				<Transition.Child
					as={Fragment}
					enter="ease-out duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<Dialog.Overlay className="fixed inset-0 bg-black/30" />
				</Transition.Child>
				<Transition.Child
					as={Fragment}
					enter="ease-out duration-300"
					enterFrom="opacity-0 translate-y-1/2"
					enterTo="opacity-100 translate-y-0"
					leave="ease-in duration-200"
					leaveFrom="opacity-100 translate-y-0"
					leaveTo="opacity-0 translate-y-1/2"
				>
					<div
						className={`relative z-20 w-full overflow-hidden rounded-lg bg-white p-6 shadow-xl ${sizeMapping[size]}`}
					>
						<button
							onClick={onClose}
							className="absolute top-2 right-2 text-gray-400 transition duration-150 hover:text-gray-600"
						>
							<XMarkIcon className="h-6 w-6 outline-none" />
						</button>
						<div className="relative max-h-[calc(90vh-4rem)] overflow-y-auto p-4 lg:my-4 lg:p-4">
							{children}
						</div>
					</div>
				</Transition.Child>
			</Dialog>
		</Transition>
	);
};

export default Modal;
