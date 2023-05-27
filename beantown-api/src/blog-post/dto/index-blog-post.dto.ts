import { ApiProperty } from '@nestjs/swagger';

export class IndexBlogPostIds {
  @ApiProperty()
  created: string[];
  @ApiProperty()
  updated: string[];
  @ApiProperty()
  deleted: string[];
}

export class IndexBlogPostDto {
  @ApiProperty()
  ids: IndexBlogPostIds;
}
