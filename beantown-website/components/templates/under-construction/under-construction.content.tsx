import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { BookNowContentProps } from 'pages/book-now';
import { useContext } from 'react';

const UnderConstructionContent = () => {
	const { pageContent } =
		useContext<GlobalContextProps<BookNowContentProps>>(GlobalContext);
	if (!pageContent) {
		return null;
	}

	const pageData = pageContent.page[0];

	return (
		<div
			id="section-wrapper"
			className="z-10 flex  flex-col overflow-hidden   "
		>
			<div className="pt-96 pb-[89px]">
				<div className=" flex flex-col justify-center text-center align-middle  ">
					<div className="title-5 lg:title-1 text-primary-black px-[1em] pt-[2em] text-center md:mx-40 lg:px-[1em] lg:pt-0 xl:px-[2em] 2xl:px-[4em]">
						<h1>{'This Page is Under Construction'}</h1>
					</div>
				</div>
			</div>
		</div>
	);
};
export default UnderConstructionContent;
