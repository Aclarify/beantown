import React, { useContext } from 'react';
import { GlobalContext } from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { PrivacyPolicyContentProps } from 'temporary-ondeck-pages/privacy-policy';
import RichText from 'components/molecules/rich-text.molecule';
import ContentWrapper from 'components/organisms/content-wrapper.organism';
import Animate from 'components/molecules/animate.molecule';

// TODO : Fetch data from CMS
const PrivacyPolicyContent = () => {
	const { pageContent } =
		useContext<GlobalContextProps<PrivacyPolicyContentProps>>(GlobalContext);
	if (!pageContent) {
		return null;
	}
	const pageData = pageContent.page[0];
	const { privacyPolicyContent, sectionTitle } = pageData;
	return (
		<div
			id="section-wrapper"
			className=" 3xl:mt-[-8em] relative z-10 mt-[0em]  flex flex-col overflow-hidden rounded-xl shadow-[rgba(29,_39,_87,_0.08)_4px_8px_60px] md:mt-[-1em] lg:rounded-3xl 2xl:mt-[-3em] "
		>
			<div className="  bg-white py-16   px-5 text-center    lg:px-20">
				<ContentWrapper>
					<ContentWrapper.Title className="text-left ">
						<Animate bottom>
							<h2 className="text-primary-black ">{sectionTitle}</h2>
						</Animate>
					</ContentWrapper.Title>
					<ContentWrapper.Description className="text-primary-shade-1 text-left">
						<Animate>
							<RichText value={privacyPolicyContent?.contentRaw || null} />
						</Animate>
					</ContentWrapper.Description>
				</ContentWrapper>
			</div>
		</div>
	);
};
export default PrivacyPolicyContent;
