import React from 'react';
import Animate from 'components/molecules/animate.molecule';
import CMSImageWrapper from 'components/molecules/cms-image-wrapper.molecule';

interface Props {
	title: string;
	thumbnailImage: any;
	thumbnailAltText: string;
	content: string;
}

const MassSaveStagesCard: React.FC<Props> = (props) => {
	return (
		<>
			<div className="xs:px-1 h-full flex-col justify-center py-6 ">
				<Animate cascade>
					<div className="image-icon-wrapper mx-auto h-[60px] w-[60px] md:h-[80px] md:w-[80px]">
						<CMSImageWrapper
							altText={props.thumbnailAltText || ''}
							image={props.thumbnailImage || null}
							shouldBePrefetched={true}
							style={{
								width: '100%',
								objectFit: 'contain',
							}}
						/>
					</div>
					<div className=" px-2 text-center lg:pt-8">
						<h5 className=" text-primary-black pb-4">{props.title}</h5>
						<p className=" text-gray-shade-1 !text-[20px] !font-thin ">
							{props.content}
						</p>
					</div>
				</Animate>
			</div>
		</>
	);
};
export default MassSaveStagesCard;
