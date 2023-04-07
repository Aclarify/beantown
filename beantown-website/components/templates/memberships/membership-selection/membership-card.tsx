import React, { useContext } from 'react';
import Image from 'next/image';
import useWindowDimensions from '../../../../lib/hooks/use-window-dimensions.hook';
import { Maybe, ServiceMembershipCard } from '../../../../typing/gql/graphql';
import MembershipModal from '../../../organisms/membership-modal.organism';
import { MembershipsContext } from '../../../../contexts/memberships/memberships.context';
import { useModal } from 'components/organisms/modal.organism';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
	membership: Maybe<ServiceMembershipCard>;
}

const MembershipCard: React.FC<IProps> = ({ membership }) => {
	const { width } = useWindowDimensions();
	const { isVisible, openModal, closeModal } = useModal();
	const { setSelectedMembership } = useContext(MembershipsContext);

	const handleOnClose = () => {
		closeModal();
	};
	const handleMembershipClick = () => {
		setSelectedMembership(membership);
		openModal();
	};

	return (
		<>
			<div className="flex h-full min-h-full w-full min-w-full flex-col content-center rounded-3xl border bg-white p-3 shadow-lg sm:p-3">
				<div className="bg-secondary-shade-3 mb-4 rounded-2xl p-4">
					<div className="mb-2 flex justify-center py-3 lg:mb-6 lg:py-5">
						<div className="image-wrapper w-[60px]  lg:h-[56px] lg:w-[80px]">
							<Image
								width={80}
								height={80}
								style={{
									width: '100%',
								}}
								src={membership?.membershipIcon?.asset?.url || ''}
								alt={membership?.membershipIcon?.asset?.altText || ''}
							/>
						</div>
					</div>
					<div className="mb-4 flex flex-col items-center gap-1 px-4 sm:px-6">
						<h2 className="text-primary-black ">
							{membership?.membershipTitle}
						</h2>
						<p className="text-gray-shade-1 para text-overflow-ellipsis 3xl:h-[70px] h-[70px] overflow-hidden  text-center md:h-[50px] lg:h-[155px] xl:h-[125px] 2xl:h-[100px]">
							{membership?.membershipDescription}
						</p>
					</div>
				</div>
				<div id="list-container" className="mb-4 p-2">
					<div className="w-full">
						{membership?.membershipSummaryItems?.map((item, index: number) => {
							return (
								<div
									key={index}
									id="list-items"
									className="list-items text-gray-shade-1 flex items-center p-1 sm:p-2"
								>
									{item?.isActivated ? (
										<Image
											src={'/images/memberships/icons/list-check.svg'}
											alt={'memberships-list-icon'}
											width={width > 768 ? 20 : 18}
											height={width > 768 ? 14 : 12}
										/>
									) : (
										<Image
											src={'/images/memberships/icons/list-close.svg'}
											alt={'memberships-list-icon'}
											width={width > 768 ? 17 : 15}
											height={width > 768 ? 13 : 10}
											className="mr-1"
										/>
									)}
									<p className="para-3 lg:para-2 pl-2 sm:pl-4 ">{item?.text}</p>
								</div>
							);
						})}
					</div>
				</div>
				<button
					onClick={handleMembershipClick}
					className="bg-primary-shade-1 para-5 lg:para-3 mx-2 mt-auto mb-4 flex items-center rounded-xl py-4 px-4 tracking-wide text-white md:py-2 md:px-4 "
				>
					<span className="xl:para !font-thin">{membership?.button?.text}</span>
					<h3 className="ml-auto text-white">{membership?.membershipPrice}</h3>
					<span className="xl:para -translate-y-[10%] self-end  xl:-translate-y-[10%] xl:-translate-y-[30%]">
						/per year
					</span>
				</button>
			</div>

			<MembershipModal onClose={handleOnClose} isVisible={isVisible} />
		</>
	);
};
export default MembershipCard;
