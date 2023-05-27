import { ApiProperty } from '@nestjs/swagger';

export class BlogSlug {
  @ApiProperty()
  current: string;
}

export class Asset {
  @ApiProperty()
  _id: string;

  @ApiProperty()
  url: string;

  @ApiProperty({ nullable: true })
  altText: string | null;
}

export class BlogImage {
  asset: Asset;
}

export class BlogTag {
  @ApiProperty()
  _id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  category: string;
}

export class BlogPost {
  @ApiProperty()
  _id: string;

  @ApiProperty()
  _type: 'blogPosts';

  @ApiProperty()
  blogTitle: string;

  @ApiProperty({ type: () => BlogSlug })
  blogSlug: BlogSlug;

  @ApiProperty()
  publishedAt: string;

  @ApiProperty({ type: () => BlogImage })
  blogImage: BlogImage;

  @ApiProperty({ type: () => [BlogTag] })
  blogTags: BlogTag[];

  @ApiProperty()
  blogContent: string;
}