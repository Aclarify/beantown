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
		<div className="py-2 min-w-[80%]">
			<Disclosure defaultOpen={props.isOpen}>
				{({ open, close }) => (
					<>
						<div
							className={`${
								open && props.isOpen
									? 'bg-white shadow-lg shadow-gray-shade-4 rounded-lg'
									: 'bg-transparent border rounded-lg'
							} `}
						>
							<Disclosure.Button
								className="flex w-full justify-between p-4 text-left "
								onClick={() => {
									if (open) {
										close();
									}
									props.handleClick();
								}}
							>
								<span
									className={`${
										open && props.isOpen
											? 'subtitle-6 lg:subtitle-4 text-primary-shade-1'
											: 'subtitle-7 lg:subtitle-4 text-gray-shade-1'
									} `}
								>
									{props.faq}
								</span>
								<ChevronDownIcon
									className={`${
										open && props.isOpen
											? 'rotate-180 transform'
											: 'text-gray-shade-1'
									} lg:h-8 lg:w-8 h-6 w-6 text-black-500`}
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
								<Disclosure.Panel className="p-4 para-4 lg:para-3 text-primary-shade-1 bg-white rounded-b-lg">
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
