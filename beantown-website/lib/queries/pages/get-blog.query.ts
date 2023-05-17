import { gql } from '@apollo/client';
import footerQuery from './get-footer.query';
import navQuery from './get-nav.query';

const blogsQuery = `
    allBlogs {
        pageTitle
        metaDescription
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
        heroTitle
        heroDescription {
          contentRaw
        }
        heroImage {
            asset {
                url
                _id
                _key
            }
        }
        maxBlogPostPerPage
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
    }`;
export default gql`
	query {
		page: ${blogsQuery}
		header: ${navQuery}
 		footer: ${footerQuery}
	}
`;
