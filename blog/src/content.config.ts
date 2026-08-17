import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const LibraryCollection = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/data/Clippings",
  }),
  schema: z.object({
    complete: z.date().optional(),
    publish: z.boolean().optional(),
    in_progress: z.boolean().optional(),
    source: z.string().url(),
    tags: z.string().array().optional(),
  }),
});

const NotesCollection = defineCollection({
  loader: glob({
    pattern: ["**/*.{md,mdoc}", "!French/**"],
    base: "./src/data/Notes",
  }),
  schema: z.object({
    publish: z.boolean().optional(),
    date: z.date(),
    description: z.string().optional(),
    tags: z.optional(z.string().array()),
  }),
});

const FrenchNotesCollection = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdoc}",
    base: "./src/data/Notes/French",
  }),
  schema: z.object({
    publish: z.boolean().optional(),
    date: z.date(),
    description: z.string().optional(),
    tags: z.optional(z.string().array()),
  }),
});


export const collections = {
  library: LibraryCollection,
  notes: NotesCollection,
  frenchNotes: FrenchNotesCollection
};
