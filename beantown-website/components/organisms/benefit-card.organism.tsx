
import CMSImageWrapper from 'components/molecules/cms-image-wrapper.molecule';
import ReadMore from 'components/molecules/read-more.molecule';
import React from 'react'
interface Props {
	briefcaseIconImage: any;
	benefitTitle: string;
	benefitDescription: string;
	onShowMore?: () => void;
}
export const BenefitsCard: React.FC<Props> = (props) => {	

	return (
		<>
			<div className='flex flex-col items-center'>
				<div className="p-2 mt-4 h-[80px]   w-[80px] lg:h-[120px] lg:w-[120px] ">
					<CMSImageWrapper
						altText={props.briefcaseIconImage.image?.asset?.altText || ''}
						image={props.briefcaseIconImage || null}
						shouldBePrefetched={true}
						style={{
							width: '100%',
							height: 'auto',
							objectFit: 'contain',
						}}
					/>
				</div>
				<h3 className="text-primary-shade-1 p-2  lg:p-6 text-center">
					{props.benefitTitle}
				</h3>

				<div className="text-primary-shade-1 para p-2    cursor-pointer text-center ">
					{props.onShowMore && (
						<ReadMore
							content={props.benefitDescription}
							limit={250}
							onShowMore={props.onShowMore}
						/>
					)}
					{!props.onShowMore && props.benefitDescription}
				</div>
			</div>
		</>
	);
};

export default BenefitsCard;