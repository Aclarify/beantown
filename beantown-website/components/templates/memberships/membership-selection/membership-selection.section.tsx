import React, { useContext, useEffect, useState } from 'react';
import SectionContentWrapper from 'components/molecules/section-content-wrapper.molecule';
import MembershipsCardList from './memberships-card-list.content';
import MembershipsDetailsSection from '../membership-details/memberships-details.section';
import { MembershipsContentProps } from 'pages/memberships';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { GlobalContext } from 'contexts/global/global.context';
import { ServiceMemberships, ServiceMembershipCard } from '@typing/gql/graphql';
import { MembershipsContext } from 'contexts/memberships/memberships.context';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MembershipServiceCategories from './membership-service-category.content';

const MembershipsSelectionSection = () => {
	const { pageContent } =
		useContext<GlobalContextProps<MembershipsContentProps>>(GlobalContext);

	const [activeServiceMembership, setActiveServiceMembership] =
		useState<ServiceMemberships>();

	const [selectedMembership, setSelectedMembership] =
		useState<ServiceMembershipCard | null>(null);

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
				selectedMembership: selectedMembership,
				setActiveServiceMembership,
				setSelectedMembership,
			}}
		>
			<section id="memberships-selection" className="relative z-10">
				<SectionContentWrapper>
					<MembershipServiceCategories />
				</SectionContentWrapper>

				<SectionContentWrapper>
					<MembershipsCardList />
				</SectionContentWrapper>

				<MembershipsDetailsSection />
			</section>
		</MembershipsContext.Provider>
	);
};

export default MembershipsSelectionSection;
