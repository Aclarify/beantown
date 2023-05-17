import { gql } from '@apollo/client';

const blogCategoriesQuery = `
    allCategories(
        sort: { name: ASC }
    ) {
        _id
        name
        category
    }`;
export default gql`
	query {
		${blogCategoriesQuery}
	}
`;
