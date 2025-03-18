import {defineCollection, z} from "astro:content"
import {glob, file} from "astro/loaders"

const blog = defineCollection({
  
  loader: glob({pattern: "**/*.md", base: "./src/data/blog/"}),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    summary: z.string(),
    published: z.coerce.date(),
    hidden: z.boolean(),
    authors: z.array(z.object({
      name: z.string(),
      url: z.string().url()
    }))
  })
})

const projects = defineCollection({
  loader: file("./src/data/projects.json", {parser: (text) => JSON.parse(text)}),
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    description: z.string(),
    icon: z.string(),
    links: z.array(z.object({
      name: z.string(),
      to: z.string().url()
    }))
  })
})

export const collections = { blog, projects }