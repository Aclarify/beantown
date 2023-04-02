import React from 'react';
import { PortableText } from '@portabletext/react';
import clsx from 'clsx';

interface Props {
	value: any;
	wrapperClassname?: string;
}
const RichText: React.FC<Props> = (props) => {
	const components = {
		types: {
			breakType: (props: any) => {
				const { style } = props.value;
				if (style === 'lineBreak') {
					return <br className="lineBreak" />;
				}
				return null;
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
export default RichText;
