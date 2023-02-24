import React, { useContext } from 'react'
import Image from 'next/image';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { ElectricalContentProps } from 'pages/electrical';

function ElectricalServicesList() {
	const { pageContent } =
		useContext<GlobalContextProps<ElectricalContentProps>>(GlobalContext);

	if (!pageContent) {
		return null;
	}

	const pageData = pageContent.page[0];
	const { servicesList, servicesListTitle } = pageData;	
	return (
		<section id="electrical-services-list" className=" mb-80  mt-28	">
			<div className=" container  mx-auto h-auto w-full rounded-3xl bg-[#FFFFFF]  p-8    shadow-[rgba(29,_39,_87,_0.04)_0px_6px_10px]  ">
				<p className="title-6 md:title-3 text-primary-black pb-4  sm:pb-8">
					{servicesListTitle}
				</p>
				<div id="list-container" className="">
					<div className="grid   w-full  grid-cols-1 sm:grid-cols-2  md:grid-cols-3 ">
						
						{servicesList?.map((item: any, index: number) => {
							return (
								<div
									key={index}
									id="list-items"
									className="para-4 md:para-3 text-gray-shade-1 flex  items-center"
								>
									<Image
										src={
											'/images/electrical/services/electrical-services-list-icon.svg'
										}
										alt={'electrical-services-list-icon-image'}
										width={'32'}
										height={'32'}
									/>
									<p>{item}</p>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
}

export default ElectricalServicesList;