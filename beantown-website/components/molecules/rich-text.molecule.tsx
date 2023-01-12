import React from 'react';
import { PortableText } from '@portabletext/react';

interface Props {
	value: any;
}
const RichText: React.FC<Props> = (props) => {
	const components = {
		types: {
			break: (props: any) => {
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
						className="underline text-[#206B9E] hover:cursor-pointer"
						href={props.value.href}
					>
						{props.children}
					</a>
				);
			},
		},
	};
	return (
		<div>
			<PortableText value={props.value} components={components} />
		</div>
	);
};
export default RichText;
