import { client } from './client';
import {
	clientProjectsQuery,
	personalProjectsQuery,
	projectBySlugQuery,
	projectsSlugsQuery,
} from './queries';

export const fetchProjectSlugs = async () => {
	return await client.fetch(projectsSlugsQuery);
};

export const fetchProjetBySlug = async (slug: string) => {
	return await client.fetch(projectBySlugQuery, { slug });
};

export const fetchPersonalProjects = async () => {
	return await client.fetch(personalProjectsQuery);
};

export const fetchClientProjects = async () => {
	return await client.fetch(clientProjectsQuery);
};
