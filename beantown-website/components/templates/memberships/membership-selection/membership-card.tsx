import React, { useState } from 'react';
import Image from 'next/image';
import useWindowDimensions from '../../../../lib/hooks/use-window-dimensions.hook';
import { CheckableItem, Maybe } from '../../../../typing/gql/graphql';
import MembershipModal from '../../../organisms/membership-modal.organism';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
	title: string;
	description: string;
	price: string;
	buttonText: string;
	iconSrc: string;
	iconAltText: string;
	summaryItems: Maybe<Array<Maybe<CheckableItem>>>;
}

const MembershipCard: React.FC<IProps> = (props) => {
	const { width } = useWindowDimensions();
	const [showMembershipModal, setShowMembershipModal] = useState(false);

	const handleOnClose = () => {
		setShowMembershipModal(false);
	};
	const onMembershipClick = (membership: any) => {
		setShowMembershipModal(true);
	};

	return (
		<>
			<div className="flex h-full min-h-full w-full min-w-full flex-col content-center rounded-3xl border bg-white p-3 shadow-lg sm:p-3">
				<div className="bg-secondary-shade-3 mb-4 rounded-2xl p-4">
					<div className="mb-2 flex justify-center py-3 lg:mb-6 lg:py-5">
						<div className="image-wrapper w-[60px]  lg:h-[56px] lg:w-[80px]">
							<Image
								width={80}
								height={80}
								style={{
									width: '100%',
								}}
								src={props.iconSrc}
								alt={props.iconAltText}
							/>
						</div>
					</div>
					<div className="mb-4 flex flex-col items-center gap-1 px-4 sm:px-6">
						<h2 className="text-primary-black ">{props.title}</h2>
						<p className="text-gray-shade-1 para text-overflow-ellipsis h-[50px] overflow-hidden  text-center lg:h-[70px]">
							{props.description}
						</p>
					</div>
				</div>
				<div id="list-container" className="mb-4 p-2">
					<div className="w-full">
						{props.summaryItems?.map((item, index: number) => {
							return (
								<div
									key={index}
									id="list-items"
									className="list-items text-gray-shade-1 flex items-center p-1 sm:p-2"
								>
									{item?.isActivated ? (
										<Image
											src={'/images/memberships/icons/list-check.svg'}
											alt={'memberships-list-icon'}
											width={width > 768 ? 20 : 18}
											height={width > 768 ? 14 : 12}
										/>
									) : (
										<Image
											src={'/images/memberships/icons/list-close.svg'}
											alt={'memberships-list-icon'}
											width={width > 768 ? 17 : 15}
											height={width > 768 ? 13 : 10}
											className="mr-1"
										/>
									)}
									<p className="para-3 lg:para-2 pl-2 sm:pl-4 ">{item?.text}</p>
								</div>
							);
						})}
					</div>
				</div>
				<button
					onClick={onMembershipClick}
					className="bg-primary-shade-1 para-5 lg:para-3 mx-2 mt-auto mb-4 flex items-center rounded-xl py-4 px-4 tracking-wide text-white md:py-2 md:px-4 "
				>
					<span className="xl:para !font-thin">{props.buttonText}</span>
					<h3 className="ml-auto text-white">{props.price}</h3>
					<span className="xl:para -translate-y-[10%] self-end  xl:-translate-y-[10%] xl:-translate-y-[30%]">
						/per year
					</span>
				</button>
			</div>

			<MembershipModal onClose={handleOnClose} visible={showMembershipModal} />
		</>
	);
};
export default MembershipCard;
