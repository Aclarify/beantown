import { GlobalContext } from '@contexts/global/global.context';
import { buttonHoverStyle } from '@lib/styles/button.style';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import clsx from 'clsx';
import { activateScheduleEngine } from 'components/atoms/book-now-button.atom';
import { BookNowContentProps } from 'pages/book-now';
import { useContext } from 'react';

const BookNowContent = () => {
	const { pageContent } =
		useContext<GlobalContextProps<BookNowContentProps>>(GlobalContext);
	if (!pageContent) {
		return null;
	}

	const pageData = pageContent.page[0];
	const { bookNowTitle, bookNowDescription, bookNowCtaText } = pageData;
	return (
		<div id="section-wrapper" className="z-10 flex  flex-col overflow-hidden">
			<div className="relative z-10 pt-40 pb-[89px] md:px-20 lg:px-24">
				<div className=" flex flex-col justify-center text-center align-middle  ">
					<div className=" text-primary-black px-[1em] pt-[2em] text-center md:mx-40 lg:px-[1em] lg:pt-0 xl:px-[2em] 2xl:px-[4em]">
						<h1>{bookNowTitle}</h1>
					</div>
					<div className=" text-gray-shade-1 px-[3em] pt-4 text-center md:px-[1em] lg:px-[14em] 2xl:px-[16em]">
						<p>{bookNowDescription}</p>
					</div>
				</div>
				<div className="mt-8 flex w-full items-center justify-center">
					<button
						className={clsx(
							'bg-primary-shade-1',
							'text-white',
							'px-8',
							'py-4',
							'rounded-lg',
							'font-normal',
							'tracking-wide',
							'text-2xl',
							'hover:cusor-pointer',
							buttonHoverStyle
						)}
						onClick={() => activateScheduleEngine()}
					>
						{bookNowCtaText || 'Schedule A Service'}
					</button>
				</div>
			</div>
		</div>
	);
};
export default BookNowContent;
