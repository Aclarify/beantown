import {
	ApolloClient,
	InMemoryCache,
	DocumentNode,
	TypedDocumentNode,
	OperationVariables,
	createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
	uri: process.env.NEXT_PUBLIC_SANITY_URL,
});

const authLink = setContext((_, { headers }) => {
	// get the authentication token from local storage if it exists
	const token = process.env.SANITY_API_READ_TOKEN;
	// return the headers to the context so httpLink can read them
	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : '',
		},
	};
});

export const graphQLClient = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache(),
	ssrMode: true,
	defaultOptions: {
		watchQuery: {
			fetchPolicy: 'no-cache',
			errorPolicy: 'ignore',
		},
		query: {
			fetchPolicy: 'no-cache',
			errorPolicy: 'all',
		},
	},
});

export const getDocument = async <Response = any>(
	query: DocumentNode | TypedDocumentNode<unknown, OperationVariables>,
	variables?: OperationVariables | undefined
): Promise<Response | undefined> => {
	try {
		const { data } = await graphQLClient.query({
			query,
			variables,
		});

		if (data) {
			return data as Response;
		}
		throw new Error('No data returned');
	} catch (err) {
		console.error(err);
	}
};
