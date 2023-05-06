import React, { useContext } from 'react';
import { Nav, Footer, Blogs, BlogPosts } from '@typing/gql/graphql';
import Head from 'next/head';
import pageQuery from '@lib/queries/pages/get-blog-post.query';
import WithGlobalContent, {
	generateGetStaticPropsWithParam,
} from 'components/containers/global-content/global-content.container';
import { PageNames } from '@configs/client/pages/pages.config';
import BlogsPageCTASection from 'components/templates/blogs/cta/blogs-cta.section';
import { GlobalContextProps } from '@typing/common/interfaces/contexts.interface';
import { GlobalContext } from '@contexts/global/global.context';
import Header from 'components/organisms/nav';
import FooterSection from 'components/organisms/footer';
import BookNowButton from 'components/atoms/book-now-button.atom';
import { GetStaticPaths } from 'next';
import PostContentSection from 'components/templates/blog-post/post-content/post.section';
import { getExcerpt } from 'utils/helper';
import { useRouter } from 'next/router';
import { increasePostViews } from 'lib/api/cms/blog/increase-views.handler';

export interface BlogPostContentProps {
	page: Blogs[];
	content: BlogPosts[];
	header: Nav[];
	footer: Footer[];
}

const getStaticProps = generateGetStaticPropsWithParam<BlogPostContentProps>(
	pageQuery,
	PageNames.BLOGPOST,
	'slug'
);
export { getStaticProps };

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
	return {
		paths: [],
		fallback: 'blocking',
	};
};

const BlogPostPage: React.FC = () => {
	const { pageContent } =
		useContext<GlobalContextProps<BlogPostContentProps>>(GlobalContext);
	const router = useRouter();

	React.useEffect(() => {
		if (router.query.slug) {
			const slug = router.query.slug as string;
			increasePostViews(slug);
		}
	}, [router.query.slug]);

	if (!pageContent) {
		return null;
	}

	const pageData = pageContent.page[0];
	const contentData = pageContent.content[0];
	const headerData = pageContent.header[0];
	const footerData = pageContent.footer[0];
	const { logoLight, logoDark } = pageData;
	const { blogTitle, blogContentRaw, blogImage } = contentData;

	const PageHead = () => {
		return (
			<Head>
				<title>{blogTitle}</title>
				<meta name="description" content={getExcerpt(blogContentRaw)} />
				<meta property="og:title" content={blogTitle || ''} />
				<meta property="og:description" content={getExcerpt(blogContentRaw)} />
				<meta property="og:image" content={blogImage?.asset?.url || ''} />
			</Head>
		);
	};

	return (
		<div id="blog-post" className="bg-secondary-shade-3">
			<PageHead />
			<Header
				mobileBgColor="bg-secondary-shade-3"
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
			<PostContentSection />
			<BlogsPageCTASection />
			<FooterSection logoDesktop={logoLight?.image} content={footerData} />
		</div>
	);
};

export default WithGlobalContent<BlogPostContentProps>(BlogPostPage);
