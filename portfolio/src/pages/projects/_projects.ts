import type { ImageMetadata } from "astro";

export type ProjectMeta = {
  title: string;
  date: Date;
  description: string;
  image: ImageMetadata;
  tech?: string[];
  role: string[];
}

type ProjectModule = {
  meta: ProjectMeta;
}

export type Project = {
  id: string;
  data: ProjectMeta;
}

const modules = import.meta.glob<ProjectModule>(
  "/src/pages/projects/*/index.astro",
  { eager: true },
);

const allProjects: Project[] = Object.entries(modules)
  .map(([filePath, mod]) => {
    const match = filePath.match(/\/projects\/([^/]+)\/index\.astro$/);
    if (!match?.[1]) {
      throw Error(
        `${filePath} has been defined outside project directory conventions.`,
      );
    }
    return { id: match[1], data: mod.meta };
  })
  .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

/**
 * Default function to get all posts in the projects directory.
 * Posts are sorted by date.
 */
export async function getProjectPosts(): Promise<Project[]> {
  return allProjects;
}
