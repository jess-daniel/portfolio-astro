import { defineCollection, z } from 'astro:content';

const work = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		heroImage: z.string().optional(),
		date: z.string().optional(),
		order: z.number().optional(),
	}),
});

const projects = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		heroImage: z.string().optional(),
		date: z.string().optional(),
		order: z.number().optional(),
	}),
});

export const collections = { work, projects };
