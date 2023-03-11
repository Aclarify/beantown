import React from 'react';
import clsx from 'clsx';
import {
	PropsWithChildren,
	PropsWithStyles,
} from '@typing/common/interfaces/components.interface';

interface CTAProps extends PropsWithStyles, PropsWithChildren {
	onClick?: () => void;
}
const CTA: React.FC<CTAProps> = (props) => {
	return (
		<button
			onClick={props.onClick}
			className={clsx(props.className, {
				'mt-[20px]  text-white': !props.className,
			})}
		>
			{props.children}
		</button>
	);
};

interface ButtonProps extends PropsWithStyles, PropsWithChildren {}

const CtaWrapper = (props: ButtonProps) => {
	return <div className={clsx(props.className)}>{props.children}</div>;
};

CtaWrapper.CTA = CTA;

export default CtaWrapper;
