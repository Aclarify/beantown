import React, { useState } from 'react';
import Zoom from 'react-reveal/Zoom';
import { MembershipForm } from './membership-form.organism';
import { Dialog } from '@headlessui/react';
import { MembershipResult } from './membership-result.organism';
import { ServiceMembershipCard } from '../../typing/gql/graphql';
import useWindowDimensions from '../../lib/hooks/use-window-dimensions.hook';
import clsx from 'clsx';

const MembershipModal = ({ visible, onClose }: any) => {
	const [submissionSuccess, setSubmissionSuccess] = useState<boolean>(false);
	const [chosenMembership, setChosenMembership] =
		useState<ServiceMembershipCard>();

	const { width } = useWindowDimensions();

	const handleOnClose = () => {
		setSubmissionSuccess(false);
		setChosenMembership(undefined);
		onClose();
	};

	const handleSubmissionSuccess = (choice: ServiceMembershipCard) => {
		setSubmissionSuccess(true);
		setChosenMembership(choice);
	};

	return (
		<Dialog open={visible} onClose={handleOnClose} className="relative z-50">
			{/* The backdrop, rendered as a fixed sibling to the panel container */}
			<div
				className="fixed inset-0 bg-black/30 backdrop-blur-sm"
				aria-hidden="true"
			/>

			<Zoom>
				<div className="fixed inset-0 overflow-y-auto">
					<div className="flex min-h-full items-center justify-center">
						<Dialog.Panel
							className={clsx(
								'card-wrapper mx-6 rounded-2xl bg-white py-2  sm:mx-8 lg:mx-auto lg:rounded-3xl',
								{
									'w-full': width <= 768,
								}
							)}
						>
							<div className="">
								{submissionSuccess && chosenMembership ? (
									<MembershipResult chosenMembership={chosenMembership} />
								) : (
									<MembershipForm
										onSumissionSuccess={handleSubmissionSuccess}
									/>
								)}
							</div>
						</Dialog.Panel>
					</div>
				</div>
			</Zoom>
		</Dialog>
	);
};
export default MembershipModal;
