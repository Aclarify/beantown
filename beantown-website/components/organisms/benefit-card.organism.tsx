
import CMSImageWrapper from 'components/molecules/cms-image-wrapper.molecule';
import ReadMore from 'components/molecules/read-more.molecule';
import React from 'react'
interface Props {
	briefcaseIconImage: any;
	benefitTitle: string;
	benefitDescription: string;
	onShowMore?: () => void;
}

const TestimonialCardWrapper: React.FC<Props> = (props) => {
	return (
		<section
			id="BenefitCard"
			//className="z-5  relative flex h-[360px] w-[280px] flex-col rounded-2xl bg-white px-6  lg:h-[600px] lg:w-[378px]  lg:rounded-3xl"
		>
			<BenefitsCard {...props} />
		</section>
	);
};

export const BenefitsCard: React.FC<Props> = (props) => {

	

	return (
		<>
			<div className="md:[w-480px]   justify-stretch mb-8 flex h-auto  w-[380px] flex-col    items-center gap-4 rounded-2xl bg-white p-8 shadow-[rgba(44,_48,_88,_0.16)_0px_8px_200px] lg:h-[600px] lg:rounded-3xl  ">
				<div className="mt-4 h-[80px]  w-[80px] md:h-[120px] md:w-[120px] ">
					<CMSImageWrapper
						altText={props.briefcaseIconImage.image?.asset?.altText || ''}
						image={props.briefcaseIconImage}
						shouldBePrefetched={true}
						style={{
							width: '100%',
							height: 'auto',
							objectFit: 'contain',
						}}
					/>
				</div>
				<h3 className="text-primary-shade-1 p-6 text-center">
					{props.benefitTitle}
				</h3>

				<div className="text-primary-shade-1 para  cursor-pointer text-center">					
					
					{props.onShowMore && (
						<ReadMore
							content={props.benefitDescription}
							limit={200}
							onShowMore={props.onShowMore}
						/>
					)}
					{!props.onShowMore && props.benefitDescription}
				</div>
			</div>
		</>
	);
};

export default TestimonialCardWrapper;