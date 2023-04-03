import React, { useContext } from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import RichText from 'components/molecules/rich-text.molecule';
import ContentWrapper from 'components/organisms/content-wrapper.organism';
import MaskedImageWithBackgroundVector from 'components/organisms/masked-image-with-blob.organism';
import useWindowDimensions from '@lib/hooks/use-window-dimensions.hook';
import Animate from 'components/molecules/animate.molecule';
import { HomePageContentProps } from 'pages';
import CMSImageWrapper from 'components/molecules/cms-image-wrapper.molecule';
const HomeBrandDescriptionContent = () => {
	const { pageContent } =
		useContext<GlobalContextProps<HomePageContentProps>>(GlobalContext);
	const { width } = useWindowDimensions();

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
		<div
			id="section-wrapper"
			//className="z-10 flex  flex-col overflow-hidden  px-5 pb-[5em]"
		>
			<div
				id="content-image-wrapper"
				className="flex w-full flex-col-reverse items-center  lg:flex  lg:flex-row "
			>
				<div
					id="image-wrapper"
					className="mb-8 md:mt-12  md:basis-1/2 md:px-20 lg:px-10  "
				>
					<MaskedImageWithBackgroundVector
						imageURL={mitsubishiDiamondImage?.asset?.url || ''}
						imgAltText={mitsubishiDiamondImage?.asset?.altText || ''}
						width={width > 768 ? 1000 : 500}
						height={width > 768 ? 1000 : 500}
						maskImg={
							width > 768
								? './images/home/brand-mitsubishi/home-brand-mitsubishi-blob.svg'
								: './images/home/brand-mitsubishi/home-brand-mitsubishi-blob-mask-mobile.svg'
						}
						bgImg={
							width > 768
								? './images/home/brand-mitsubishi/home-brand-mitsubishi-bg-blob.svg'
								: './images/home/brand-mitsubishi/home-brand-mitsubishi-blob.svg'
						}
					/>
				</div>
				<div
					id="content-wrapper"
					className="z-10 flex basis-1/2 flex-col items-start text-left lg:pt-20 "
				>
					<ContentWrapper>
						<ContentWrapper.Title>
							<Animate bottom>
								<h2 className=" text-primary-black ">
									{mitsubishiDiamondTitle}
								</h2>
							</Animate>
						</ContentWrapper.Title>
						<ContentWrapper.Description className=" text-gray-shade-1 text-left">
							<Animate>
								<RichText value={mitsubishiDiamondDescription?.contentRaw} />
							</Animate>
						</ContentWrapper.Description>
						<div className="flex h-full  items-center py-4">
							<CMSImageWrapper
								altText={mitsubishiLogo?.asset?.altText || ''}
								image={mitsubishiLogo || null}
								shouldBePrefetched={true}
								style={{
									width: '100%',
									height: 'auto',
									objectFit: 'contain',
								}}
							/>
						</div>
					</ContentWrapper>
				</div>
			</div>
		</div>
	);
};

export default HomeBrandDescriptionContent;
