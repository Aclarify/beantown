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
import { SANITY_IDEMPOTENCY_HEADER } from '../clients/sanity/sanity.constants';

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
    const sanityRequestKey = headers[SANITY_IDEMPOTENCY_HEADER];
    if (
      !this.sanityService.isValidSanitySignature(
        JSON.stringify(indexBlogPostDto),
        sanitySignatureHeader,
      )
    ) {
      throw new HttpException('Bad Request', HttpStatus.BAD_REQUEST);
    }

    this.blogPostService.indexBlogPost(indexBlogPostDto, sanityRequestKey);

    return {
      success: true,
    };
  }
}
