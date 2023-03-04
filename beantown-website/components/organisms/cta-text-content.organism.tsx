import RichText from 'components/molecules/rich-text.molecule';
import React from 'react';
import ContentWrapper from './content-wrapper.organism';

interface IProps {
	title: string;
	description?: any;
	children: React.ReactNode;
}
const CTATextContent: React.FC<IProps> = ({ title, description, children }) => {
	return (
		<ContentWrapper className="flex flex-col justify-between px-14 text-center md:px-4 lg:px-20 lg:text-left">
			<ContentWrapper.Title className="  mb-2  lg:mb-4 ">
				<h1 className="title-5 lg:title-2 lg:leading-[70px]">{title}</h1>
			</ContentWrapper.Title>
			{description && (
				<ContentWrapper.Description>
					{typeof description === 'string' ? (
						<span>{description}</span>
					) : (
						<RichText value={description?.contentRaw} />
					)}
				</ContentWrapper.Description>
			)}
			<ContentWrapper.CTA className="pb-[1em] lg:pb-0">
				{children}
			</ContentWrapper.CTA>
		</ContentWrapper>
	);
};

interface ICTAButtonProps {
	text: string;
	href?: string;
	textColor: string;
	bgColor: string;
}
export const CTAButton: React.FC<ICTAButtonProps> = ({
	text,
	href,
	textColor,
	bgColor,
}) => {
	return (
		<button
			className={`para-3 lg:para-2 h-[52px] w-[184px] rounded-lg ${bgColor} ${textColor} py-1 px-4  tracking-wide  md:py-2  md:px-8 lg:h-[64px] lg:w-[198px]  lg:tracking-wider`}
		>
			{text}
		</button>
	);
};

export default CTATextContent;
