import React from 'react';
import Image from 'next/image';
import CtaWrapper from 'components/molecules/cta-wrapper.molecule';
import Link from 'next/link';
import Animate from 'components/molecules/animate.molecule';
import clsx from 'clsx';
import { buttonHoverStyle } from '@lib/styles/button.style';

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
			<Animate cascade>
				<Link href={props.hRef}>
					<div className="flex w-full transform flex-col rounded-xl rounded-t-3xl bg-white shadow-lg transition duration-500 hover:scale-105">
						<div className="basis-3/4  ">
							<Image
								src={props.thumbnailSrc}
								alt={props.thumbnailAltText}
								width="2000"
								height="1000"
								style={{
									width: '100%',
								}}
								className="h-72 w-full  rounded-t-lg object-cover  md:h-96 "
							/>

							<div className=" basis-1/4   pb-7 text-center  lg:pb-9 ">
								<h3 className=" text-primary-shade-1 p-4 py-5 text-center lg:py-6  ">
									{props.title}
								</h3>
								<CtaWrapper.CTA
									className={clsx(
										`bg-primary-shade-1  button  text-white`,
										buttonHoverStyle
									)}
								>
									<p className={clsx('font-normal')}>{props.buttonText}</p>
								</CtaWrapper.CTA>
							</div>
						</div>
					</div>
				</Link>
			</Animate>
		</>
	);
};
export default ServiceCard;
