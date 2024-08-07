import { ClientProjectsQueryResult, PersonalProjectsQueryResult } from '@/sanity.types';
import { client } from './client';
import {
	latestClientProjectsQuery,
	latestPersonalProjectsQuery,
} from './queries';

export const fetchPersonalProjects = async (numberOfProjects: number) => {
	return await client.fetch<PersonalProjectsQueryResult>(latestPersonalProjectsQuery, { numOfProjects: numberOfProjects });
};

export const fetchClientProjects = async (numberOfProjects: number) => {
	return await client.fetch<ClientProjectsQueryResult>(latestClientProjectsQuery, { numOfProjects: numberOfProjects });
};
