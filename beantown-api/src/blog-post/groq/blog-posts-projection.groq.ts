export const BLOG_POSTS_PROJECTION = /* groq */ `{
  	_type,
    _rev,
    _id,
    "objectID": _id,
    blogTitle,
    blogImage {
      asset->{_id, _key, url, altText},
    },
    blogSlug {
      current
    },
    "blogContent": array::join(
      blogContent[@._type != 'image'].children[].text,
      " "
    ),
    blogTags [] -> {
      _id, name, category
    },
    publishedAt,
}`;
