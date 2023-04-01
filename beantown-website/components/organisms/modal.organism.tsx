import React, { ReactNode } from 'react';
import XMarkIcon from '@heroicons/react/20/solid/XMarkIcon';
import { Dialog } from '@headlessui/react';

interface ModalProps {
	isVisible: boolean;
	onClose: () => void;
	children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isVisible, onClose, children }) => {
	return (
		<Dialog
			open={isVisible}
			onClose={onClose}
			className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8"
		>
			<Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
			<div className="relative z-20 w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
				<button
					onClick={onClose}
					className="absolute top-2 right-2 text-gray-400 transition duration-150 hover:text-gray-600"
				>
					<XMarkIcon className="h-6 w-6 outline-none" />
				</button>
				<div className="mb-4">{children}</div>
			</div>
		</Dialog>
	);
};

export default Modal;
