import React from 'react';
import { PortableText } from '@portabletext/react';
import clsx from 'clsx';
import MaskedImageWithBackground from 'components/organisms/masked-image-with-background.organism';

interface Props {
	value: any;
	wrapperClassname?: string;
}

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
				<div className="image-wrapper my-[3em] w-full">
					<MaskedImageWithBackground
						className="h-full w-full rounded-3xl object-cover"
						image={props.value}
						imgAltText={props.value?.asset?.altText || ''}
						maskImg={'/images/blog-post/blog-image-mask.svg'}
						bgImg={''}
					/>
				</div>
			);
		},
	},
	marks: {
		internalLink: (props: any) => {
			return (
				<a className="underline  hover:cursor-pointer" href={props.value.href}>
					{props.children}
				</a>
			);
		},
	},
};

const PostTextContent: React.FC<Props> = (props) => {
	return (
		<div className={clsx('rich-text', props.wrapperClassname)}>
			<PortableText value={props.value} components={components} />
		</div>
	);
};

export default PostTextContent;
