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
			className={clsx(
				'para-3 lg:para-2  mt-[20px] h-[52px]  w-[184px] rounded  py-1 px-4 tracking-wide  md:py-2  md:px-8  lg:mt-[40px]  lg:h-[64px]  lg:w-[198px] lg:px-8 lg:tracking-wider  ',
				props.className
			)}
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
