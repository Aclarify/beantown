/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext } from 'react';
import { BlogPosts } from '@typing/gql/graphql';

interface SearchContextProps {
	query: string;
	setQuery: React.Dispatch<React.SetStateAction<string>>;
	page: number;
	setPage: React.Dispatch<React.SetStateAction<number>>;
	hits: BlogPosts[];
	nbPages: number;
	handleSearch: (query: string) => void;
}

export const SearchContext = createContext<SearchContextProps>({
	query: '',
	setQuery: () => {},
	page: 0,
	setPage: () => {},
	hits: [],
	nbPages: 0,
	handleSearch: () => {},
});
