import React, { useContext } from 'react';
import { GlobalContext } from '../../contexts/global/global.context';
import { MembershipsContentProps } from '../../pages/memberships';
import { GlobalContextProps } from '../../typing/common/interfaces/contexts.interface';
import Animate from '../molecules/animate.molecule';
import Image from 'next/image';
import { ServiceMembershipCard } from '../../typing/gql/graphql';

interface Props {
	chosenMembership: ServiceMembershipCard;
}

export const MembershipResult: React.FC<Props> = ({ chosenMembership }) => {
	const { pageContent } =
		useContext<GlobalContextProps<MembershipsContentProps>>(GlobalContext);

	if (!pageContent) {
		return null;
	}
	if (!chosenMembership) {
		return null;
	}

	const pageData = pageContent.page[0];
	const { logoDark } = pageData;

	return (
		<>
			<section
				id="membershipResult"
				className="flex w-full flex-col items-center rounded-2xl bg-white py-4 sm:h-[600px] lg:h-[600px]"
			>
				<Animate>
					<div className="flex w-full flex-col items-center border-b bg-white sm:items-start">
						<div className="image-wrapper relative mb-4 h-[50px] w-[150px] md:h-[80px] md:w-[230px]">
							<Image
								alt={logoDark?.image?.asset?.altText || ''}
								fill={true}
								priority={true}
								src={logoDark?.image?.asset?.url || ''}
							/>
						</div>
					</div>
				</Animate>

				<Animate>
					<div className="image-wrapper relative mt-8 h-[128px] w-[128px] md:h-[196px] md:w-[196px]">
						<Image
							alt={chosenMembership?.membershipIcon?.asset?.altText || ''}
							fill={true}
							priority={true}
							src={chosenMembership?.membershipIcon?.asset?.url || ''}
						/>
					</div>
				</Animate>

				<Animate>
					<div className="flex flex-col items-center gap-4 py-5 lg:py-5">
						<p className="subtitle text-primary-shade-1 px-6 pb-4 text-center sm:pb-8">
							Your inquiry was successfully submitted!
						</p>
						<p className="para sm:[w-3/4] w-[85%] text-center !font-thin sm:px-6 sm:pr-6 lg:w-[50%]">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim venias.
						</p>
					</div>
				</Animate>
			</section>
		</>
	);
};
