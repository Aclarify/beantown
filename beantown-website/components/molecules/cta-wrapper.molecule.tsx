import React from 'react';
import clsx from 'clsx';
import {
	PropsWithChildren,
	PropsWithStyles,
} from '@typing/common/interfaces/components.interface';

interface CTAProps extends PropsWithStyles, PropsWithChildren {}
const CTA: React.FC<CTAProps> = (props) => {
	return (
		<button
			className={clsx(props.className, {
				'para-3 lg:para-2 mt-[20px] rounded py-1 px-4 tracking-wide text-white md:px-6 md:py-2 lg:mt-[40px] lg:px-8 lg:tracking-wider':
					!props.className,
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
