import rss, { type RSSFeedItem } from "@astrojs/rss";
import { SITE } from "../site.config";
import { getPosts, POSTS_DESCRIPTION } from "./posts/_posts";

export async function GET() {
  return rss({
    title: SITE.title,
    description: POSTS_DESCRIPTION,
    site: SITE.url,
    items: await getPostsRss(),
  });
}

export async function getPostsRss(): Promise<RSSFeedItem[]> {
  return (await getPosts()).map((p) => {
    return {
      link: `${SITE.url}/posts/${p.id}`,
      title: p.data.title,
      pubDate: p.data.date,
      author: SITE.author,
      description: p.data.description,
    };
  });
}
