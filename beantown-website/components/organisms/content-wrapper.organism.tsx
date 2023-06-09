import React from 'react';
import clsx from 'clsx';
import {
	PropsWithChildren,
	PropsWithStyles,
} from '@typing/common/interfaces/components.interface';

interface TitleProps extends PropsWithStyles, PropsWithChildren {}
const Title: React.FC<TitleProps> = (props) => {
	return (
		<div className={clsx('mb-3 lg:mb-4', props.className)}>
			{props.children}
		</div>
	);
};

interface DescriptionProps extends PropsWithStyles, PropsWithChildren {}
const Description: React.FC<DescriptionProps> = (props) => {
	return <div className={clsx(props.className)}>{props.children}</div>;
};

interface DescriptionProps extends PropsWithStyles, PropsWithChildren {}
const CTA: React.FC<DescriptionProps> = (props) => {
	return (
		<div className={clsx('mt-5 lg:mt-10', props.className)}>
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
