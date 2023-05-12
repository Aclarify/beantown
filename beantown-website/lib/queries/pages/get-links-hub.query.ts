import { gql } from '@apollo/client';
import footerQuery from './get-footer.query';
import navQuery from './get-nav.query';

const linksHubQuery = `allLinksHub{
    pageTitle
		metaDescription
		logoLight{
      image{
        asset{
          url
          _id
          _key
        }
      }
    }
    logoDark{
      image{
        asset{
          url
          _id
          _key
        }
      }
    }
    linksHubTitle
    linksHubDescription
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
    links{
      linkName
      heroIconName
      href
    }
  }
`;
export default gql`
	query {
		page: ${linksHubQuery}
		header: ${navQuery}
		footer: ${footerQuery}
	}
`;
