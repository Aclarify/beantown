import { GlobalContext } from '@contexts/global/global.context';
import useWindowDimensions from '@lib/hooks/use-window-dimensions.hook';
import { buttonHoverStyle } from '@lib/styles/button.style';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import clsx from 'clsx';
import Animate from 'components/molecules/animate.molecule';
import CtaWrapper from 'components/molecules/cta-wrapper.molecule';
import RichText from 'components/molecules/rich-text.molecule';
import ContactUsModal from 'components/organisms/contact-us-modal.organism';
import ContentWrapper from 'components/organisms/content-wrapper.organism';
import MaskedImageWithBackgroundVector from 'components/organisms/masked-image-with-blob.organism';
import { useModal } from 'components/organisms/modal.organism';
import { ElectricalContentProps } from 'pages/electrical';
import { useContext } from 'react';

const AboutElectricalServiceContent = () => {
	const { isVisible, toggleModal } = useModal();
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
		logoDark,
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
							'./images/electrical/repairs-installation-upgrades/electrical-RIU-blob.svg'
						}
						bgImg={
							'./images/electrical/repairs-installation-upgrades/electrical-RIU-bg-blob.svg'
						}
					/>
				</div>
				<div
					id="content-wrapper"
					className="z-10 flex basis-1/2 flex-col items-start pt-[2em] text-left lg:pt-20 "
				>
					<ContentWrapper>
						<ContentWrapper.Title className="mr-[2em] md:mr-[0em] lg:mr-[1em] xl:mr-[2em] 2xl:mr-[5em]">
							<Animate bottom>
								<h2 className="text-primary-black ">{aboutTheServiceTitle}</h2>
							</Animate>
						</ContentWrapper.Title>
						<ContentWrapper.Description className="text-left ">
							<Animate>
								<RichText value={aboutTheServiceDescription?.contentRaw} />
							</Animate>
						</ContentWrapper.Description>
						<ContentWrapper.CTA className="mt-[16px] lg:mt-[32px]">
							<CtaWrapper.CTA
								className={clsx(
									'bg-service-yellow button text-black',
									buttonHoverStyle
								)}
								onClick={toggleModal}
							>
								{contactUsButton?.text}
							</CtaWrapper.CTA>
						</ContentWrapper.CTA>
						{/* Modal for CTA click */}
						<ContactUsModal
							isVisible={isVisible}
							onClose={toggleModal}
							logoDark={logoDark}
							ctaBgColor="bg-service-yellow"
							ctaTextColor="text-black"
						/>
					</ContentWrapper>
				</div>
			</div>
		</div>
	);
};
export default AboutElectricalServiceContent;
