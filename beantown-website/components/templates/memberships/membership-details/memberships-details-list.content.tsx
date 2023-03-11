import React, { useContext } from 'react';
import Image from 'next/image';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { MembershipsContentProps } from 'pages/memberships';
import { MembershipsContext } from '../../../../contexts/memberships/memberships.context';

const MembershipsDetailsList = () => {
	const { pageContent } =
		useContext<GlobalContextProps<MembershipsContentProps>>(GlobalContext);

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
			<div className="container py-6 lg:p-[60px] ">
				<div id="list-container" className="">
					<div className="3xl:grid-cols-2  grid  w-full  grid-cols-1 gap-y-2 lg:grid-cols-2 xl:grid-cols-2  ">
						{activeServiceMembership?.serviceMembershipDetails?.map(
							(item: any, index: number) => {
								return (
									<div
										key={index}
										id="list-items"
										className="para-4 md:para-3 text-gray-shade-1 flex items-center"
									>
										<Image
											src={
												'/images/memberships/membership-details/details-list-icon.svg'
											}
											alt={'electrical-services-list-icon-image'}
											width={'32'}
											height={'32'}
										/>
										<p className="pl-2">{item}</p>
									</div>
								);
							}
						)}
					</div>
				</div>
			</div>
		</section>
	);
};

export default MembershipsDetailsList;
