import React, { useContext } from 'react';
import { Nav, Footer, Blogs } from '@typing/gql/graphql';
import Head from 'next/head';
import pageQuery from '@lib/queries/pages/get-blogs.query';
import WithGlobalContent, {
	generateGetStaticProps,
} from 'components/containers/global-content/global-content.container';
import { PageNames } from '@configs/client/pages/pages.config';
import BlogsHeroSection from 'components/templates/blogs/hero/blogs-hero.section';
import BlogsPageCTASection from 'components/templates/blogs/cta/blogs-cta.section';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { GlobalContext } from '@contexts/global/global.context';
import Header from 'components/organisms/nav';
import FooterSection from 'components/organisms/footer';
import BookNowButton from 'components/atoms/book-now-button.atom';
import BlogPosts from 'components/templates/blogs/blog-posts/blog-posts';

export interface BlogsContentProps {
	page: Blogs[];
	header: Nav[];
	footer: Footer[];
}

const getStaticProps = generateGetStaticProps<BlogsContentProps>(
	pageQuery,
	PageNames.BLOGS
);
export { getStaticProps };

const BlogsServicePage: React.FC = () => {
	const { pageContent } =
		useContext<GlobalContextProps<BlogsContentProps>>(GlobalContext);

	if (!pageContent) {
		return null;
	}
	const pageData = pageContent.page[0];
	const headerData = pageContent.header[0];
	const footerData = pageContent.footer[0];
	const { logoLight, logoDark, pageTitle, metaDescription } = pageData;
	const PageHead = () => {
		return (
			<Head>
				<title>{pageTitle}</title>
				<meta name="description" content={metaDescription || ''} />
			</Head>
		);
	};
	return (
		<div id="blogs" className="bg-primary-white-shade-1">
			<PageHead />
			<Header
				mobileBgColor="bg-primary-white-shade-1"
				fontColor="text-primary-shade-1"
				logoDesktop={logoDark?.image}
				logoMobile={logoDark?.image}
				content={headerData}
				mobileButtonText={headerData.headerButton?.text || ''}
			>
				<div className=" hidden lg:flex lg:justify-end ">
					<BookNowButton
						fontColor="text-white"
						bgColor="bg-primary-shade-1"
						buttonStyle="headerButton"
					>
						{headerData.headerButton?.text}
					</BookNowButton>
				</div>
			</Header>
			<BlogsHeroSection />
			<BlogPosts />
			<BlogsPageCTASection />
			<FooterSection logoDesktop={logoLight?.image} content={footerData} />
		</div>
	);
};

export default WithGlobalContent<BlogsContentProps>(BlogsServicePage);
