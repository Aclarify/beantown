import React, { useContext } from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { HomePageContentProps } from 'pages';
import RichText from 'components/molecules/rich-text.molecule';

export default function FooterCta() {
	const { pageContent } =
		useContext<GlobalContextProps<HomePageContentProps>>(GlobalContext);
	if (!pageContent) {
		return;
	}
	const homeData = pageContent.allHome[0];
	const { ctaTitle, ctaDescription, finalCtaButton } = homeData;
	return (
		<section id="footerCta">
			<div className="md:flex ">
				<div className="">
					<img src="images/home_page/home_page_footer_cta_image.svg" />
				</div>
				<div className="bg-blue-500 relative w-full">
					<img
						className="object-cover animate-pulse"
						src="images/home_page/footer_cta_theme/mask_group.svg"
					/>
					<div className=" space-y-4  absolute bottom-20 inset-x-0 p-2  md:p-12">
						{' '}
						<div className="flex-col ">
							<div className="flex-col space-y-2 ">
								<p className="text-2xl  md:text-4xl font-bold text-center">
									{ctaTitle}
								</p>
								<RichText value={ctaDescription?.contentRaw} />
							</div>
							<div className="flex justify-center pt-4">
								<button className="border rounded-lg text-xs  md:text-xl bg-[#15284C] text-white  p-2">
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
