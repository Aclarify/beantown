import { gql } from '@apollo/client';
import footerQuery from './get-footer.query';
import navQuery from './get-nav.query';

const bookNowQuery = `allBooknow{
		logoDesktop{
      image{
        asset{
          url
        }
      }
    }
    footerLogo{
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
