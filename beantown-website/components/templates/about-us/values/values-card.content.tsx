import { GlobalContext } from '@contexts/global/global.context';
import useWindowDimensions from '@lib/hooks/use-window-dimensions.hook';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
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
			<div
				id="card-container"
				className="text-primary-black flex justify-center gap-4 p-2"
			>
				{valuesCards?.map((cardInfo, index) => {
					return (
						cardInfo && (
							<div
								id="card-item"
								className="flex min-w-[354px]  items-center space-x-2 rounded-2xl bg-white p-3 shadow-sm"
								key={index}
							>
								<div
									key={index}
									className="bg-secondary-shade-3  h-[140px] w-[120px] rounded-2xl  "
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
									<span className="subtitle-2">{cardInfo?.text}</span>
								</div>
							</div>
						)
					);
				})}
			</div>
		</>
	);
};
export default ValuesCards;
