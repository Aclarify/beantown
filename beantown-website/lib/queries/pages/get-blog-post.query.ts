import { gql } from '@apollo/client';
import footerQuery from './get-footer.query';
import navQuery from './get-nav.query';

const blogPostContentQuery = `
    allBlogPosts(
        where: { blogSlug: { current: { eq: $slug } } }
    ) {
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
            category
        }
        views
        publishedAt
    }
`;

const blogPostPageQuery = `
    allBlogs {
        logoLight {
            image {
                asset {
                    url
                    _id
                    _key
                }
            }
        }
        logoDark {
            image {
                asset {
                    url
                    _id
                    _key
                }
            }
        }
        ctaTitle
        ctaDescription {
            contentRaw
        }
        ctaImage {
            asset {
                url
                _id
                _key
            }
        }
        finalCtaButton {
          text
          href
		}
    }
`;

export default gql`
	query($slug: String) {
		page: ${blogPostPageQuery}
		content: ${blogPostContentQuery}
		header: ${navQuery}
 		footer: ${footerQuery}
	}
`;
