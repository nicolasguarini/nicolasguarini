import { SanityClient, createClient } from '@sanity/client';

export const client: SanityClient = createClient({
	projectId: 'qtdomht6',
	dataset: 'production',
	apiVersion: '2021-08-31',
	useCdn: true,
});
