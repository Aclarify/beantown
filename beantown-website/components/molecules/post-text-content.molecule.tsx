import React from 'react';
import { PortableText } from '@portabletext/react';
import clsx from 'clsx';
import CMSImageWrapper from './cms-image-wrapper.molecule';
import useWindowDimensions from '../../lib/hooks/use-window-dimensions.hook';
import { SCREEN_BREAKPOINTS } from '../../typing/common/interfaces/devices.interface';

interface Props {
	value: any;
	wrapperClassname?: string;
}

const components = (width: number) => {
	return {
		types: {
			breakType: (props: any) => {
				const { style } = props.value;
				if (style === 'lineBreak') {
					return <br className="lineBreak" />;
				}
				return null;
			},
			image: (props: any) => {
				const maskImage =
					width > SCREEN_BREAKPOINTS.XS
						? '/images/blog-post/blog-image-mask.svg'
						: '/images/blog-post/blog-image-mask-mobile.svg';
				const maxHeight =
					width > SCREEN_BREAKPOINTS.XL
						? '800px'
						: width > SCREEN_BREAKPOINTS.LG
						? '800px'
						: width > SCREEN_BREAKPOINTS.MD
						? '450px'
						: width > SCREEN_BREAKPOINTS.XS
						? '580px'
						: '300px';
				return (
					<div className="image-wrapper my-[3em] max-h-[200px] w-full sm:max-h-[280px] md:max-h-[360px] lg:max-h-[500px] 2xl:max-h-[600px]">
						<CMSImageWrapper
							image={props.value || null}
							altText={props.value?.asset?.altText || ''}
							style={{
								width: '100%',
								height: width > SCREEN_BREAKPOINTS.XS ? 'auto' : '200px',
								maxHeight: maxHeight,
								WebkitMaskImage: `url(${maskImage})`,
								maskImage: `url(${maskImage})`,
								WebkitMaskSize: 'contain',
								maskSize: 'contain',
								WebkitMaskRepeat: 'no-repeat',
								maskRepeat: 'no-repeat',
								objectFit: 'cover',
							}}
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
};

const PostTextContent: React.FC<Props> = (props) => {
	const { width } = useWindowDimensions();

	return (
		<div className={clsx('rich-text', props.wrapperClassname)}>
			<PortableText value={props.value} components={components(width)} />
		</div>
	);
};

export default PostTextContent;
