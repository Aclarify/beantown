import sanityWriteClient from 'lib/clients/sanity/sanity-write.client';

export const increasePostViews = async (slug: string) => {
	try {
		const post = await sanityWriteClient.fetch(
			`
                *[_type == "blogPosts" && blogSlug.current == $slug][0] {
                    _id,
					views,
                }
            `,
			{ slug }
		);

		if (post) {
			await sanityWriteClient
				.patch(post._id)
				.set({ views: (post.views ?? 0) + 1 })
				.commit();
		}
	} catch (error) {
		console.error('Cannot increase blog post views: ', error);
		throw error;
	}
};
