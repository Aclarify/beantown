import {
  Controller,
  Post,
  Body,
  Headers,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { BlogPostService } from './blog-post.service';
import { IndexBlogPostDto } from './dto/index-blog-post.dto';
import { ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { SanityService } from '@beantown/services/clients/sanity/sanity.service';
import { SIGNATURE_HEADER_NAME } from '@sanity/webhook';

@Controller('blog-post')
export class BlogPostController {
  constructor(
    private readonly blogPostService: BlogPostService,
    private readonly sanityService: SanityService,
  ) {}

  @Post('index-blog-post')
  @ApiOperation({ summary: 'Index a blog post' })
  @ApiResponse({
    status: 201,
    description: 'The blog post has been successfully indexed.',
  })
  @ApiBody({ type: IndexBlogPostDto })
  indexBlogPost(
    @Body() indexBlogPostDto: IndexBlogPostDto,
    @Headers() headers: { [SIGNATURE_HEADER_NAME]: string },
  ) {
    const sanitySignatureHeader = headers[SIGNATURE_HEADER_NAME];
    if (
      !this.sanityService.isValidSanitySignature(
        indexBlogPostDto,
        sanitySignatureHeader,
      )
    ) {
      throw new HttpException('Bad Request', HttpStatus.BAD_REQUEST);
    }

    return this.blogPostService.indexBlogPost(indexBlogPostDto);
  }
}
