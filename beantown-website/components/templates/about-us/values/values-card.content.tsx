import { GlobalContext } from '@contexts/global/global.context';
import useWindowDimensions from '@lib/hooks/use-window-dimensions.hook';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import Animate from 'components/molecules/animate.molecule';
import Image from 'next/image';
import { AboutUsContentProps } from 'pages/about-us';
import { useContext } from 'react';
const ValuesCards = () => {
	const { pageContent } =
		useContext<GlobalContextProps<AboutUsContentProps>>(GlobalContext);
	const { width } = useWindowDimensions();

	if (!pageContent) {
		return null;
	}
	const pageData = pageContent.page[0];
	const { valuesCards } = pageData;

	return (
		<>
			<Animate bottom cascade>
				<div
					id="card-container"
					className="text-primary-black flex flex-wrap justify-evenly gap-4 p-2"
				>
					{valuesCards?.map((cardInfo, index) => {
						return (
							cardInfo && (
								<div
									id="card-item"
									className="flex w-[354px] items-center space-x-2 rounded-2xl bg-white p-3 shadow-sm"
									key={index}
								>
									<div
										key={index}
										className="bg-secondary-shade-3 flex w-1/3 items-center justify-center rounded-2xl py-8 px-5  "
									>
										<Image
											alt={cardInfo?.iconImage?.asset?.altText || ''}
											width={80}
											height={80}
											src={cardInfo?.iconImage?.asset?.url || ''}
										/>
									</div>
									<div className="w-2/3 pl-6">
										<h5>{cardInfo?.text}</h5>
									</div>
								</div>
							)
						);
					})}
				</div>
			</Animate>
		</>
	);
};
export default ValuesCards;
