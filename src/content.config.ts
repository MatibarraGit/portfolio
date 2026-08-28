import { glob } from "astro/loaders";
import { z } from "astro/zod"
import { defineCollection } from "astro:content";

// Las fechas se escriben dd-mm-yyyy, que el constructor Date no parsea de forma nativa
const parseDate = (value: string) => {
  const [day, month, year] = value.split("-").map(Number);
  return new Date(year, month - 1, day);
};

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    slug: z.string().regex(/^[a-z0-9-]+$/, "Solo minúsculas, números y guiones"),
    title: z.string(),
    description: z.string(),
    tag: z.string(),
    stack: z.array(z.string()),
    image: z.string(),
    imageAlt: z.string(),
    imageWide: z.string().optional(),
    date: z.string().regex(/^\d{2}-\d{2}-\d{4}$/, "Formato esperado: dd-mm-yyyy").transform(parseDate),
    demo_url: z.url().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { projects };
