import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';
import RichText from 'components/molecules/rich-text.molecule';
interface Props {
	faq: string;
	faqAnswer: string;
	isOpen?: boolean;
}
const FAQDisclosure: React.FC<Props> = (props) => {
	return (
		<div className="py-2  bg-white  rounded-lg">
			<Disclosure defaultOpen={props.isOpen}>
				{({ open }) => (
					<>
						<Disclosure.Button className="flex w-full justify-between rounded-lg  px-4 py-2 text-left subtitle-4 md:subtitle-2 text-primary-shade-1 hover:bg-black-200 focus:outline-none focus-visible:ring focus-visible:ring-black-500 focus-visible:ring-opacity-75">
							<span>{props.faq}</span>
							<ChevronUpIcon
								className={`${
									open ? 'rotate-180 transform' : ''
								} h-5 w-5 text-black-500`}
							/>
						</Disclosure.Button>
						<Disclosure.Panel className="px-4 pt-4 pb-2 para-4 md:para-3 text-primary-shade-1 bg-white">
							<RichText value={props.faqAnswer} />
						</Disclosure.Panel>
					</>
				)}
			</Disclosure>
		</div>
	);
};
export default FAQDisclosure;
