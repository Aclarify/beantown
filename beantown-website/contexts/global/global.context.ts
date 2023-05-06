/* eslint-disable @typescript-eslint/no-unnecessary-type-constraint */
import { createContext } from 'react';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { DocumentNode } from 'graphql';
import { PageNames } from '@configs/client/pages/pages.config';
import { getPage } from '@typing/api/api';
import { OperationVariables } from '@apollo/client';
export const GlobalContext = createContext({});

// const composeCmsContent = ({
//   contentCoordinators,
// }: ComposeCmsContent): ComposeCmsContent => {
//   let composedCoordinators: ContentCoordinatorProps[] = contentCoordinators;
//   // Parse Markdown Content
//   composedCoordinators = parseMarkdownContent(composedCoordinators);
//   // Any other parsing...
//   return { contentCoordinators: composedCoordinators };
// };
export const constructGlobalContextProps = async <
	CustomPageContentProps extends unknown
>(
	pageQuery?: DocumentNode,
	pageName?: PageNames[keyof PageNames],
	variables?: OperationVariables | undefined
): Promise<GlobalContextProps<CustomPageContentProps>> => {
	const globalData: Record<string, unknown> = {};
	//   const cmsContent = composeCmsContent(
	//     (await getContentCoordinators(pageName)) as ComposeCmsContent
	//   );
	//   const socialConfigContent = await getSocialConfigs();
	//   if (cmsContent) {
	//     globalData.cmsContent = cmsContent;
	//   }
	//   if (socialConfigContent) {
	//     globalData.socialConfigContent = socialConfigContent;
	//   }
	if (pageQuery) {
		const pageContent = await getPage(pageQuery, variables);
		if (pageContent) {
			globalData.pageContent = pageContent;
		}
	}
	return globalData;
};
