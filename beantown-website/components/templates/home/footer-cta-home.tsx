import React, { useContext } from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { HomePageContentProps } from 'pages';
import RichText from 'components/molecules/rich-text.molecule';
import Image from 'next/image';
import Button from 'components/atoms/button.atom';
import Link from 'next/link';

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
			<div className="flex flex-col sm:flex sm:flex-row-reverse ">
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
					className=" bg-gradient-to-r from-blue-200  bg-blue-50 relative w-full  "
				>
					<img
						className="object-fill animate-pulse object-center "
						src="images/home_page/footer_cta_theme/mask_group.svg"
					/>
					<div className="space-y-8 inset-y-20 absolute inset-x-0 sm:inset-y-4 px-6 md:px-10 ">
						<div className="flex-col  ">
							<div className="flex flex-col space-y-2 align-middle ">
								<div>
									<p className="title-5 md:title-2 text-primary-black text-center md:text-left">
										{ctaTitle}
									</p>
								</div>
								<div className="para-4 md:para-2 text-primary-shade-1 justify-center md:justify-start">
									<RichText value={ctaDescription?.contentRaw} />
								</div>
								<div className="flex justify-center md:justify-start ">
								
									<Link href={'/'}>
										<Button
											fontColor="text-white"
											bgColor=" bg-primary-shade-1"
										>
											{finalCtaButton?.text}
										</Button>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
