import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
		}),
});

const project = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/project', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			startDate: z.coerce.date(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			currentStatus: z.string(),
			company: z.string(),
			teamSize: z.string(),
			role: z.string(),
			heroImage: image().optional(),
			skills: z.array(z.string()).default([]),
			links: z.array(
					z.object({
						name: z.string(),
						url: z.string().url()
					}))
				.default([]),
		}),
});

export const collections = { blog, project };
