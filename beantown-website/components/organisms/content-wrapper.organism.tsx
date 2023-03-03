import React from 'react';
import clsx from 'clsx';
import {
	PropsWithChildren,
	PropsWithStyles,
} from '@typing/common/interfaces/components.interface';

interface TitleProps extends PropsWithStyles, PropsWithChildren {}
const Title: React.FC<TitleProps> = (props) => {
	return (
		<div
			className={clsx(
				'title-5 lg:title-2 mb-2 px-2 md:px-[9rem] lg:mb-4 lg:px-0 lg:leading-[70px]',
				props.className
			)}
		>
			{props.children}
		</div>
	);
};

interface DescriptionProps extends PropsWithStyles, PropsWithChildren {}
const Description: React.FC<DescriptionProps> = (props) => {
	return (
		<div className={clsx('para-4 lg:para-2 lg:leading-9', props.className)}>
			{props.children}
		</div>
	);
};

interface DescriptionProps extends PropsWithStyles, PropsWithChildren {}
const CTA: React.FC<DescriptionProps> = (props) => {
	return (
		<div
			className={clsx(' mt-8 pb-[1em] lg:mt-[40px] lg:pb-0 ', props.className)}
		>
			{props.children}
		</div>
	);
};

interface DetailProps extends PropsWithStyles, PropsWithChildren {}

const ContentWrapper = (props: DetailProps) => {
	return <div className={clsx(props.className)}>{props.children}</div>;
};

ContentWrapper.Title = Title;
ContentWrapper.Description = Description;
ContentWrapper.CTA = CTA;

export default ContentWrapper;
