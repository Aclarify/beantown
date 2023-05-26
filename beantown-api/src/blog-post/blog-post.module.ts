import { Module } from '@nestjs/common';
import { BlogPostService } from './blog-post.service';
import { BlogPostController } from './blog-post.controller';

@Module({
  controllers: [BlogPostController],
  providers: [BlogPostService],
})
export class BlogPostModule {}
