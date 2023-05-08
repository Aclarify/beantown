import React from 'react';
import { PortableText } from '@portabletext/react';
import clsx from 'clsx';
import MaskedImageWithBackground from '../organisms/masked-image-with-background.organism';
import useWindowDimensions from 'lib/hooks/use-window-dimensions.hook';
import { SCREEN_BREAKPOINTS } from '@typing/common/interfaces/devices.interface';

interface Props {
	value: any;
	wrapperClassname?: string;
}

const PostTextContent: React.FC<Props> = (props) => {
	const { width } = useWindowDimensions();

	const components = {
		types: {
			breakType: (props: any) => {
				const { style } = props.value;
				if (style === 'lineBreak') {
					return <br className="lineBreak" />;
				}
				return null;
			},
			image: (props: any) => {
				return (
					<div className="image-wrapper my-[3em] w-full md:-my-[5em]">
						<MaskedImageWithBackground
							className="h-full w-full rounded-3xl object-cover"
							image={props.value}
							imgAltText={props.value?.asset?.altText || ''}
							maskImg={
								width > SCREEN_BREAKPOINTS.SM
									? '/images/blog-post/blog-image-mask.svg'
									: '/images/blog-post/blog-image-mask-mobile.svg'
							}
							bgImg={''}
						/>
					</div>
				);
			},
		},
		marks: {
			internalLink: (props: any) => {
				return (
					<a
						className="underline  hover:cursor-pointer"
						href={props.value.href}
					>
						{props.children}
					</a>
				);
			},
		},
	};
	return (
		<div className={clsx('rich-text', props.wrapperClassname)}>
			<PortableText value={props.value} components={components} />
		</div>
	);
};

export default PostTextContent;
