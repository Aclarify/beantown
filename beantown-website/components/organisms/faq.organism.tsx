import React, { useState } from 'react';
import Button from 'components/atoms/button.atom';
import { Maybe, TitleDescription } from '@typing/gql/graphql';
import FAQDisclosure from './faq-disclosure.organism';
import ContentWrapper from './content-wrapper.organism';
import CtaWrapper from 'components/molecules/cta-wrapper.molecule';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
	backgroundImage: string;
	faqTitle: string;
	faqDescription: string;
	faqButtonText: string;
	faqsButtonTextColour: string;
	faqsButtonBgColour: string;
	faqList: Maybe<Array<Maybe<TitleDescription>>>;
}

const FAQ: React.FC<IProps> = (props) => {
	const [indexToBeOpen, setIndexToBeOpen] = useState(0);
	function handleFaqClick(index: number) {
		if (index == indexToBeOpen) {
			return;
		} else {
			setIndexToBeOpen(index);
		}
	}
	return (
		<div
			className="relative  mt-16 flex  items-center  align-middle   "
			style={{
				backgroundImage: `url(${props.backgroundImage})`,
				backgroundPosition: 'center',
			}}
		>
			<div className="lg:flex">
				<div className="flex  flex-col justify-center text-center lg:text-left ">
					<ContentWrapper>
						<ContentWrapper.Title className="mb-[8px] lg:mb-[16px]">
							<h1 className="title-5 lg:title-2 text-primary-black mt-10">
								{props.faqTitle}
							</h1>
						</ContentWrapper.Title>
						<ContentWrapper.Description>
							<p className="para-4 lg:para-2 text-primary-shade-1 my-4 flex flex-wrap justify-center lg:w-2/3">
								{props.faqDescription}
							</p>
						</ContentWrapper.Description>
						<ContentWrapper.CTA className="mt-[32px]">
							<CtaWrapper.CTA
								className={`${props.faqsButtonTextColour} ${props.faqsButtonBgColour} 
					para-3 lg:para-2 h-[52px] w-[184px] rounded-lg py-1 px-4 tracking-wide md:py-2  md:px-8  lg:h-[64px] lg:w-[210px] lg:tracking-wider`}
							>
								<p>{props.faqButtonText}</p>
							</CtaWrapper.CTA>
						</ContentWrapper.CTA>
					</ContentWrapper>
				</div>

				<div className=" w-full pt-4 lg:pt-20 ">
					{props.faqList?.map((faqs, index) => {
						return (
							<div key={index} className="w-full rounded-2xl p-2">
								<FAQDisclosure
									isOpen={index === indexToBeOpen}
									faq={faqs?.titleText || ''}
									faqAnswer={faqs?.description || ''}
									handleClick={() => handleFaqClick(index)}
								/>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default FAQ;
