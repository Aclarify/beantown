import React, { useRef } from 'react';
import Image from 'next/image';
import useEscapeKey from '@lib/hooks/handle-escape-key.hook';
import useOutsideClick from '@lib/hooks/handle-outside-click.hook';

const TestimonialModal = ({
	visible,
	onClose,
	clientName,
	clientDetails,
	reviewComments,
}: any) => {
	const sendNo = () => onClose();

	useEscapeKey(sendNo);
	const ref = useRef(null);
	useOutsideClick(sendNo, ref);

	if (!visible) return null;
	return (
		<>
			<section
				id="model"
				className="fixed inset-0 bg-black  bg-opacity-30 backdrop-blur-sm  flex justify-center items-center z-50"
			>
				<div
					ref={ref}
					className="bg-white p-2 rounded-xl w-90 items-center  my-6 mx-2   border h-[90vh] max-h-[600px] overflow-y-scroll md:w-[50vw] lg:w-[30vw]"
				>
					<div className="flex justify-end">
						<button
							className="text-black text-3xl pr-4 fixed"
							aria-label="Close testimonial"
							onClick={onClose}
						>
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
						<h1 className="subtitle-2 md:subtitle-4 text-primary-black">
							{clientName}
						</h1>
						<h4 className="md:para-3 para-4 text-gray-shade-2">
							{clientDetails}
						</h4>
						<div className="pt-10 para-4 md:para-3 text-center text-primary-black  overflow-y-scroll ">
							<span>{reviewComments}</span>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
export default TestimonialModal;
