import React from 'react';

export default function FooterCtaHeatingCooling() {
	return (
		<section id="footercta ">
			<div className="hidden lg:flex items-center justify-center h-auto ">
				<img
					className="relative animate-pulse"
					src="images/cooling-and-heating-service-page/footer-cta/Desktop_CTA.svg"
				/>
				<div className="absolute  ml-96 w-1/2">
					<div className=" space-y-4  bottom-20 inset-x-0 p-2  lg:p-12">
						{' '}
						<div className="flex-col ">
							<div className="flex-col space-y-2 ">
								<p className="text-2xl  lg:text-4xl font-bold text-center">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
								</p>
								<p className="text-sm  lg:text-2xl text-center">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
								</p>
							</div>
							<div className="flex justify-center pt-4">
								<button className="border rounded-lg text-xs  lg:text-xl bg-[#15284C] text-white  p-2">
									Book Now
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="flex flex-col lg:hidden ">
				<div className="object-contain">
					<img src="images/cooling-and-heating-service-page/footer-cta/footer-cta-image.svg" />
				</div>
				<div className="relative ">
					<img
						className="object-contain "
						src="images/cooling-and-heating-service-page/footer-cta/footer-cta-curve-image.svg"
					/>

					<div className="absolute left-20 top-24">
						<div className=" space-y-4  bottom-20 inset-x-0 p-2  lg:p-12">
							{' '}
							<div className="flex-col ">
								<div className="flex-col space-y-2 ">
									<p className="text-2xl  lg:text-4xl font-bold text-center">
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
									</p>
									<p className="text-sm  lg:text-2xl text-center">
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
									</p>
								</div>
								<div className="flex justify-center pt-4">
									<button className="border rounded-lg text-xs  lg:text-xl bg-[#15284C] text-white  p-2">
										Book Now
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
