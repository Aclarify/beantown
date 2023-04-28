import { gql } from '@apollo/client';

const blogPostsQuery = `
    allBlogPosts(
        sort: { publishedAt: DESC }
            limit: $limit,
            offset: $offset
        ) 
    {
        _id
        blogTitle
        blogImage {
        asset {
            _id
            _key
            altText
            url
        }
        }
        blogSlug {
            current
        }
        blogContentRaw
        blogTags {
            _id
            name
        }
        publishedAt
    }`;
export default gql`
	query ($limit: Int, $offset: Int) {
		${blogPostsQuery}
	}
`;
