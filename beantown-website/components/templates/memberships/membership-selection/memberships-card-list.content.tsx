import React, { useContext } from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { MembershipsContentProps } from 'pages/memberships';
import { MembershipsContext } from '../../../../contexts/memberships/memberships.context';
import MembershipCard from './membership-card';

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
			<div className="flex flex-wrap justify-center rounded-lg">
				{activeServiceMembership?.serviceMembershipCards?.map(
					(membershipCard, index) => {
						return (
							membershipCard?.membershipIcon?.asset?.url && (
								<div
									key={index}
									className="membership-card-wrapper mb-5 w-full  md:basis-1/2 md:px-4 lg:mr-0 lg:mb-0 lg:space-x-6   lg:pr-6 lg:pb-5 xl:basis-1/3"
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
										summaryItems={membershipCard?.membershipSummaryItems || []}
									/>
								</div>
							)
						);
					}
				)}
			</div>
		</section>
	);
};

export default MembershipsCardList;
