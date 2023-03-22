import React, { useContext } from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { MembershipsContentProps } from 'pages/memberships';
import { MembershipsContext } from '../../../../contexts/memberships/memberships.context';
import MembershipCard from './membership-card';
import Animate from 'components/molecules/animate.molecule';

const MembershipsCardList = () => {
	const { pageContent } =
		useContext<GlobalContextProps<MembershipsContentProps>>(GlobalContext);

	const { activeServiceMembership } = useContext(MembershipsContext);

	if (!pageContent) {
		return null;
	}

	return (
		<section
			id="service-membership-card-list"
			className=" mb-[5em] h-auto w-full"
		>
			<div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
				{activeServiceMembership?.serviceMembershipCards?.map(
					(membershipCard, index) => {
						return (
							membershipCard?.membershipIcon?.asset?.url && (
								<Animate>
									<div
										key={index}
										className="membership-card-wrapper mb-5 h-full min-h-full w-full md:basis-1/2 md:px-4 lg:mr-0 lg:mb-0 lg:space-x-6 lg:pr-6 lg:pb-5 xl:basis-1/3"
									>
										<MembershipCard
											key={index}
											title={membershipCard?.membershipTitle || ''}
											description={membershipCard?.membershipDescription || ''}
											price={membershipCard?.membershipPrice || ''}
											buttonText={membershipCard?.button?.text || ''}
											iconSrc={membershipCard?.membershipIcon?.asset?.url || ''}
											iconAltText={
												membershipCard?.membershipIcon?.asset?.altText || ''
											}
											summaryItems={
												membershipCard?.membershipSummaryItems || []
											}
										/>
									</div>
								</Animate>
							)
						);
					}
				)}
			</div>
		</section>
	);
};

export default MembershipsCardList;
