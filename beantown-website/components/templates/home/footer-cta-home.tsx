import React, { useContext } from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { HomePageContentProps } from 'pages';
import RichText from 'components/molecules/rich-text.molecule';
import Button from 'components/atoms/button.atom';
import Link from 'next/link';
import Image from 'next/image';

export default function FooterCta() {
	const { pageContent } =
		useContext<GlobalContextProps<HomePageContentProps>>(GlobalContext);
	if (!pageContent) {
		return null;
	}
	const homeData = pageContent.home[0];
	const { ctaTitle, ctaDescription, finalCtaButton, ctaImage } = homeData;
	const imagePath = ctaImage?.asset?.url;
	return (
		<>
			<section id="footerCtaDesktop" className="hidden sm:block">
				<div className="flex  flex-row bg-white">
					<div
						id="content"
						className=" bg-gradient-to-r from-secondary-shade-1  to-secondary-shade-2 relative  basis-1/2 "
					>
						<Image
							src="/images/home_page/footer_cta_theme/mask_group.svg"
							className="object-fill animate-pulse object-center "
							alt="Image mask"
							height={600}
							width={600}
						/>
						<div className="flex flex-col md:text-left justify-center absolute inset-x-0 inset-y-4 px-10   ">
							<p className="title-5 md:title-2 text-primary-black text-left">
								{ctaTitle}
							</p>
							<div className="para-2 text-primary-shade-1 justify-start w-3/4 ">
								<RichText value={ctaDescription?.contentRaw} />
							</div>
							<div className="flex justify-start ">
								<Link href={'/'}>
									<Button fontColor="text-white" bgColor=" bg-primary-shade-1">
										{finalCtaButton?.text}
									</Button>
								</Link>
							</div>
						</div>
					</div>
					<div
						className={`basis-1/2 h-[600px]`}
						style={{
							backgroundImage: `linear-gradient(
							to right,
							#CADEED,
							transparent 20%
						), url('${imagePath}')`,
							backgroundSize: 'cover',
							backgroundRepeat: 'no-repeat',
						}}
					></div>
				</div>
			</section>
			<section id="footerCtaMobile" className="block sm:hidden pt-6 bg-white">
				<div className="flex flex-col">
					<div
						className={`block h-[30vh]`}
						style={{
							backgroundImage: `linear-gradient(
							transparent 20%,
							#F4F8FB
						), url('${imagePath}')`,
							backgroundSize: 'cover',
							backgroundRepeat: 'no-repeat',
						}}
					></div>
					<div
						id="content"
						className="relative  block h-[50vh] "
						style={{
							backgroundImage: `linear-gradient(
							#F4F8FB,
							#7AADD3)`,
						}}
					>
						<img
							className="object-fill animate-pulse object-center "
							src="images/home_page/footer_cta_theme/mask_group.svg"
						/>
						<div className="space-y-8 inset-y-20 absolute inset-x-0  px-6 ">
							<div className="flex-col  ">
								<div className="flex flex-col space-y-2 align-middle ">
									<div>
										<p className="title-5  text-primary-black text-center ">
											{ctaTitle}
										</p>
									</div>
									<div className="para-4  text-primary-shade-1 justify-center text-center ">
										<RichText value={ctaDescription?.contentRaw} />
									</div>
									<div className="flex justify-center  ">
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
		</>
	);
}
