import { baseUrl } from './env';

export const SITE_NAME = 'Nicolas Guarini';
export const SITE_DESCRIPTION =
	'Software engineer at Elmec Informatica, working on backend services and the infrastructure they run on. MSc in Computer Science. Open to freelance work.';

export const SOCIAL_PROFILES = [
	'https://github.com/nicolasguarini',
	'https://www.linkedin.com/in/nicolasguarini/',
	'https://www.instagram.com/nicolas.guarini/',
];

/** Schema.org Person: aggancia il sito all'identita' nel Knowledge Graph. */
export const personSchema = {
	'@context': 'https://schema.org',
	'@type': 'Person',
	'@id': `${baseUrl}/#person`,
	name: SITE_NAME,
	url: baseUrl,
	image: `${baseUrl}/assets/propic.jpg`,
	email: 'mailto:web@nicolasguarini.it',
	jobTitle: 'Software Engineer',
	description: SITE_DESCRIPTION,
	worksFor: {
		'@type': 'Organization',
		name: 'Elmec Informatica',
		url: 'https://www.elmec.com',
	},
	alumniOf: [
		{
			'@type': 'CollegeOrUniversity',
			name: 'University of Milano-Bicocca',
			url: 'https://www.unimib.it',
		},
		{
			'@type': 'CollegeOrUniversity',
			name: 'University of Insubria',
			url: 'https://www.uninsubria.it',
		},
		{
			'@type': 'CollegeOrUniversity',
			name: 'Stockholm University',
			url: 'https://www.su.se',
		},
	],
	knowsAbout: [
		'Software Engineering',
		'Web Development',
		'DevOps',
		'Kubernetes',
		'Go',
		'Django',
		'TypeScript',
		'Data Science',
	],
	sameAs: SOCIAL_PROFILES,
};

/** Schema.org WebSite, con la search action verso il blog. */
export const websiteSchema = {
	'@context': 'https://schema.org',
	'@type': 'WebSite',
	'@id': `${baseUrl}/#website`,
	url: baseUrl,
	name: SITE_NAME,
	description: SITE_DESCRIPTION,
	inLanguage: 'en',
	publisher: { '@id': `${baseUrl}/#person` },
};

export function blogPostingSchema({
	title,
	description,
	slug,
	publishedAt,
	imageUrl,
	categories,
}: {
	title: string;
	description?: string;
	slug: string;
	publishedAt?: string;
	imageUrl?: string;
	categories?: string[];
}) {
	return {
		'@context': 'https://schema.org',
		'@type': 'BlogPosting',
		'@id': `${baseUrl}/blog/${slug}#post`,
		headline: title,
		description,
		url: `${baseUrl}/blog/${slug}`,
		mainEntityOfPage: `${baseUrl}/blog/${slug}`,
		datePublished: publishedAt,
		dateModified: publishedAt,
		inLanguage: 'en',
		...(imageUrl ? { image: imageUrl } : {}),
		...(categories?.length ? { keywords: categories.join(', ') } : {}),
		author: { '@id': `${baseUrl}/#person` },
		publisher: { '@id': `${baseUrl}/#person` },
		isPartOf: { '@id': `${baseUrl}/#website` },
	};
}
