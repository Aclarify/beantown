import { BlogPost } from './blog-post.entity';

export class BlogPostIndex extends BlogPost {
  publishedAtTimestamp: number;
  summary: string;
}
