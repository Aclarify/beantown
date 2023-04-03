import React, { useContext } from 'react';
import Image from 'next/image';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { ElectricalContentProps } from 'pages/electrical';
import Animate from 'components/molecules/animate.molecule';

function ElectricalServicesList() {
	const { pageContent } =
		useContext<GlobalContextProps<ElectricalContentProps>>(GlobalContext);

	if (!pageContent) {
		return null;
	}

	const pageData = pageContent.page[0];
	const { servicesList, servicesListTitle } = pageData;
	return (
		<section
			id="electrical-services-list"
			className=" mb-[5em] mt-[-1em] h-auto w-full rounded-3xl bg-white py-8 px-4 shadow-[rgba(29,_39,_87,_0.08)_4px_8px_60px] 	"
		>
			<div className="container py-6 lg:p-[60px] ">
				<span className="subtitle text-primary-black pb-4  sm:pb-8">
					{servicesListTitle}
				</span>

				<div id="list-container" className="pt-8">
					<Animate>
						<div className="3xl:grid-cols-4 grid  w-full  grid-cols-1  gap-y-4 lg:grid-cols-2 xl:grid-cols-3  ">
							{servicesList?.map((item: any, index: number) => {
								return (
									<div
										key={index}
										id="list-items"
										className=" text-gray-shade-1 flex items-start gap-x-2"
									>
										<Image
											src={
												'/images/electrical/services/electrical-services-list-icon.svg'
											}
											alt={'electrical-services-list-icon-image'}
											width={24}
											height={24}
											className="h-[24px] w-[24px] flex-shrink-0 md:h-[32px] md:w-[32px] md:pt-[4px]"
										/>
										<span className="text-gray-shade-1 list-items pl-2 text-left">
											{item}
										</span>
									</div>
								);
							})}
						</div>
					</Animate>
				</div>
			</div>
		</section>
	);
}

export default ElectricalServicesList;
