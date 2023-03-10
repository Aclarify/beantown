import RichText from 'components/molecules/rich-text.molecule';
import Link from 'next/link';
import React from 'react';
import ContentWrapper from './content-wrapper.organism';

interface IProps {
	title: string;
	description?: any;
	isHero: boolean;
	children: React.ReactNode;
}
const CTATextContent: React.FC<IProps> = ({
	title,
	description,
	children,
	isHero,
}) => {
	return (
		<ContentWrapper className="flex flex-col justify-between px-14 text-center md:px-4 lg:px-20 lg:text-left">
			<ContentWrapper.Title className="  mb-2  lg:mb-4 ">
				{isHero ? <h1>{title}</h1> : <h2>{title}</h2>}
			</ContentWrapper.Title>
			{description && (
				<ContentWrapper.Description>
					{typeof description === 'string' ? (
						<p>{description}</p>
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
		<Link href={href || ''}>
			<button className={` ${bgColor} ${textColor} button`}>{text}</button>
		</Link>
	);
};

export default CTATextContent;
