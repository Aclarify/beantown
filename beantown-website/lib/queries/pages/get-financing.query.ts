import { gql } from '@apollo/client';
import footerQuery from './get-footer.query';
import navQuery from './get-nav.query';

const financingQuery = ` allFinancing {
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
  		planIcon{
        asset{
          url
          _id
          _key
        }
      }
  		planCards{
        titleText
        description
      }
			aboutSectionTitle
			aboutSectionDescription {
				contentRaw
			}
			aboutSectionImage {
				asset {
					url
					_id
					_key
				}
			}
		
			faqTitle
			faqDescription
			faqButton {
				text
				href
			}
			faqList {
				question
                answer
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
			ctaButton {
				text
				href
			}
		
		}
`;
export default gql`
	query {
		page: ${financingQuery}
		header: ${navQuery}
		footer: ${footerQuery}
	}
`;
