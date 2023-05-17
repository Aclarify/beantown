/* eslint-disable @typescript-eslint/no-unnecessary-type-constraint */
import { PageNames } from '@configs/client/pages/pages.config';
import {
	constructGlobalContextProps,
	GlobalContext,
} from '@contexts/global/global.context';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { DocumentNode } from 'graphql';
import { GetStaticPropsContext } from 'next';
import React from 'react';

export interface Props<CustomPageContentProps> {
	globalContext: GlobalContextProps<CustomPageContentProps>;
}

// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-constraint
const WithGlobalContent = <CustomPageContentProps extends unknown>(
	Component: React.ComponentType<Props<CustomPageContentProps>>
): React.FC<Props<CustomPageContentProps>> => {
	const wrappedComponent = ({
		globalContext,
		...props
	}: Props<CustomPageContentProps>) => (
		<GlobalContext.Provider value={globalContext}>
			<Component {...(props as Props<CustomPageContentProps>)} />
		</GlobalContext.Provider>
	);

	return wrappedComponent;
};

interface StaticProps<CustomPageContentProps> {
	props: {
		globalContext: GlobalContextProps<CustomPageContentProps>;
	};
}
// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-constraint
export const generateGetStaticProps = <CustomPageContentProps extends unknown>(
	pageQuery?: DocumentNode,
	pageName?: PageNames
): (() => Promise<StaticProps<CustomPageContentProps>>) => {
	return async () => {
		try {
			const globalContextProps =
				await constructGlobalContextProps<CustomPageContentProps>(
					pageQuery,
					pageName
				);
			return {
				props: {
					globalContext: {
						...globalContextProps,
					},
				},
			};
		} catch (error) {
			return {
				props: {
					globalContext: {},
				},
			};
		}
	};
};

export const generateGetStaticPropsWithParam = <
	CustomPageContentProps extends unknown
>(
	pageQuery?: DocumentNode,
	pageName?: PageNames,
	paramName?: string
): (({
	params,
}: GetStaticPropsContext) => Promise<StaticProps<CustomPageContentProps>>) => {
	return async ({ params }) => {
		try {
			const globalContextProps =
				await constructGlobalContextProps<CustomPageContentProps>(
					pageQuery,
					pageName,
					params && paramName ? { [paramName]: params[paramName] } : undefined
				);
			return {
				props: {
					globalContext: {
						...globalContextProps,
					},
				},
			};
		} catch (error) {
			return {
				props: {
					globalContext: {},
				},
			};
		}
	};
};

export default WithGlobalContent;
