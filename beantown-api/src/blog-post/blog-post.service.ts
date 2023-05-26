import { Inject, Injectable } from '@nestjs/common';
import { IndexBlogPostDto } from './dto/index-blog-post.dto';
import { Logger } from '@nestjs/common';
import { SanityService } from '../clients/sanity/sanity.service';
import { AlgoliaService } from '../clients/algolia/algolia.service';
import { AlgoliaConfig } from '@beantown/config';
import { ConfigService } from '@nestjs/config';
import { BLOG_POSTS_PROJECTION } from './groq/blog-posts-projection.groq';
import indexer from 'sanity-algolia';
import { OpenAIService } from '../openai/openai.service';

@Injectable()
export class BlogPostService {
  private readonly logger: Logger;
  constructor(
    private readonly configService: ConfigService,
    private readonly sanityService: SanityService,
    private readonly algoliaService: AlgoliaService,
    private readonly openAIService: OpenAIService,
  ) {
    this.logger = new Logger('BlogPostService');
  }

  async indexBlogPost(indexBlogPostDto: IndexBlogPostDto) {
    const blogSearchIndexName = this.configService.get<
      AlgoliaConfig['algoliaCollections']['algoliaBlogSearchIndexName']
    >('algoliaCollections.algoliaBlogSearchIndexName');

    // Get an initial index
    const index =
      this.algoliaService.algoliaWriteClient.initIndex(blogSearchIndexName);

    const sanityAlgolia = indexer(
      {
        blogPosts: {
          index,
          projection: BLOG_POSTS_PROJECTION,
        },
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      async (document: any) => {
        const publishedAt = new Date().toISOString();
        const publishedAtTimestamp = Math.floor(Date.now() / 1000);
        const summary = await this.openAIService.summarizeBlog(
          document.blogContent,
        );
        const updatedDoc = {
          slug: document.blogSlug.current,
          title: document.blogTitle,
          tags: document.blogTags.map((tag: any) => tag.category),
          publishedAt,
          publishedAtTimestamp,
          summary,
        };
        return updatedDoc;
      },
    );

    await sanityAlgolia.webhookSync(
      this.sanityService.getClient(),
      indexBlogPostDto,
    );

    return {
      success: true,
    };
  }
}
