import { GlobalContext } from '@contexts/global/global.context';
import useWindowDimensions from '@lib/hooks/use-window-dimensions.hook';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import CtaWrapper from 'components/molecules/cta-wrapper.molecule';
import RichText from 'components/molecules/rich-text.molecule';
import ContentWrapper from 'components/organisms/content-wrapper.organism';
import MaskedImageWithBackgroundVector from 'components/organisms/masked-image-with-blob.organism';
import { ElectricalContentProps } from 'pages/electrical';
import { useContext } from 'react';

const AboutElectricalServiceContent = () => {
	const { pageContent } =
		useContext<GlobalContextProps<ElectricalContentProps>>(GlobalContext);
	const { width } = useWindowDimensions();
	if (!pageContent) {
		return null;
	}

	const pageData = pageContent.page[0];
	const {
		aboutTheServiceTitle,
		aboutTheServiceDescription,
		aboutTheServiceImage,
		contactUsButton,
	} = pageData;
	return (
		<div
			id="section-wrapper"
			className="z-10 flex  flex-col overflow-hidden   pb-[5em]"
		>
			<div
				id="content-image-wrapper"
				className="flex w-full flex-col items-center  lg:flex  lg:flex-row "
			>
				<div
					id="image-wrapper"
					className="mb-8 md:mt-12  md:basis-1/2 md:px-20 lg:px-10  "
				>
					<MaskedImageWithBackgroundVector
						imageURL={aboutTheServiceImage?.asset?.url || ''}
						imgAltText={aboutTheServiceImage?.asset?.altText || ''}
						width={width > 768 ? 1000 : 500}
						height={width > 768 ? 1000 : 500}
						maskImg={
							width > 768
								? './images/electrical/repairs-installation-upgrades/electrical-RIU-blob.svg'
								: './images/electrical/repairs-installation-upgrades/electrical-RIU-bg-blob.svg'
						}
						bgImg={
							width > 768
								? './images/electrical/repairs-installation-upgrades/electrical-RIU-bg-blob.svg'
								: './images/electrical/repairs-installation-upgrades/electrical-RIU-blob.svg'
						}
					/>
				</div>
				<div
					id="content-wrapper"
					className="z-10 flex basis-1/2 flex-col items-start pt-[2em] text-left lg:pt-20 "
				>
					<ContentWrapper>
						<ContentWrapper.Title className="mr-[2em] md:mr-[0em] lg:mr-[1em] xl:mr-[2em] 2xl:mr-[5em]">
							<h1 className="title-5 lg:title-2 text-primary-black ">
								{aboutTheServiceTitle}
							</h1>
						</ContentWrapper.Title>
						<ContentWrapper.Description className="para-4 lg:para-2 text-left !font-thin">
							<RichText value={aboutTheServiceDescription?.contentRaw} />
						</ContentWrapper.Description>
						<ContentWrapper.CTA className="mt-[16px] lg:mt-[32px]">
							<CtaWrapper.CTA className="bg-service-yellow para-3 lg:para-2 h-[52px] w-[184px] rounded-lg py-1 px-4 tracking-wide text-black md:py-2  md:px-8  lg:h-[64px] lg:w-[210px] lg:tracking-wider ">
								<p>{contactUsButton?.text}</p>
							</CtaWrapper.CTA>
						</ContentWrapper.CTA>
					</ContentWrapper>
				</div>
			</div>
		</div>
	);
};
export default AboutElectricalServiceContent;
