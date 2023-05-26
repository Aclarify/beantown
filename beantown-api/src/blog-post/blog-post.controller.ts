import { Controller, Post, Body } from '@nestjs/common';
import { BlogPostService } from './blog-post.service';
import { IndexBlogPostDto } from './dto/index-blog-post.dto';
import { ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';

@Controller('blog-post')
export class BlogPostController {
  constructor(private readonly blogPostService: BlogPostService) {}

  @Post('index-blog-post')
  @ApiOperation({ summary: 'Index a blog post' })
  @ApiResponse({
    status: 201,
    description: 'The blog post has been successfully indexed.',
  })
  @ApiBody({ type: IndexBlogPostDto })
  indexBlogPost(@Body() indexBlogPostDto: IndexBlogPostDto) {
    return this.blogPostService.indexBlogPost(indexBlogPostDto);
  }
}
