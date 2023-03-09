import React from 'react';
import Image from 'next/image';
import MembershipsDetailsContent from './memberships-details.content';
import WaveWrapper from 'components/molecules/wave-wrapper.molecule';
import SectionContentWrapper from 'components/molecules/section-content-wrapper.molecule';
import MembershipsDetailsList from './memberships-details-list.content';

const MembershipsDetailsSection = () => {
	return (
		<section id="memberships-details" className="relative z-10 ">
			<Image
				src={'/images/memberships/membership-details/blob-shape.svg'}
				height={100}
				width={200}
				alt="Left Blob "
				className="absolute left-0 hidden translate-y-[5%] transform lg:block"
			/>
			<SectionContentWrapper>
				<MembershipsDetailsContent />
				<MembershipsDetailsList />
			</SectionContentWrapper>
			<WaveWrapper waveURL="/images/memberships/membership-details/bottom-wave.svg"></WaveWrapper>
		</section>
	);
};

export default MembershipsDetailsSection;
