import React, { useContext } from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { HomePageContentProps } from 'pages';
import RichText from 'components/molecules/rich-text.molecule';
import Image from 'next/image';

export default function FooterCta() {
	const { pageContent } =
		useContext<GlobalContextProps<HomePageContentProps>>(GlobalContext);
	if (!pageContent) {
		return null;
	}
	const homeData = pageContent.home[0];
	const { ctaTitle, ctaDescription, finalCtaButton, ctaImage } = homeData;
	return (
		<section id="footerCta" className="">
			<div
				className="flex flex-col sm:flex sm:flex-row-reverse "
				
			>
				<div id="image" className="">
					<Image
						alt={ctaImage?.asset?.altText || ''}
						width={1000}
						height={800}
						src={ctaImage?.asset?.url || ''}
					/>
				</div>
				<div
					id="content"
					className=" bg-gradient-to-r from-blue-300  bg-blue-50 relative w-full"
				>
					<img
						className="object-cover animate-pulse md:absolute"
						src="images/home_page/footer_cta_theme/mask_group.svg"
					/>
					<div className="space-y-4  absolute bottom-20 inset-x-0 sm:inset-y-8  p-2  md:p-12">
						{' '}
						<div className="flex-col ">
							<div className="flex flex-col space-y-2 text-center sm:place-items-start  ">
								<div>
									<p className="text-2xl  md:text-2xl font-bold text-center">
										{ctaTitle}
									</p>
								</div>
								<div className="justify-center sm:justify-start">
									<RichText value={ctaDescription?.contentRaw} />
								</div>
							</div>
							<div className="flex justify-center sm:justify-start pt-4 ">
								<button className="border rounded-lg text-sm sm:text-xl bg-[#15284C] text-white  px-2 py-1  ">
									{finalCtaButton?.text}
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
