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
    
  }
`;
export default gql`
	query {
		page: ${linksHubQuery}
		header: ${navQuery}
		footer: ${footerQuery}
	}
`;
