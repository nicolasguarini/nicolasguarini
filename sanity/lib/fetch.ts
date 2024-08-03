import { ClientProjectsQueryResult, PersonalProjectsQueryResult, ProjectBySlugQueryResult, ProjectCardQueryResult, ProjectsSlugsQueryResult } from '@/sanity.types';
import { client } from './client';
import {
	clientProjectsQuery,
	personalProjectsQuery,
	projectBySlugQuery,
	projectCardQuery,
	projectsSlugsQuery,
} from './queries';

export const fetchProjectSlugs = async () => {
	return await client.fetch<ProjectsSlugsQueryResult>(projectsSlugsQuery);
};

export const fetchProjetBySlug = async (slug: string) => {
	return await client.fetch<ProjectBySlugQueryResult>(projectBySlugQuery, { slug });
};

export const fetchPersonalProjects = async () => {
	return await client.fetch<PersonalProjectsQueryResult>(personalProjectsQuery);
};

export const fetchClientProjects = async () => {
	return await client.fetch<ClientProjectsQueryResult>(clientProjectsQuery);
};

export const fetchProjectCardBySlug = async (slug: string) => {
	return await client.fetch<ProjectCardQueryResult>(projectCardQuery, { slug });
};
