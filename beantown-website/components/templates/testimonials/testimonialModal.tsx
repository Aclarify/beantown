import React from 'react';
import Image from 'next/image'
import ReadMoreReadLess from 'components/molecules/show-more-show-less.molecule';
// interface Props {
// 	clickedClientName: string;
// 	clickedClientDetail: any;
// 	clickedClientReview: string;
// }

const TestimonialModal = ({visible, onClose}:any ) => {
	
		if(!visible) return null
	return (
		<>
			<section
				id="model"
				className="  fixed inset-0 bg-black  bg-opacity-30 backdrop-blur-sm  flex justify-center items-center"
			>
				<div className="bg-white p-2 rounded-xl  w-96 h-auto  items-center  my-6   border  ">
					<div className="flex justify-end">
						<button className="text-black text-xl " onClick={onClose}>
							X
						</button>
					</div>
					<div className="flex justify-center mt-4">
						<Image
							alt="An image for quotes in testimonial card"
							width={40}
							height={45}
							src="/images/home_page/testimonialCardsImageUnionVector.svg"
						/>
					</div>
					<div className="flex flex-col gap-2 items-center pt-10 pb-6">
						<div>
							<h1 className="subtitle-2 md:subtitle-4 text-primary-black">
								{'Sam'}
							</h1>
						</div>
						<div>
							<h4 className="md:para-3 para-4 text-gray-shade-2">
								{'Product Engineer'}
							</h4>
						</div>
						<div className="pt-10 para-4 md:para-3 text-center text-primary-black  overflow-y-scroll ">
							<span>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Corporis magnam deleniti culpa facilis, temporibus provident,
								dignissimos modi assumenda voluptas quod quam nobis aspernatur
								explicabo veniam placeat beatae. Voluptatibus aspernatur sequi
								nesciunt laudantium, atque amet impedit, officiis reiciendis
								odio possimus aut laborum tempora aperiam eius pariatur ipsa
								itaque? In, at exercitationem.
							</span>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
export default TestimonialModal;