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
  }),
});

export const collections = {
  solutions: solutionsCollection,
  projects: projectsCollection,
};
