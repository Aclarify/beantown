import clsx from 'clsx';
import Cog from '@heroicons/react/20/solid/CogIcon';

// TODO : Fetch data from CMS
const UnderConstructionContent = () => {
	return (
		<div
			id="section-wrapper"
			className="z-10 flex  flex-col overflow-hidden   "
		>
			<div className="pt-48 pb-[89px]">
				<div className=" flex flex-col justify-center text-center align-middle  ">
					<div className=" text-primary-black px-[1em] pt-[2em] text-center md:mx-40 lg:px-[1em] lg:pt-0 xl:px-[2em] 2xl:px-[4em]">
						<div className={clsx('py-12', 'w-full', 'flex', 'justify-center')}>
							<Cog
								className={clsx(
									'h-40',
									'w-40',
									'animate-spin-slow',
									'text-primary-shade-1'
								)}
							/>
						</div>
						<h1>{'This page is under construction'}</h1>
						<p className={clsx('text-4xl', 'pt-6')}>
							Check back soon for more content!
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
export default UnderConstructionContent;
