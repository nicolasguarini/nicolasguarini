import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const ROOT = path.join(process.cwd(), 'content');

export type Post = {
	title: string;
	slug: string;
	excerpt: string;
	publishedAt: string;
	updatedAt?: string;
	categories?: string[];
	featuredImage?: string;
	contentLength: number;
	content: string;
};

export type Project = {
	name: string;
	slug: string;
	type: 'personal' | 'client';
	excerpt?: string;
	service?: string;
	categories?: string[];
	startedDate?: string;
	finishedDate?: string;
	url?: string;
	updatedAt?: string;
	featuredImage?: string;
	images?: { src: string; alt?: string }[];
	contentLength: number;
	content: string;
};

function readAll<T>(dir: string): T[] {
	const base = path.join(ROOT, dir);
	return fs.readdirSync(base)
		.filter((f) => f.endsWith('.md'))
		.map((f) => ({ f, ...matter(fs.readFileSync(path.join(base, f), 'utf8')) }))
		// `draft: true` nel frontmatter nasconde il contenuto dal sito
		.filter(({ data }) => !data.draft)
		.map(({ f, data, content }) => ({
			...data,
			slug: f.replace(/\.md$/, ''),
			contentLength: content.length,
			content,
		}) as T);
}

const byDateDesc = <T,>(key: (x: T) => string | undefined) => (a: T, b: T) =>
	(key(b) ?? '').localeCompare(key(a) ?? '');

export const getPosts = (limit?: number) =>
	readAll<Post>('posts').sort(byDateDesc((p) => p.publishedAt)).slice(0, limit);

export const getPost = (slug: string) => getPosts().find((p) => p.slug === slug) ?? null;

export const getProjects = (type?: Project['type'], limit?: number) =>
	readAll<Project>('projects')
		.filter((p) => !type || p.type === type)
		.sort(byDateDesc((p) => p.startedDate))
		.slice(0, limit);

export const getProject = (slug: string) => getProjects().find((p) => p.slug === slug) ?? null;
