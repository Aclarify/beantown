import React, { useRef } from 'react';
import useEscapeKey from '@lib/hooks/handle-escape-key.hook';
import useOutsideClick from '@lib/hooks/handle-outside-click.hook';
import { TestimonialCard } from './testimonial-card.organism';
import Modal from './modal.organism';

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

	return (
		<Modal isVisible={visible} onClose={onClose}>
			<TestimonialCard
				clientName={clientName || ''}
				clientDetails={clientDetails || ''}
				reviewComments={reviewComments}
			/>
		</Modal>
	);
};
export default TestimonialModal;
