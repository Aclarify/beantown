import React, { useContext } from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import RichText from 'components/molecules/rich-text.molecule';
import ContentWrapper from 'components/organisms/content-wrapper.organism';
import Animate from 'components/molecules/animate.molecule';
import { HomePageContentProps } from 'pages';
import CMSImageWrapper from 'components/molecules/cms-image-wrapper.molecule';
import MaskedImageWithBackground from 'components/organisms/masked-image-with-background.organism';
const HomeMitsubishiDiamondContent = () => {
	const { pageContent } =
		useContext<GlobalContextProps<HomePageContentProps>>(GlobalContext);

	if (!pageContent) {
		return null;
	}
	const pageData = pageContent.page[0];
	const {
		mitsubishiDiamondTitle,
		mitsubishiDiamondDescription,
		mitsubishiDiamondImage,
		mitsubishiLogo,
	} = pageData;

	return (
		<div id="section-wrapper" className="z-10 flex flex-col overflow-hidden ">
			<div
				id="content-image-wrapper"
				className="flex w-full flex-col items-center  lg:flex  lg:flex-row "
			>
				<div
					id="image-wrapper"
					className="mb-8 md:mt-12 md:basis-1/2  md:px-20 lg:px-10"
				>
					<MaskedImageWithBackground
						image={mitsubishiDiamondImage || null}
						imgAltText={mitsubishiDiamondImage?.asset?.altText || ''}
						maskImg={
							'./images/home/mitsubishi-diamond/home-brand-mitsubishi-blob.svg'
						}
						bgImg={
							'./images/home/mitsubishi-diamond/home-brand-mitsubishi-bg-blob.svg'
						}
					/>
				</div>
				<div
					id="content-wrapper"
					className="z-10 flex basis-1/2 flex-col pt-[2em]  lg:pt-20   "
				>
					<ContentWrapper>
						<ContentWrapper.Title className="mr-[2em] text-left md:mr-[0em] lg:mr-[1em] xl:mr-[2em] 2xl:mr-[5em]">
							<Animate bottom>
								<h2 className=" text-primary-black ">
									{mitsubishiDiamondTitle}
								</h2>
							</Animate>
						</ContentWrapper.Title>
						<ContentWrapper.Description className="  text-left">
							<Animate>
								<RichText value={mitsubishiDiamondDescription?.contentRaw} />
							</Animate>
						</ContentWrapper.Description>
						<div className="flex items-center justify-center pt-8 pb-8">
							<div className="w-[70%] md:w-[50%]">
								<CMSImageWrapper
									altText={mitsubishiLogo?.asset?.altText || ''}
									image={mitsubishiLogo || null}
									shouldBePrefetched={true}
									style={{
										width: '100%',
										objectFit: 'contain',
									}}
								/>
							</div>
						</div>
					</ContentWrapper>
				</div>
			</div>
		</div>
	);
};

export default HomeMitsubishiDiamondContent;
