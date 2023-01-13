import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';
import RichText from 'components/molecules/rich-text.molecule';
interface Props {
	faq: string;
	faqAnswer: string;
}
const FAQDisclosure: React.FC<Props> = (props) => {
	return (
		<div className="py-2 bg-blue-100 ">
			<Disclosure>
				{({ open }) => (
					<>
						<Disclosure.Button className="flex border-b-2 w-full justify-between rounded-lg  px-4 py-2 text-left text-sm font-medium text-black-900 hover:bg-black-200 focus:outline-none focus-visible:ring focus-visible:ring-black-500 focus-visible:ring-opacity-75">
							<span>{props.faq}</span>
							<ChevronUpIcon
								className={`${
									open ? 'rotate-180 transform' : ''
								} h-5 w-5 text-black-500`}
							/>
						</Disclosure.Button>
						<Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-black-500 bg-white">
							<RichText value={props.faqAnswer} />
						</Disclosure.Panel>
					</>
				)}
			</Disclosure>
		</div>
	);
};
export default FAQDisclosure;
