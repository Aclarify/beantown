import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { BookNowContentProps } from 'pages/book-now';
import { useContext } from 'react';

const BookNowContent = () => {
	const { pageContent } =
		useContext<GlobalContextProps<BookNowContentProps>>(GlobalContext);
	if (!pageContent) {
		return null;
	}

	const pageData = pageContent.page[0];
	const { bookNowTitle, bookNowDescription, bookNowUrl } = pageData;
	console.log(pageData);
	return (
		<div
			id="section-wrapper"
			className="z-10 flex  flex-col overflow-hidden   "
		>
			<div className="pt-40 pb-[89px]">
				<div className=" flex flex-col justify-center text-center align-middle  ">
					<div className="title-5 lg:title-1 text-primary-black px-[1em] pt-[2em] text-center md:mx-40 lg:px-[1em] lg:pt-0 xl:px-[2em] 2xl:px-[4em]">
						<h1>{bookNowTitle}</h1>
					</div>
					<div className="para-4 lg:para-2 text-gray-shade-1 px-[3em] pt-4  text-center md:px-[1em] lg:px-[8em] 2xl:px-[7em]">
						<p>{bookNowDescription}</p>
					</div>
				</div>
			</div>

			<div className="mx-auto h-[295px] w-[385px] lg:h-[962px] lg:w-[1254px] ">
				<iframe className="h-full w-full" src={bookNowUrl}></iframe>
			</div>
		</div>
	);
};
export default BookNowContent;
