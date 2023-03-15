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
                }
            }
        }
        logoDark {
            image {
                asset {
                    url
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
            },
          },
          serviceMembershipDetails
          serviceMembershipCards {
            membershipIcon {
              asset {
                url,
                altText
              }
            },
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
