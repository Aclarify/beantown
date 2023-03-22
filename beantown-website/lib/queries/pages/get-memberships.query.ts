import { gql } from '@apollo/client';
import footerQuery from './get-footer.query';
import navQuery from './get-nav.query';

const membershipsQuery = `
    allMemberships {
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
        heroDescription
        serviceMembershipsSection {
          name,
          serviceMembershipTitle,
          serviceMembershipDescription {
            contentRaw,
          }
          serviceMembershipImage {
            asset {
              url,
              altText,
              _id
              _key
            },
          },
          serviceMembershipDetails
          serviceMembershipCards {
            membershipIcon {
              asset {
                url,
                altText
                _id
                _key
              }
            },
            membershipIndex,
            membershipTitle,
            membershipDescription,
            membershipPrice,
            membershipSummaryItems {
              text,
              isActivated
            },
            button {
              text,
              href
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
    }`;
export default gql`
	query {
		page: ${membershipsQuery}
		header: ${navQuery}
 		footer: ${footerQuery}
	}
`;
