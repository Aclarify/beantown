import { Injectable } from '@nestjs/common';
import { IndexBlogPostDto } from './dto/index-blog-post.dto';
import { Logger } from '@nestjs/common';

@Injectable()
export class BlogPostService {
  private readonly logger: Logger;
  constructor() {
    this.logger = new Logger('BlogPostService');
  }

  indexBlogPost(indexBlogPostDto: IndexBlogPostDto) {
    this.logger.log('indexBlogPost');
    this.logger.log(indexBlogPostDto);
    return 'This action adds a new blogPost';
  }
}
