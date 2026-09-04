import { Analytics } from '@vercel/analytics/react';
import '../../styles/globals.css';
import type { Metadata } from 'next';
import Navbar from '@/src/components/layout/navbar';
import Footer from '@/src/components/layout/footer';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { SITE_DESCRIPTION, personSchema, websiteSchema } from '@/src/lib/seo';
import { baseUrl } from '@/src/lib/env';
import { geist } from '@/src/lib/fonts';
import JsonLd from '@/src/components/jsonLd';

export const metadata: Metadata = {
	title: {
		template: '%s | Nicolas Guarini',
		default: 'Nicolas Guarini | Personal Website',
	},
	description: 'Software Engineer at Elmec Informatica and freelance web developer. MSc in Computer Science. I build web apps, mobile apps, and data-driven products.',
	generator: 'Next.js',
	applicationName: 'Nicolas Guarini | Personal Website',
	referrer: 'origin-when-cross-origin',
	keywords: [
		'nicolas guarini',
		'freelance',
		'freelancer',
		'developer',
		'blog',
		'articles',
		'posts',
		'sito web',
		'realizzazione siti web',
		'sviluppatore',
		'portfolio',
		'insubria',
		'bicocca',
		'elmec',
		'software engineer',
		'devops',
		'computer science',
		'university',
		'università',
		'data science',
		'django',
		'golang',
		'kubernetes',
		'typescript',
		'next',
		'nextjs',
	],
	creator: 'Nicolas Guarini',
	openGraph: {
		title: {
			template: '%s | Nicolas Guarini',
			default: 'Nicolas Guarini | Personal Website',
		},
		description: 'Software Engineer at Elmec Informatica and freelance web developer. MSc in Computer Science. I build web apps, mobile apps, and data-driven products.',
		url: baseUrl,
		locale: 'en-US',
		type: 'website',
		images: [
			{
				url: '/assets/site-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Nicolas Guarini',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: {
			template: '%s | Nicolas Guarini',
			default: 'Nicolas Guarini | Personal Website',
		},
		description: SITE_DESCRIPTION,
		images: ['/assets/site-image.jpg'],
	},
	alternates: {
		canonical: '/',
		types: {
			'application/rss+xml': '/feed.xml',
		},
	},
	metadataBase: new URL(baseUrl),
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={geist.variable}>
			<head>
				<link rel="icon" href="/assets/site-icon.jpg" type="image/x-icon" />
				<script async src="https://analytics.eu.umami.is/script.js" data-website-id="f46815ab-ab14-48f0-92bc-c2f871678b7c"></script>
			</head>
			<body className="bg-black text-ink font-geist">
				<div>
					<Navbar />

					<main className='max-w-[1280px] m-auto px-4'>
						{children}
					</main>

					<Footer />
				</div>

				<JsonLd id="person-jsonld" data={personSchema} />
				<JsonLd id="website-jsonld" data={websiteSchema} />

				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	);
}
