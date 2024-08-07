import { Analytics } from '@vercel/analytics/react';
import '../../styles/globals.css';
import type { Metadata } from 'next';
import Navbar from '@/src/components/layout/navbar';
import Footer from '@/src/components/layout/footer';
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
	title: {
		template: '%s | Nicolas Guarini',
		default: 'Nicolas Guarini | Personal Website',
	},
	description:
		"Computer Science Master's Degree student, private teacher of programming and data analysis for university students, and freelance developer of web solutions for small and medium-sized companies and freelancers.",
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
		'sito seb',
		'realizzazione siti web',
		'sviluppatore',
		'portfolio',
		'insubria',
		'bicocca',
		'software engineer',
		'netlify',
		'hugo',
		'computer science',
		'university',
		'università',
		'data science',
		'java',
		'kotlin',
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
		description:
			"Computer Science Master's Degree student, private teacher of programming and data analysis for university students, and freelance developer of web solutions for small and medium-sized companies and freelancers.",
		url: 'https://nicolasguarini.it',
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
	metadataBase: new URL('https://nicolasguarini.it'),
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
				<link rel="icon" href="/assets/site-icon.jpg" type="image/x-icon" />
				<script async src="https://analytics.eu.umami.is/script.js" data-website-id="f46815ab-ab14-48f0-92bc-c2f871678b7c"></script>
			</head>
			<body className="bg-black text-[#EDEDED] font-geist">
				<div>
					<Navbar />

					<main className='max-w-[1280px] m-auto px-4'>
						{children}
					</main>

					<Footer />
				</div>

				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	);
}
