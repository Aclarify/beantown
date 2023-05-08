import { DocumentNode, OperationVariables } from '@apollo/client';
import { getDocument } from '@lib/clients/apollo/apollo.client';

export const getCMSDocs = async <Response = any>(
	query: DocumentNode,
	variables?: OperationVariables | undefined
): Promise<Response | null> => {
	try {
		const documents = await getDocument<Response>(query, variables);
		if (documents) {
			return documents;
		}
		throw new Error('No documents  returned');
	} catch (err) {
		console.error(err);
		return null;
	}
};

export const getPage = (
	pageQuery: DocumentNode,
	variables?: OperationVariables | undefined
): Promise<unknown | null> => {
	return getCMSDocs(pageQuery, variables);
};
