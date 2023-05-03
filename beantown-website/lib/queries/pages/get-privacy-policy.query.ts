import { gql } from '@apollo/client';
import footerQuery from './get-footer.query';
import navQuery from './get-nav.query';
const privacyPolicyQuery = `
  allPrivacyPolicy {
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
			heroImage {
                    asset {
                        url
                        _id
                        _key
                    }
			}
			heroDescription
		sectionTitle
			privacyPolicyContent {
				contentRaw
			}
     } `;
export default gql`
	query {
		page: ${privacyPolicyQuery}
		header: ${navQuery}
 		footer: ${footerQuery}
	}
`;
