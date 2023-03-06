import client from '@lib/clients/sanity/sanity.client';
import { Image as CMSImageType } from '@typing/gql/graphql';
import { useNextSanityImage } from 'next-sanity-image';
import Image from 'next/image';
import React from 'react';

interface Props {
	image: CMSImageType | null;
	shouldBePrefetched?: boolean;
	altText?: string;
}
const CMSImageWrapper: React.FC<Props> = (props) => {
	const imageProps = useNextSanityImage(client, props.image) as any;
	return (
		<Image
			{...imageProps}
			alt={props.image?.asset?.altText || props.altText || ''}
			priority={props.shouldBePrefetched || false}
			style={{
				width: '100%',
				height: '100%',
			}}
		/>
	);
};

export default CMSImageWrapper;
