import { Module } from '@nestjs/common';
import { BlogPostService } from './blog-post.service';
import { BlogPostController } from './blog-post.controller';
import { SanityModule } from '@beantown/services/clients/sanity/sanity.module';

@Module({
  imports: [SanityModule],
  controllers: [BlogPostController],
  providers: [BlogPostService],
})
export class BlogPostModule {}
