import { SanityClient, createClient } from '@sanity/client';
import { apiVersion, dataset, projectId } from '../env';

export const client: SanityClient = createClient({
	projectId,
	dataset,
	apiVersion,
	useCdn: false,
});
