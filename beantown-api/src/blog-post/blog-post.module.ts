import { Module } from '@nestjs/common';
import { BlogPostService } from './blog-post.service';
import { BlogPostController } from './blog-post.controller';
import { SanityModule } from '@beantown/services/clients/sanity/sanity.module';
import { AlgoliaModule } from '../clients/algolia/algolia.module';
import { OpenaiModule } from '../openai/openai.module';

@Module({
  imports: [SanityModule, AlgoliaModule, OpenaiModule],
  controllers: [BlogPostController],
  providers: [BlogPostService],
})
export class BlogPostModule {}
