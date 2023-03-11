import React, { useContext } from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import ContentWrapper from '../../../organisms/content-wrapper.organism';
import { MembershipsContentProps } from '../../../../pages/memberships';
import RichText from '../../../molecules/rich-text.molecule';
import MaskedImageWithBackgroundVector from '../../../organisms/masked-image-with-blob.organism';
import useWindowDimensions from '../../../../lib/hooks/use-window-dimensions.hook';
import { MembershipsContext } from '../../../../contexts/memberships/memberships.context';

const MembersipsDetails = () => {
	const { pageContent } =
		useContext<GlobalContextProps<MembershipsContentProps>>(GlobalContext);

	const { width } = useWindowDimensions();

	const { activeServiceMembership } = useContext(MembershipsContext);

	if (!pageContent) {
		return null;
	}

	if (!activeServiceMembership) {
		return null;
	}

	return (
		<div
			id="section-wrapper"
			className="z-10 mb-[6em]  flex flex-col  overflow-hidden "
		>
			<div
				id="content-image-wrapper"
				className="flex w-full flex-col-reverse items-center  lg:flex  lg:flex-row "
			>
				<div
					id="content-wrapper"
					className="z-10 flex basis-1/2 flex-col items-start text-left lg:pt-20 "
				>
					<ContentWrapper>
						<ContentWrapper.Title>
							<h1 className="title-5 lg:title-2 text-primary-black ">
								{activeServiceMembership?.serviceMembershipTitle}
							</h1>
						</ContentWrapper.Title>
						<ContentWrapper.Description className="para-4 lg:para-2 text-left !font-thin">
							<RichText
								value={
									activeServiceMembership?.serviceMembershipDescription
										?.contentRaw
								}
							/>
						</ContentWrapper.Description>
					</ContentWrapper>
				</div>
				<div
					id="image-wrapper"
					className="mb-8 md:mt-12  md:basis-1/2 md:px-20 lg:px-10  "
				>
					<MaskedImageWithBackgroundVector
						imageURL={
							activeServiceMembership?.serviceMembershipImage?.asset?.url || ''
						}
						imgAltText={
							activeServiceMembership?.serviceMembershipImage?.asset?.altText ||
							''
						}
						width={width > 768 ? 1000 : 500}
						height={width > 768 ? 1000 : 500}
						maskImg={
							width > 768
								? './images/memberships/membership-details/blob-mask.svg'
								: './images/memberships/membership-details/blob-mask-mobile.svg'
						}
						bgImg={
							width > 768
								? './images/memberships/membership-details/bg-blob-shape.svg'
								: './images/memberships/membership-details/bg-blob-shape.svg'
						}
					/>
				</div>
			</div>
		</div>
	);
};

export default MembersipsDetails;
