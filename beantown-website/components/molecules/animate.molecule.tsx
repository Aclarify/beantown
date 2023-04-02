import React from 'react';
import { Transition } from '@headlessui/react';
import useInView from '@lib/hooks/useInView';

interface Props {
	children: React.ReactNode;
	bottom?: boolean;
	left?: boolean;
	cascade?: boolean;
	threshold?: number;
}

const Animate: React.FC<Props> = ({
	children,
	bottom,
	left,
	cascade,
	threshold,
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
			<div className="absolute h-full w-full">
				<Transition
					show={inView}
					appear={true}
					className="transition duration-300 ease-in"
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
