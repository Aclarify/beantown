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
				className="fixed inset-0 z-50  flex items-center  justify-center bg-black bg-opacity-30 backdrop-blur-sm"
			>
				<div
					ref={ref}
					className="w-90 my-6 mx-2 h-[90vh] max-h-[600px]  items-center overflow-y-scroll   rounded-xl border bg-white p-2 md:w-[50vw] lg:w-[30vw]"
				>
					<div className="flex justify-end">
						<button
							className="fixed pr-4 text-3xl text-black"
							aria-label="Close testimonial"
							onClick={onClose}
						>
							X
						</button>
					</div>
					<div className="mt-4 flex justify-center">
						<Image
							alt="An image for quotes in testimonial card"
							width={40}
							height={45}
							src="/images/home/testimonials-quote.svg"
						/>
					</div>
					<div className="flex flex-col items-center gap-2 pt-10 pb-6">
						<h1 className="subtitle-2 md:subtitle-4 text-primary-black">
							{clientName}
						</h1>
						<h4 className="md:para-3 para-4 text-gray-shade-2">
							{clientDetails}
						</h4>
						<div className="para-4 md:para-3 text-primary-black overflow-y-scroll pt-10  text-center ">
							<span>{reviewComments}</span>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
export default TestimonialModal;
