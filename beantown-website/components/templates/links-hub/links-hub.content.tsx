import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { LinksHubContentProps } from 'pages/links-hub';
import { useContext } from 'react';

const LinksHubContent = () => {
	const { pageContent } =
		useContext<GlobalContextProps<LinksHubContentProps>>(GlobalContext);
	if (!pageContent) {
		return null;
	}

	const pageData = pageContent.page[0];
	const {
		logoDark,
		linksHubTitle,
		linksHubDescription,
		socialMediaIcons,
		links,
	} = pageData;
	return (
		<div
			id="section-wrapper"
			className=" 2xl:padding-for-section z-10 mx-[372px]  flex flex-col bg-white px-5"
		>
			<div className="">
				<div className=" my-40 flex flex-col justify-center text-center align-middle ">
					<div className=" text-primary-black border-secondary-shade-2 border-b-2  px-[1em] pt-[2em] text-center md:mx-40 lg:px-[1em] lg:pt-0 xl:px-[2em] 2xl:px-[4em]">
						<h1>{linksHubTitle}</h1>
					</div>
					<div className=" text-gray-shade-1 px-[3em] pt-4  text-center md:px-[1em] lg:px-[8em] 2xl:px-[7em]">
						<p>{linksHubDescription}</p>
					</div>
				</div>
			</div>

			<div className="mx-auto h-[295px] w-[385px] lg:h-[962px] lg:w-[1254px] "></div>
		</div>
	);
};
export default LinksHubContent;
