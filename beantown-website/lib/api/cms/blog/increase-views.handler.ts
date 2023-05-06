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

		console.log('Post: ', post);

		if (post) {
			const result = await sanityWriteClient
				.patch(post._id)
				.set({ views: (post.views ?? 0) + 1 })
				.commit();
			console.log('Result: ', result);
		}
	} catch (error) {
		console.error('Cannot increase blog post views: ', error);
		throw error;
	}
};
