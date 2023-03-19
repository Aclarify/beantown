import React, { useContext, useEffect, useState } from 'react';
import SectionContentWrapper from 'components/molecules/section-content-wrapper.molecule';
import MembershipsCardList from './memberships-card-list.content';
import MembershipsDetailsSection from '../membership-details/memberships-details.section';
import { MembershipsContentProps } from '../../../../pages/memberships';
import { GlobalContextProps } from '../../../../typing/common/interfaces/contexts.interface';
import { GlobalContext } from '../../../../contexts/global/global.context';
import { ServiceMemberships } from '../../../../typing/gql/graphql';
import { MembershipsContext } from '../../../../contexts/memberships/memberships.context';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MembershipServiceCategories from './membership-service-category.content';

const MembershipsSelectionSection = () => {
	const { pageContent } =
		useContext<GlobalContextProps<MembershipsContentProps>>(GlobalContext);

	const [activeServiceMembership, setActiveServiceMembership] =
		useState<ServiceMemberships>();

	const [show, setShow] = useState(true);

	useEffect(() => {
		setShow(false);
		setTimeout(() => {
			setShow(true);
		}, 100);
	}, [activeServiceMembership]);

	if (!pageContent) {
		return null;
	}

	const pageData = pageContent.page[0];
	const { serviceMembershipsSection } = pageData;
	if (!serviceMembershipsSection) {
		return null;
	}

	return (
		<MembershipsContext.Provider
			value={{
				activeServiceMembership:
					activeServiceMembership || serviceMembershipsSection[0],
				setActiveServiceMembership,
			}}
		>
			<section id="memberships-selection" className="relative z-10 ">
				<MembershipServiceCategories />
				<div
					className={`transition-all ease-in-out duration-1000${
						show
							? 'opacity-100'
							: 'translate-y-full transform opacity-0 sm:translate-x-0 sm:scale-50'
					}`}
				>
					<SectionContentWrapper>
						<MembershipsCardList />
					</SectionContentWrapper>
					<MembershipsDetailsSection />
				</div>
			</section>
		</MembershipsContext.Provider>
	);
};

export default MembershipsSelectionSection;
