import client from '@lib/clients/sanity/sanity.client';
import { Image as CMSImageType } from '@typing/gql/graphql';
import { useNextSanityImage } from 'next-sanity-image';
import Image from 'next/image';
import React from 'react';

interface Props {
	image: CMSImageType | null;
	shouldBePrefetched?: boolean;
	altText?: string;
	stretchWidth?: boolean;
	stretchHeight?: boolean;
}
const CMSImageWrapper: React.FC<Props> = ({
	image,
	shouldBePrefetched,
	altText,
	stretchWidth = true,
	stretchHeight = false,
}) => {
	const imageProps = useNextSanityImage(client, image) as any;
	const imageWidth = stretchWidth ? '100%' : 'auto';
	const imageHeight = stretchHeight ? '100%' : 'auto';
	return (
		<Image
			{...imageProps}
			alt={image?.asset?.altText || altText || ''}
			priority={shouldBePrefetched || false}
			style={{
				width: imageWidth,
				height: imageHeight,
			}}
		/>
	);
};

export default CMSImageWrapper;