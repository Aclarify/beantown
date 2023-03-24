import RichText from 'components/molecules/rich-text.molecule';
import React from 'react';
// import Image from 'next/image';
import Animate from 'components/molecules/animate.molecule';
import CMSImageWrapper from 'components/molecules/cms-image-wrapper.molecule';
import { Image as CMSImageType } from '@typing/gql/graphql';
interface Props {
	title: string;
	description: string;
	thumbnailImage: CMSImageType | null;
	thumbnailAltText: string;
}
const WhyUsCard: React.FC<Props> = (props) => {
	return (
		<section>
			<Animate>
				<div className="z-5 relative flex items-center rounded-xl bg-white py-2  shadow-sm md:m-4 ">
					<div className=" w-1/3 flex-none p-2 md:p-4 ">
						<CMSImageWrapper
							altText={props.thumbnailAltText || ''}
							image={props.thumbnailImage || null}
							shouldBePrefetched={true}
							style={{
								width: '100%',
								height: 'auto',
								flex: 'none',
								objectPosition: 'center',
								objectFit: 'contain',
							}}
						/>
					</div>
					<div className=" w-2/3 flex-1 p-2 ">
						<Animate>
							<h4 className=" text-primary-black  ">{props.title}</h4>
						</Animate>
						<Animate>
							<div className=" text-gray-shade-1 pt-2">
								<p>{props.description}</p>
							</div>
						</Animate>
					</div>
				</div>
			</Animate>
		</section>
	);
};
export default WhyUsCard;
