import React from 'react'
import Image from 'next/image';

function PlumbingServicesList() {
  return (
		<section id="plumbing-services-list" className="mt-20 ">
			<div className="container mx-auto h-auto w-full rounded-3xl bg-[#FFFFFF]    shadow-[rgba(29,_39,_87,_0.04)_0px_6px_10px]  ">
				<p className="title-6 md:title-3 text-primary-black pb-4  sm:pb-8">
					{'Services, Repairs and More:'}
				</p>
				<div id="list-container" className="">
					<div className="grid  grid-cols-2  sm:gap-2 md:grid-cols-4 ">
						{/* list of plumbing services from cms */}

						<div id="list-items" className="flex gap-2">
							<div>
								<Image
									src={'/images/plumbing/plumbing-services-list-icon.svg'}
									alt={'plumbing-services-list-icon-image'}
									width={'27'}
									height={'27'}
								/>
							</div>
							<div className="para-4 md:para-3 text-gray-shade-1  text-left">
								<p>{'Leak Repairs'}</p>
							</div>
						</div>
						<div id="list-items" className="flex gap-2">
							<div>
								<Image
									src={'/images/plumbing/plumbing-services-list-icon.svg'}
									alt={'plumbing-services-list-icon-image'}
									width={'27'}
									height={'27'}
								/>
							</div>
							<div className="para-4 md:para-3 text-gray-shade-1  text-left">
								<p>{'Leak Repairs'}</p>
							</div>
						</div>
						<div id="list-items" className="flex gap-2">
							<div>
								<Image
									src={'/images/plumbing/plumbing-services-list-icon.svg'}
									alt={'plumbing-services-list-icon-image'}
									width={'27'}
									height={'27'}
								/>
							</div>
							<div className="para-4 md:para-3 text-gray-shade-1  text-left">
								<p>{'Leak Repairs'}</p>
							</div>
						</div>
						<div id="list-items" className="flex gap-2">
							<div>
								<Image
									src={'/images/plumbing/plumbing-services-list-icon.svg'}
									alt={'plumbing-services-list-icon-image'}
									width={'27'}
									height={'27'}
								/>
							</div>
							<div className="para-4 md:para-3 text-gray-shade-1  text-left">
								<p>{'Leak Repairs'}</p>
							</div>
						</div>

					</div>
				</div>
			</div>
		</section>
	);
}

export default PlumbingServicesList;