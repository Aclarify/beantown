import client from '@lib/clients/sanity/sanity.client';
import { Image as CMSImageType } from '@typing/gql/graphql';
import clsx from 'clsx';
import { useNextSanityImage } from 'next-sanity-image';
import Image from 'next/image';
import React from 'react';

interface Props {
	image: CMSImageType | null;
	shouldBePrefetched?: boolean;
	altText?: string;
	stretchWidth?: boolean;
	stretchHeight?: boolean;
	style?: React.CSSProperties;
	className?: string | string[];
}
const CMSImageWrapper: React.FC<Props> = ({
	image,
	shouldBePrefetched,
	altText,
	style,
	stretchWidth = true,
	stretchHeight = false,
	className,
}) => {
	const imageProps = useNextSanityImage(client, image) as any;
	return (
		<Image
			{...imageProps}
			alt={image?.asset?.altText || altText || ''}
			priority={shouldBePrefetched || false}
			className={clsx(className)}
			style={
				style
					? style
					: {
							width: '100%',
							height: '100%',
							objectFit: 'cover',
					  }
			}
		/>
	);
};

export default CMSImageWrapper;
