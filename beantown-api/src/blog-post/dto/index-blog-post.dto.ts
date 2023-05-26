import { BlogPost } from '../entities/blog-post.entity';

export class IndexBlogPostDto extends BlogPost {
  ids: {
    created: string[];
    updated: string[];
    deleted: string[];
  };
}
