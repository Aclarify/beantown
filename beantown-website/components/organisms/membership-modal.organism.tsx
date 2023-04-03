import React, { FC, useContext, useState } from 'react';
import { MembershipForm } from './membership-form.organism';
import { Dialog } from '@headlessui/react';
import { MembershipResult } from './membership-result.organism';
import clsx from 'clsx';
import { MembershipsContext } from '../../contexts/memberships/memberships.context';
import Modal from './modal.organism';

interface MembershipModalProps {
	isVisible: boolean;
	onClose: () => void;
}

const MembershipModal: FC<MembershipModalProps> = ({ isVisible, onClose }) => {
	const [submissionSuccess, setSubmissionSuccess] = useState<boolean>(false);
	const { selectedMembership, setSelectedMembership } =
		useContext(MembershipsContext);

	const handleOnClose = () => {
		setSubmissionSuccess(false);
		setSelectedMembership(null);
		onClose();
	};

	const handleSubmissionSuccess = () => {
		setSubmissionSuccess(true);
	};

	return (
		<Modal isVisible={isVisible} onClose={handleOnClose} size="xl">
			<Dialog.Panel className={clsx('card-wrapper')}>
				<div className="">
					{submissionSuccess && selectedMembership ? (
						<MembershipResult chosenMembership={selectedMembership} />
					) : (
						<MembershipForm onSumissionSuccess={handleSubmissionSuccess} />
					)}
				</div>
			</Dialog.Panel>
		</Modal>
	);
};
export default MembershipModal;
