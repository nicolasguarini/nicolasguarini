import type { MetadataRoute } from 'next';
import { baseUrl } from '@/src/lib/env';

export default function robots(): MetadataRoute.Robots {
	return {
		rules: [
			{
				userAgent: '*',
				allow: '/',
				// Lo Studio e le route interne non devono finire in SERP
				disallow: ['/studio', '/studio/'],
			},
		],
		sitemap: `${baseUrl}/sitemap.xml`,
		host: baseUrl,
	};
}
