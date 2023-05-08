import { gql } from '@apollo/client';
import footerQuery from './get-footer.query';
import navQuery from './get-nav.query';
const communityQuery = `
   allCommunity {
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
    		heroImage{
          asset{
            url
            _id
            _key
          }
        }
        upcomingEvents{
          eventTitle
          eventUrl
          eventDate
          eventImage{
            asset{
              	url
                _id
                _key
              }
            }
        }
        socialMediaFeed{
          name
          feedUrl
          feedImage{
            asset{
              url
              _key
              _id
            }
          }
        }
        socialMediaIcons{
          href
          image{
            asset{
              url
              _id
              _key
            }
          }
        } 
    ctaTitle
    ctaDescription{
      contentRaw
    }
    ctaButton{
      text
      href
    }
    ctaImage{
      asset{
        url
        _id
        _key
      }
    }
  }
         `;
export default gql`
	query {
		page: ${communityQuery}
		header: ${navQuery}
 		footer: ${footerQuery}
	}
`;
