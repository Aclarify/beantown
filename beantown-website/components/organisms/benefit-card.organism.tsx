import clsx from 'clsx';
import CMSImageWrapper from 'components/molecules/cms-image-wrapper.molecule';
import ReadMore from 'components/molecules/read-more.molecule';
import React from 'react';
interface Props {
	briefcaseIconImage: any;
	benefitTitle: string;
	benefitDescription: string;
	onShowMore?: () => void;
}

const classNames = {
	icon: [
		'h-[80px]',
		'w-[80px]',
		'lg:h-[80px]',
		'lg:w-[80px]',
		'p-2',
		'mt-4',
		'mb-2',
	],
	title: ['text-primary-shade-1', 'text-center', 'leading-tight'],
};

export const BenefitsCard: React.FC<Props> = (props) => {
	return (
		<>
			<div className="flex h-full flex-col items-center">
				<div className={clsx(classNames.icon)}>
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
				<h3 className={clsx(classNames.title)}>{props.benefitTitle}</h3>
				<div className="text-primary-shade-1 para xs:p-2 cursor-pointer p-4    text-center md:p-2 ">
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
