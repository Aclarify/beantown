import React, { useContext } from 'react';
import Image from 'next/image';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { ElectricalContentProps } from 'pages/electrical';
import Animate from 'components/molecules/animate.molecule';
import StaticImageWrapper from 'components/molecules/static-image-wrapper.molecule';
import ListIconImage from 'public/images/electrical/services/electrical-services-list-icon.svg';

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

				<div id="list-container" className="">
					<Animate>
						<div className="3xl:grid-cols-4 grid  w-full  grid-cols-1  gap-y-2 lg:grid-cols-2 xl:grid-cols-3  ">
							{servicesList?.map((item: any, index: number) => {
								return (
									<div
										key={index}
										id="list-items"
										className=" text-gray-shade-1 flex items-center"
									>
										<div className="image-wrapper relative h-[32px] min-w-[32px]">
											<StaticImageWrapper
												src={ListIconImage}
												altText={'electrical-services-list-icon-image'}
											/>
										</div>
										<span className="list-items pl-2">{item}</span>
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
