import React, { useContext } from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { MembershipsContentProps } from '../../../../pages/memberships';
import { MembershipsContext } from '../../../../contexts/memberships/memberships.context';
import Animate from 'components/molecules/animate.molecule';

const MembershipServiceCategories = () => {
	const { pageContent } =
		useContext<GlobalContextProps<MembershipsContentProps>>(GlobalContext);

	const { activeServiceMembership, setActiveServiceMembership } =
		useContext(MembershipsContext);

	if (!pageContent) {
		return null;
	}

	const pageData = pageContent.page[0];
	const { serviceMembershipsSection } = pageData;
	if (!serviceMembershipsSection) {
		return null;
	}

	return (
		<section
			id="membership-service-category"
			className="relative mb-20 flex w-full justify-center"
		>
			<Animate>
				<div
					id="categories-container"
					className="grid w-full grid-cols-2 gap-4 rounded-2xl border-0 sm:w-auto sm:grid-cols-4 sm:border sm:p-3"
				>
					{serviceMembershipsSection?.map((serviceCategory, index) => {
						return (
							serviceCategory && (
								<button
									key={index}
									onClick={() => setActiveServiceMembership(serviceCategory)}
									className={`${
										serviceCategory == activeServiceMembership
											? 'bg-secondary-shade-1 text-white'
											: 'text-primary-shade-1'
									} tab-item rounded-lg border py-3 px-4 sm:border-0 sm:px-8 sm:py-4`}
								>
									{serviceCategory?.name}
								</button>
							)
						);
					})}
				</div>
			</Animate>
		</section>
	);
};

export default MembershipServiceCategories;
