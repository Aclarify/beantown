import React, { useContext } from 'react';
import Image from 'next/image';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { MembershipsContentProps } from 'pages/memberships';
import { MembershipsContext } from '../../../../contexts/memberships/memberships.context';
import Animate from 'components/molecules/animate.molecule';
import useWindowDimensions from '../../../../lib/hooks/use-window-dimensions.hook';

const MembershipsDetailsList = () => {
	const { pageContent } =
		useContext<GlobalContextProps<MembershipsContentProps>>(GlobalContext);

	const { width } = useWindowDimensions();

	const { activeServiceMembership } = useContext(MembershipsContext);

	if (!pageContent) {
		return null;
	}

	if (!activeServiceMembership) {
		return null;
	}

	return (
		<section
			id="electrical-services-list"
			className=" mb-[5em] mt-[-1em] h-auto w-full rounded-3xl bg-white py-8 px-4 shadow-[rgba(29,_39,_87,_0.08)_4px_8px_60px] 	"
		>
			<div className="container lg:p-[60px] ">
				<div id="list-container" className="">
					<Animate>
						<div className="3xl:grid-cols-2  grid  w-full  grid-cols-1 gap-y-2 gap-x-2 lg:grid-cols-2 xl:grid-cols-2  ">
							{activeServiceMembership?.serviceMembershipDetails?.map(
								(item: any, index: number) => {
									return (
										<div
											key={index}
											id="list-items"
											className=" text-gray-shade-1 flex items-start gap-x-2"
										>
											<Image
												src={
													'/images/memberships/membership-details/details-list-icon.svg'
												}
												alt={'memberships-details-list-icon-image'}
												width={24}
												height={24}
												className="h-[24px] w-[24px] flex-shrink-0 lg:h-[32px] lg:w-[32px] lg:pt-[4px]"
											/>
											<span className="text-gray-shade-1 list-items pl-2 text-left">
												{item}
											</span>
										</div>
									);
								}
							)}
						</div>
					</Animate>
				</div>
			</div>
		</section>
	);
};

export default MembershipsDetailsList;
