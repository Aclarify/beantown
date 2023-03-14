import { Disclosure, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import Animate from 'components/molecules/animate.molecule';
interface Props {
	faq: string;
	faqAnswer: string;
	isOpen?: boolean;
	handleClick: () => void;
}

const FAQDisclosure: React.FC<Props> = (props) => {
	return (
		<div className="min-w-[80%] py-2">
			<Disclosure defaultOpen={props.isOpen}>
				{({ open, close }) => (
					<>
						<div
							className={`${
								open && props.isOpen
									? '  bg-white shadow-[rgba(44,_48,_88,_0.16)_0px_8px_200px] '
									: ' border-secondary-shade-2 border bg-transparent '
							}  rounded-lg  `}
						>
							<Disclosure.Button
								className={`${
									open && props.isOpen
										? ' text-primary-shade-1 px-4 pt-4 '
										: ' p-4 '
								} flex w-full justify-between text-left`}
								onClick={() => {
									if (open) {
										close();
									}
									props.handleClick();
								}}
							>
								<Animate>
									<p
										className={`${
											open && props.isOpen
												? ' text-primary-shade-1'
												: ' text-gray-shade-1'
										} !font-normal `}
									>
										{props.faq}
									</p>
								</Animate>
								<ChevronDownIcon
									className={`${
										open && props.isOpen
											? 'text-primary-shade-1 rotate-180 transform'
											: 'text-gray-shade-1'
									} text-black-500 h-6 w-6 lg:h-8 lg:w-8`}
								/>
							</Disclosure.Button>
							<Transition
								show={open}
								enter="duration-200 ease-out"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="duration-100 ease-in"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95"
							></Transition>
							{props.isOpen && (
								<Disclosure.Panel className="text-primary-shade-1 rounded-b-lg bg-white p-4">
									<Animate >
										<div className="border-t-2 pt-2">
											<p className="!font-thin">{props.faqAnswer} </p>
										</div>
									</Animate>
								</Disclosure.Panel>
							)}
						</div>
					</>
				)}
			</Disclosure>
		</div>
	);
};
export default FAQDisclosure;
