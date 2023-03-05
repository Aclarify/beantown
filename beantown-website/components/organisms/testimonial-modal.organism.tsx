import React, { useRef } from 'react';
import XMarkIcon from '@heroicons/react/20/solid/XMarkIcon';
import useEscapeKey from '@lib/hooks/handle-escape-key.hook';
import useOutsideClick from '@lib/hooks/handle-outside-click.hook';
import { TestimonialCard } from './testimonial-card.organism';

const TestimonialModal = ({
	visible,
	onClose,
	clientName,
	clientDetails,
	reviewComments,
}: any) => {
	const sendNo = () => onClose();

	useEscapeKey(sendNo);
	const ref = useRef(null);
	useOutsideClick(sendNo, ref);

	if (!visible) return null;
	return (
		<>
			<section id="model" className="relative z-50">
				{/* The backdrop, rendered as a fixed sibling to the panel container */}
				<div
					className="fixed inset-0 bg-black/30 backdrop-blur-sm"
					aria-hidden="true"
				/>
				<div className="fixed inset-0   overflow-y-auto">
					<div
						ref={ref}
						className="flex min-h-full items-center justify-center"
					>
						<div className="card-wrapper mx-auto max-w-sm rounded bg-white py-2">
							<div className="flex justify-end">
								<button
									className="fixed pr-4 text-gray-400"
									aria-label="Close testimonial"
									onClick={onClose}
								>
									<XMarkIcon className="h-8 w-8" />
								</button>
							</div>
							<div className="px-4">
								<TestimonialCard
									clientName={clientName || ''}
									clientDetails={clientDetails || ''}
									reviewComments={reviewComments}
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
export default TestimonialModal;
