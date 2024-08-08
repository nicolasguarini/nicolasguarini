import { QueryParams, SanityClient, createClient } from '@sanity/client';
import { apiVersion, dataset, projectId } from '../env';

export const client: SanityClient = createClient({
	projectId,
	dataset,
	apiVersion,
	useCdn: false,
});

export async function sanityFetch<QueryResponse>({
	query,
	params = {},
	revalidate = 60, // default revalidation time in seconds
	tags = [],
  }: {
	query: string
	params?: QueryParams
	revalidate?: number | false
	tags?: string[]
  }) {
	return client.fetch<QueryResponse>(query, params, {
	  next: {
		revalidate: tags.length ? false : revalidate, // for simple, time-based revalidation
		tags, // for tag-based revalidation
	  },
	})
  }
