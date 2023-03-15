import { gql } from '@apollo/client';
import footerQuery from './get-footer.query';
import navQuery from './get-nav.query';

const bookNowQuery = `allBooknow{
    pageTitle
		metaDescription
		logoLight{
      image{
        asset{
          url
        }
      }
    }
    logoDark{
      image{
        asset{
          url
        }
      }
    }
    bookNowUrl
    bookNowTitle
    bookNowDescription
  }
`;
export default gql`
	query {
		page: ${bookNowQuery}
		header: ${navQuery}
		footer: ${footerQuery}
	}
`;
