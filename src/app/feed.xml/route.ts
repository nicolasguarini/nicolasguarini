import { baseUrl } from '@/src/lib/env';
import { SITE_DESCRIPTION, SITE_NAME } from '@/src/lib/seo';
import { sanityFetch } from '@/src/sanity/lib/client';
import { feedPostsQuery } from '@/src/sanity/lib/queries';

type FeedPost = {
	title: string | null;
	slug: string;
	excerpt: string | null;
	publishedAt: string | null;
	categories: string[] | null;
};

const escapeXml = (value: string) =>
	value
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&apos;');

export const revalidate = 3600;

export async function GET() {
	const posts = await sanityFetch<FeedPost[]>({
		query: feedPostsQuery,
		revalidate: 3600,
	});

	const items = posts
		.map((post) => {
			const url = `${baseUrl}/blog/${post.slug}`;
			const categories = (post.categories ?? [])
				.map((category) => `<category>${escapeXml(category)}</category>`)
				.join('');

			return `    <item>
      <title>${escapeXml(post.title ?? '')}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${escapeXml(post.excerpt ?? '')}</description>
      ${post.publishedAt ? `<pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>` : ''}
      ${categories}
    </item>`;
		})
		.join('\n');

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(SITE_NAME)}</title>
    <link>${baseUrl}/blog</link>
    <description>${escapeXml(SITE_DESCRIPTION)}</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/rss+xml; charset=utf-8',
			'Cache-Control': 'public, max-age=3600, s-maxage=3600',
		},
	});
}
