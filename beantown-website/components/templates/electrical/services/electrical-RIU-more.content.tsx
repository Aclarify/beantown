import React, { useContext } from 'react'
import Image from 'next/image';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { ElectricalContentProps } from 'pages/electrical';

function ElectricalRIULMoreContent() {
	 const { pageContent } =
			useContext<GlobalContextProps<ElectricalContentProps>>(GlobalContext);
		
		if (!pageContent) {
			return null;
		}

		const pageData = pageContent.page[0];
	return (
		<section id="electrical-services-list" className=" mb-80  mt-auto">
			<div className=" container  mx-auto h-auto w-full rounded-3xl bg-[#FFFFFF]  p-8    shadow-[rgba(29,_39,_87,_0.04)_0px_6px_10px]  ">
				<p className="title-6 md:title-3 text-primary-black pb-4  sm:pb-8">
					{'Repairs, Installation, Upgrades and More:'}
				</p>
				<div id="list-container" className="">
					<div className="grid  w-full  grid-cols-1 sm:grid-cols-2  md:grid-cols-3 ">
						{/* list of Electrical services from cms */}
						<div id="list-items" className="flex">
							<div>
								<Image
									src={
										'/images/electrical/services/electrical-services-list-icon.svg'
									}
									alt={'electrical-services-list-icon-image'}
									width={'32'}
									height={'32'}
								/>
							</div>
							<div className="para-4 md:para-3 text-gray-shade-1 ">
								<p>{'Light Fixture Repairs and Installation'}</p>
							</div>
						</div>
						<div id="list-items" className="flex">
							<div>
								<Image
									src={
										'/images/electrical/services/electrical-services-list-icon.svg'
									}
									alt={'electrical-services-list-icon-image'}
									width={'32'}
									height={'32'}
								/>
							</div>
							<div className="para-4 md:para-3 text-gray-shade-1  text-left">
								<p>{'Recessed Lighting Repairs and Installation'}</p>
							</div>
						</div>
						<div id="list-items" className="flex">
							<div>
								<Image
									src={
										'/images/electrical/services/electrical-services-list-icon.svg'
									}
									alt={'electrical-services-list-icon-image'}
									width={'32'}
									height={'32'}
								/>
							</div>
							<div className="para-4 md:para-3 text-gray-shade-1  text-left">
								<p>{'Light Fixture Repairs and Installation'}</p>
							</div>
						</div>
						<div id="list-items" className="flex">
							<div>
								<Image
									src={
										'/images/electrical/services/electrical-services-list-icon.svg'
									}
									alt={'electrical-services-list-icon-image'}
									width={'32'}
									height={'32'}
								/>
							</div>
							<div className="para-4 md:para-3 text-gray-shade-1  text-left">
								<p>{'Bathroom Exhaust Fan Repairs and Installation'}</p>
							</div>
						</div>
						<div id="list-items" className="flex">
							<div>
								<Image
									src={
										'/images/electrical/services/electrical-services-list-icon.svg'
									}
									alt={'electrical-services-list-icon-image'}
									width={'32'}
									height={'32'}
								/>
							</div>
							<div className="para-4 md:para-3 text-gray-shade-1  text-left ">
								<p>
									{'Carbon Monoxide Detector Installation and Replacements'}
								</p>
							</div>
						</div>
						<div id="list-items" className="flex">
							<div>
								<Image
									src={
										'/images/electrical/services/electrical-services-list-icon.svg'
									}
									alt={'electrical-services-list-icon-image'}
									width={'32'}
									height={'32'}
								/>
							</div>
							<div className="para-4 md:para-3 text-gray-shade-1  text-left ">
								<p>
									{'Carbon Monoxide Detector Installation and Replacements'}
								</p>
							</div>
						</div>
						<div id="list-items" className="flex">
							<div>
								<Image
									src={
										'/images/electrical/services/electrical-services-list-icon.svg'
									}
									alt={'electrical-services-list-icon-image'}
									width={'32'}
									height={'32'}
								/>
							</div>
							<div className="para-4 md:para-3 text-gray-shade-1  text-left ">
								<p>
									{'Carbon Monoxide Detector Installation and Replacements'}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ElectricalRIULMoreContent;