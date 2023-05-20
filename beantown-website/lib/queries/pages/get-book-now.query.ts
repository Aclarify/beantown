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
    bookNowUrl
    bookNowTitle
    bookNowDescription
    bookNowCtaText
  }
`;
export default gql`
	query {
		page: ${bookNowQuery}
		header: ${navQuery}
		footer: ${footerQuery}
	}
`;
