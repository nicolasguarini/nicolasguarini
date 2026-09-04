import type { MetadataRoute } from 'next';
import { baseUrl } from '@/src/lib/env';
import { sanityFetch } from '@/src/sanity/lib/client';
import { sitemapEntriesQuery } from '@/src/sanity/lib/queries';

type SitemapEntries = {
	posts: { slug: string; lastModified: string | null }[];
	projects: { slug: string; type: string | null; lastModified: string | null }[];
};

const STATIC_ROUTES: { path: string; priority: number; changeFrequency: 'daily' | 'weekly' | 'monthly' }[] = [
	{ path: '', priority: 1, changeFrequency: 'weekly' },
	{ path: '/about', priority: 0.8, changeFrequency: 'monthly' },
	{ path: '/projects', priority: 0.8, changeFrequency: 'weekly' },
	{ path: '/projects/personal', priority: 0.8, changeFrequency: 'weekly' },
	{ path: '/projects/client', priority: 0.8, changeFrequency: 'weekly' },
	{ path: '/blog', priority: 0.8, changeFrequency: 'weekly' },
	{ path: '/contact', priority: 0.6, changeFrequency: 'monthly' },
];

const toDate = (value: string | null | undefined) =>
	value ? new Date(value) : new Date();

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const { posts, projects } = await sanityFetch<SitemapEntries>({
		query: sitemapEntriesQuery,
		revalidate: 3600,
	});

	const staticEntries = STATIC_ROUTES.map((route) => ({
		url: `${baseUrl}${route.path}`,
		lastModified: new Date(),
		changeFrequency: route.changeFrequency,
		priority: route.priority,
	}));

	const postEntries = posts.map((post) => ({
		url: `${baseUrl}/blog/${post.slug}`,
		lastModified: toDate(post.lastModified),
		changeFrequency: 'monthly' as const,
		priority: 0.7,
	}));

	const projectEntries = projects
		.filter((project) => project.type)
		.map((project) => ({
			url: `${baseUrl}/projects/${project.type}/${project.slug}`,
			lastModified: toDate(project.lastModified),
			changeFrequency: 'monthly' as const,
			priority: 0.7,
		}));

	return [...staticEntries, ...postEntries, ...projectEntries];
}
