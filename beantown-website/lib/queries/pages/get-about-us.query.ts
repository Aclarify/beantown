import { gql } from '@apollo/client';
import footerQuery from './get-footer.query';
import navQuery from './get-nav.query';

const aboutUsQuery =`

`;

export default gql`
  query {
   page: ${aboutUsQuery}
		header: ${navQuery}
		footer: ${footerQuery}
  }
`;
