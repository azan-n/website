import type { ImageMetadata } from "astro";

export interface PostMeta {
  title: string;
  date: Date;
  description: string;
  tags?: string[];
  image?: ImageMetadata;
}

interface PostModule {
  meta: PostMeta;
}

export interface Post {
  id: string;
  data: PostMeta;
}

const modules = import.meta.glob<PostModule>("/src/pages/posts/*/index.astro", {
  eager: true,
});

const allPosts: Post[] = Object.entries(modules)
  .map(([filePath, mod]) => {
    const match = filePath.match(/\/posts\/([^/]+)\/index\.astro$/);
    if (!match?.[1]) {
      throw Error(
        `${filePath} has been defined outside post directory conventions.`,
      );
    }
    return { id: match[1], data: mod.meta };
  })
  .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

/**
 * All posts in the posts directory, sorted by date.
 */
export async function getPosts(): Promise<Post[]> {
  return allPosts;
}

export const POSTS_DESCRIPTION =
  "Writing on things I've built, broken, and learned from";
