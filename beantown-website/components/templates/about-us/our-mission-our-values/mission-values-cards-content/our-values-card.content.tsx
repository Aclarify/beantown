import { GlobalContext } from '@contexts/global/global.context';
import useWindowDimensions from '@lib/hooks/use-window-dimensions.hook';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import Image from 'next/image';
import { AboutUsContentProps } from 'pages/about-us';
import { useContext } from 'react';
const OurValuesCards = () => {
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
			<div id="card-container" className="flex justify-center gap-4 p-2">
				{valuesCards?.map((cardInfo, index) => {
					return (
						cardInfo && (
							<div id="card-item" className="flex items-center  space-x-2">
								<div
									key={index}
									className="bg-secondary-shade-3  h-[140px] w-[120px] rounded-lg "
								>
									<Image
										alt={cardInfo?.iconImage?.asset?.altText || ''}
										width={80}
										height={80}
										src={cardInfo?.iconImage?.asset?.url || ''}
										className=" mx-auto mt-8 place-items-center"
									/>
								</div>
								<div>
									<span>{cardInfo?.text}</span>
								</div>
							</div>
						)
					);
				})}
			</div>
		</>
	);
};
export default OurValuesCards;
