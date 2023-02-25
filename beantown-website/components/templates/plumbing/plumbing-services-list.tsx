import React, { useContext } from 'react';
import Image from 'next/image';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { PlumbingContentProps } from 'pages/plumbing';
import { GlobalContext } from '@contexts/global/global.context';

const PlumbingServicesList = () => {
	const { pageContent } =
		useContext<GlobalContextProps<PlumbingContentProps>>(GlobalContext);

	if (!pageContent) {
		return null;
	}
	const pageData = pageContent.page[0];
	const { servicesList, servicesListTitle } = pageData;
	return (
		<section
			id="plumbing-services-list"
			className=" mt-[-2em] sm:mt-[0em]  mb-[5em] h-auto w-full rounded-3xl bg-white shadow-[rgba(29,_39,_87,_0.08)_4px_8px_60px]"
		>
			<div className="container px-2 py-4  lg:p-[44px]  ">
				<p className="title-6 md:title-4 text-primary-black pb-4  sm:pb-8">
					{servicesListTitle}
				</p>
				<div id="list-container" className="">
					<div className="grid  grid-cols-2   md:grid-cols-4">
						{servicesList?.map((listItem, index) => {
							return (
								<div id="list-items" className="flex gap-2 " key="index">
									<Image
										src={'/images/plumbing/plumbing-services-list-icon.svg'}
										alt={'plumbing-services-list-icon-image'}
										width={'24'}
										height={'24'}
										className="w-[20px] h-[20px] sm:w-[24] sm:h-[24]"
									/>

									<p className="para-4 md:para-3 text-gray-shade-1  text-left">
										{listItem}
									</p>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};

export default PlumbingServicesList;
