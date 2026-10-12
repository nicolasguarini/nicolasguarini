import type { MetadataRoute } from 'next';
import { baseUrl } from '@/src/lib/env';
import { getPosts, getProjects } from '@/src/lib/content';

const STATIC_ROUTES: { path: string; priority: number; changeFrequency: 'daily' | 'weekly' | 'monthly' }[] = [
	{ path: '', priority: 1, changeFrequency: 'weekly' },
	{ path: '/about', priority: 0.8, changeFrequency: 'monthly' },
	{ path: '/projects', priority: 0.8, changeFrequency: 'weekly' },
	{ path: '/projects/personal', priority: 0.8, changeFrequency: 'weekly' },
	{ path: '/projects/client', priority: 0.8, changeFrequency: 'weekly' },
	{ path: '/blog', priority: 0.8, changeFrequency: 'weekly' },
	{ path: '/contact', priority: 0.6, changeFrequency: 'monthly' },
];

const toDate = (value: string | undefined) =>
	value ? new Date(value) : new Date();

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const posts = getPosts();
	const projects = getProjects();

	const staticEntries = STATIC_ROUTES.map((route) => ({
		url: `${baseUrl}${route.path}`,
		lastModified: new Date(),
		changeFrequency: route.changeFrequency,
		priority: route.priority,
	}));

	const postEntries = posts.map((post) => ({
		url: `${baseUrl}/blog/${post.slug}`,
		lastModified: toDate(post.updatedAt ?? post.publishedAt),
		changeFrequency: 'monthly' as const,
		priority: 0.7,
	}));

	const projectEntries = projects
		.map((project) => ({
			url: `${baseUrl}/projects/${project.type}/${project.slug}`,
			lastModified: toDate(project.updatedAt ?? project.finishedDate ?? project.startedDate),
			changeFrequency: 'monthly' as const,
			priority: 0.7,
		}));

	return [...staticEntries, ...postEntries, ...projectEntries];
}
