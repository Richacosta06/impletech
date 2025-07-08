import { defineCollection, z } from "astro:content";

const solutionsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    icon: z.string(), // SVG code for the icon
  }),
});

const projectsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    img: z.string(),
    implementation_model: z.string(),
    client: z.string(),
    status: z.string(),
    scope: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
        icon: z.string(),
      })
    ),
    results: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
        icon: z.string(),
      })
    ),
    final_impact: z.string(),
  }),
});

export const collections = {
  solutions: solutionsCollection,
  projects: projectsCollection,
};