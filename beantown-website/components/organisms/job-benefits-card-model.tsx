import React, { useRef } from 'react';
import useEscapeKey from '@lib/hooks/handle-escape-key.hook';
import useOutsideClick from '@lib/hooks/handle-outside-click.hook';
import Modal from './modal.organism';
import BenefitsCard from './benefit-card.organism';

const JobBenefitsModal = ({
	visible,
	onClose,
	iconImage,
	benefitCardTitle,
	benefitCardDescription,
}: any) => {
	const sendNo = () => onClose();
	useEscapeKey(sendNo);
	const ref = useRef(null);
	useOutsideClick(sendNo, ref);

	console.log('image' + benefitCardTitle);

	return (
		<Modal isVisible={visible} onClose={onClose}>
			<BenefitsCard
				brifcaseIconImage={iconImage || ''}
				benefitTitle={benefitCardTitle || ''}
				benefitDescription={benefitCardDescription}
			/>
		</Modal>
	);
};
export default JobBenefitsModal;
