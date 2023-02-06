import { Disclosure, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
interface Props {
	faq: string;
	faqAnswer: string;
	isOpen?: boolean;
	handleClick: () => void;
}

const FAQDisclosure: React.FC<Props> = (props) => {
	return (
		<div className="py-2 rounded-lg">
			<Disclosure defaultOpen={props.isOpen}>
				{({ open, close }) => (
					<>
						<div
							className={`${
								open && props.isOpen
									? 'bg-white'
									: 'bg-transparent border rounded-lg'
							} `}
						>
							<Disclosure.Button
								className="flex w-full justify-between rounded-lg  px-4 py-2 text-left subtitle-4 lg:subtitle-2 text-primary-shade-1 hover:bg-black-200 focus:outline-none focus-visible:ring focus-visible:ring-black-500 focus-visible:ring-opacity-75"
								onClick={() => {
									if (open) {
										close();
									}
									props.handleClick();
								}}
							>
								<span>{props.faq}</span>
								<ChevronDownIcon
									className={`${
										open && props.isOpen ? 'rotate-180 transform' : ''
									} h-5 w-5 text-black-500`}
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
								<Disclosure.Panel className="p-4 para-4 lg:para-3 text-primary-shade-1 bg-white">
									<div className="border-t-2 pt-2">
										<span>{props.faqAnswer} </span>
									</div>
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
