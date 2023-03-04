import React, { useState } from 'react';
import { Faq, Maybe } from '@typing/gql/graphql';
import FAQDisclosure from './faq-disclosure.organism';
import ContentWrapper from './content-wrapper.organism';
import CtaWrapper from 'components/molecules/cta-wrapper.molecule';
import { SCREEN_BREAKPOINTS } from '@typing/common/interfaces/devices.interface';
import useWindowDimensions from '@lib/hooks/use-window-dimensions.hook';
interface IProps extends React.HTMLAttributes<HTMLDivElement> {
	backgroundImage: string;
	faqTitle: string;
	faqDescription: string;
	faqButtonText: string;
	faqsButtonTextColour: string;
	faqsButtonBgColour: string;
	faqList: Maybe<Array<Maybe<Faq>>>;
}

const FAQOther: React.FC<IProps> = (props) => {
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
			className="relative  mt-4 flex items-center  pt-[8em]  align-middle md:mt-10   "
			style={{
				backgroundImage: `url(${props.backgroundImage})`,
				backgroundPosition: 'center',
			}}
		>
			<div className="2xl:padding-for-section 3xl:pb-[10em] px-[20px] pb-[4em] pt-8 sm:pb-[5em] md:pb-[6em] lg:flex lg:pb-[7em]">
				<div className="flex  flex-col justify-center text-center lg:text-left ">
					<ContentWrapper>
						<ContentWrapper.Title className=" mb-3 lg:mb-4">
							<h1 className="title-5 lg:title-2 text-primary-shade-1 mt-10">
								{props.faqTitle}
							</h1>
						</ContentWrapper.Title>
						<ContentWrapper.Description>
							<p className="para-4 lg:subtitle-4 text-primary-shade-1 my-4 flex flex-wrap justify-center lg:w-2/3">
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
									faq={faqs?.question || ''}
									faqAnswer={faqs?.answer || ''}
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

export default FAQOther;
