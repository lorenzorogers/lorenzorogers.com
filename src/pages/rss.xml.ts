import rss from "@astrojs/rss"
import { getCollection } from "astro:content"

export async function GET(context) {
  const blog = await getCollection("blog")
  return rss({
    title: "Words by LoR",
    description: "Some (rather bad) writing done from my little corner of the world.",
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.published,
      description: post.data.summary,
      link: `/words/${post.id}`
    }))
  })
}