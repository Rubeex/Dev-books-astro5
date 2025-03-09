import { defineCollection, z } from "astro:content";

const books = defineCollection({
    schema: z.object({
        title: z.string(),
        author: z.string(),
        genre: z.array(z.string()),
        img: z.string(),
        published_year: z.number(),
        volumes: z.number(),
        chapters: z.number(),
        status: z.string(),
        links: z.object({
            web: z.string().url(),
        }),
    }),
});

export const collections = { books };
