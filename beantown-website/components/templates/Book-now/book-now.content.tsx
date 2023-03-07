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
	return (
		<div
			id="section-wrapper"
			className="z-10 flex  flex-col overflow-hidden   pb-[5em]"
		>
			<div className="mt-40 mb-40">
				<div className=" flex flex-col justify-center text-center align-middle  ">
					<div className="title-5 lg:title-2 text-primary-shade-1 px-[1em] pt-[2em] text-center md:mx-40 lg:px-[1em] lg:pt-0 xl:px-[2em] 2xl:px-[4em]">
						<h1>{bookNowTitle}</h1>
					</div>
					<div className="para-4 lg:para-2 text-primary-shade-1 px-[3em] pt-4  text-center md:px-[1em] lg:px-[8em] 2xl:px-[7em]">
						<p>
							{
								'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim venias. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod '
							}
						</p>
					</div>
				</div>
			</div>

			<div className="mx-auto h-[295px] w-[385px] sm:h-[962px] sm:w-[1254px] ">
				<iframe
					className="h-full w-full"
					src={'https://beantownac.com/'}
				></iframe>
			</div>
		</div>
	);
};
export default BookNowContent;
