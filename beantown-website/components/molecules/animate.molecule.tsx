import React from 'react';
import { Transition } from '@headlessui/react';
import useInView from '@lib/hooks/useInView';
import clsx from 'clsx';

interface Props {
	children: React.ReactNode;
	bottom?: boolean;
	left?: boolean;
	cascade?: boolean;
	threshold?: number;
	className?: string | string[];
}

const Animate: React.FC<Props> = ({
	children,
	bottom,
	left,
	cascade,
	threshold,
	className,
}) => {
	const [ref, inView] = useInView(threshold);

	const initialStyle = 'opacity-0';
	const finalStyle = 'opacity-100';
	const transitionStyle = bottom
		? 'translate-y-4'
		: left
		? 'translate-x-4'
		: '';

	const getStaggerDelay = (index: number) => {
		return cascade ? index * 100 : 0;
	};

	return (
		<div ref={ref} className="relative">
			<div className="absolute inset-0">
				<Transition
					show={inView}
					appear={true}
					className={clsx(`transition duration-300 ease-in`, className)}
				>
					{React.Children.map(children, (child, index) => (
						<Transition.Child
							enter={initialStyle}
							enterFrom={initialStyle + ' ' + transitionStyle}
							enterTo={finalStyle}
							className="transition duration-300 ease-in"
							style={{ transitionDelay: `${getStaggerDelay(index)}ms` }}
						>
							{child}
						</Transition.Child>
					))}
				</Transition>
			</div>
			<div className="opacity-0">{children}</div>
		</div>
	);
};

export default Animate;
