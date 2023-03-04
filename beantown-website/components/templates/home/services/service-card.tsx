import React from 'react';
import Image from 'next/image';
import CtaWrapper from 'components/molecules/cta-wrapper.molecule';
import Link from 'next/link';

interface Props {
	title: string;
	buttonText: string;
	hRef: string;
	thumbnailSrc: string;
	thumbnailAltText: string;
}

const ServiceCard: React.FC<Props> = (props) => {
	return (
		<>
			<div className="flex w-full flex-col rounded-xl rounded-t-3xl bg-white shadow-lg">
				<div className="basis-3/4 ">
					<Image
						src={props.thumbnailSrc}
						alt={props.thumbnailAltText}
						width="2000"
						height="1000"
						style={{
							width: '100%',
						}}
						className="h-72 w-full rounded-t-lg object-cover md:h-96 "
					/>
					<div className=" basis-1/4   pb-7 text-center  lg:pb-9 ">
						<h1 className="title-5  lg:title-3 text-primary-shade-1 p-4 py-5 text-center lg:py-6  ">
							{props.title}
						</h1>
						<CtaWrapper.CTA className="bg-primary-shade-1 para-3 lg:para-2 h-[52px] w-[184px] rounded-lg py-1  px-4 tracking-wide text-white  md:py-2 md:px-8 lg:h-[64px] lg:w-[196px] lg:tracking-wider ">
							<Link href={props.hRef}>
								<p>{props.buttonText}</p>
							</Link>
						</CtaWrapper.CTA>
					</div>
				</div>
			</div>
		</>
	);
};
export default ServiceCard;
