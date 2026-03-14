import { defineCollection, z } from 'astro:content';

const work = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    metric: z.string().optional(),
    metricLabel: z.string().optional(),
    // Case study fields
    problem: z.string(),
    approach: z.string(),
    outcome: z.string(),
  }),
});

export const collections = { work };
