import { client } from './client';
import { projectBySlugQuery, projectsSlugsQuery } from './queries';

export const fetchProjectSlugs = async () => {
	return await client.fetch(projectsSlugsQuery);
};

export const fetchProjetBySlug = async (slug: string) => {
	return await client.fetch(projectBySlugQuery, { slug });
};
