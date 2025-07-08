import { defineCollection, z } from 'astro:content';

const solutionsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    icon: z.string(), // SVG code for the icon
  }),
});

export const collections = {
  'solutions': solutionsCollection,
};