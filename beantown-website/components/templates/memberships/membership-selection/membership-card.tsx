import React from 'react';
import Image from 'next/image';
import useWindowDimensions from '../../../../lib/hooks/use-window-dimensions.hook';
import { CheckableItem, Maybe } from '../../../../typing/gql/graphql';

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

	return (
		<>
			<div className="flex w-full flex-col content-center rounded-3xl bg-white p-3 shadow-lg sm:p-3">
				<div className="bg-secondary-shade-3 mb-4 rounded-2xl p-4">
					<div className="flex justify-center py-3 lg:py-5">
						<div className="image-wrapper w-[30px]  lg:h-[56px] lg:w-[60px]">
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
					<div className="mb-4 flex flex-col items-center gap-1 px-3 sm:px-2">
						<h1 className="title-5 lg:title-2 text-primary-black ">
							{props.title}
						</h1>
						<h4 className="md:para-3 para-5 text-gray-shade-1 text-center">
							{props.description}
						</h4>
					</div>
				</div>
				<div id="list-container" className="mb-4 p-2">
					<div className="w-full">
						{props.summaryItems?.map((item, index: number) => {
							return (
								<div
									key={index}
									id="list-items"
									className="para-4 md:para-3 text-gray-shade-1 flex items-center p-1 sm:p-2"
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
				<button className="bg-primary-shade-1 para-5 lg:para-3 mx-2 mb-4 flex rounded-2xl py-4 px-4 tracking-wide text-white md:py-6 md:px-8">
					<span className="translate-y-[25%]">{props.buttonText}</span>
					<span className="title-6 md:title-4 ml-4">{props.price}</span>
					<span className="translate-y-[30%]">/per year</span>
				</button>
			</div>
		</>
	);
};
export default MembershipCard;
