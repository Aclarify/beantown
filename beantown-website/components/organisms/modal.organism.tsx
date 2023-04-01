import React, { Fragment, ReactNode } from 'react';
import XMarkIcon from '@heroicons/react/20/solid/XMarkIcon';
import { Dialog, Transition } from '@headlessui/react';

interface ModalProps {
	isVisible: boolean;
	onClose: () => void;
	children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isVisible, onClose, children }) => {
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
					<div className="relative z-20 w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
						<button
							onClick={onClose}
							className="absolute top-2 right-2 text-gray-400 transition duration-150 hover:text-gray-600"
						>
							<XMarkIcon className="h-6 w-6 outline-none" />
						</button>
						<div className="mb-4">{children}</div>
					</div>
				</Transition.Child>
			</Dialog>
		</Transition>
	);
};

export default Modal;
