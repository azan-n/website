import rss, { type RSSFeedItem } from "@astrojs/rss";
import { SITE } from "../site.config";
import { getProjectPosts } from "./projects/_projects";

export async function GET() {
  return rss({
    title: "Azan's projects",
    description: "Things I've built, broken, and learned from along the way",
    site: SITE.url,
    items: await getProjectRss(),
  });

}
export async function getProjectRss(): Promise<RSSFeedItem[]> {
  return (await getProjectPosts()).map((p) => {
    return {
      link: `${SITE.url}/projects/${p.id}`,
      title: p.data.title,
      pubDate: p.data.date,
      author: SITE.author,
      description: p.data.description,
    };
  });
}
