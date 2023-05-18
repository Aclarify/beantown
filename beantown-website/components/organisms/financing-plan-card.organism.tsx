import CMSImageWrapper from 'components/molecules/cms-image-wrapper.molecule';
import ReadMore from 'components/molecules/read-more.molecule';
import React from 'react'
interface Props {
	iconImage: any;
	planTitle: string;
	planDescription: string;
	onShowMore?: () => void;
}
export const PlanCard: React.FC<Props> = (props) => {	
	console.log('inside card organism',props.iconImage)

	return (
		<>
			<div className='flex flex-col items-center'>
				<div className="p-2 mt-4 h-[80px]   w-[80px] lg:h-[120px] lg:w-[120px] ">
					<CMSImageWrapper
						altText={props.iconImage.image?.asset?.altText || ''}
						image={props.iconImage || null}
						shouldBePrefetched={true}
						style={{
							width: '100%',
							height: 'auto',
							objectFit: 'contain',
						}}
					/>
				</div>
				<h3 className="text-primary-shade-1 p-2  lg:p-6 text-center">
					{props.planTitle}
				</h3>

				<div className="text-primary-shade-1 para xs:p-2 p-4 md:p-2    cursor-pointer text-center ">
					{props.onShowMore && (
						<ReadMore
							content={props.planDescription}
							limit={250}
							onShowMore={props.onShowMore}
						/>
					)}
					{!props.onShowMore && props.planDescription}
				</div>
			</div>
		</>
	);
};

export default PlanCard;