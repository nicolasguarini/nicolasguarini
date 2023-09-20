import { Analytics } from '@vercel/analytics/react';
import '../styles/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: {
		template: '%s | Nicolas Guarini',
		default: 'Nicolas Guarini | Portfolio',
	},
	description:
		"Computer Science graduate, now studying for a Master's Degree at University of Milano-Bicocca, private teacher of programming and data analysis for university students, and freelance developer of web solutions for small and medium-sized companies and freelancers. I make webapps, mobile apps, UI/UX design, data analysis and more.",
	generator: 'Next.js',
	applicationName: 'Nicolas Guarini | Portfolio',
	referrer: 'origin-when-cross-origin',
	keywords: [
		'nicolas guarini',
		'freelance',
		'freelancer',
		'developer',
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
	colorScheme: 'dark',
	creator: 'Nicolas Guarini',
	openGraph: {
		title: {
			template: '%s | Nicolas Guarini',
			default: 'Nicolas Guarini | Portfolio',
		},
		description:
			"Computer Science graduate, now studying for a Master's Degree at University of Milano-Bicocca, private teacher of programming and data analysis for university students, and freelance developer of web solutions for small and medium-sized companies and freelancers. I make webapps, mobile apps, UI/UX design, data analysis and more.",
		url: 'https://nicolasguarini.it',
		locale: 'en-US',
		type: 'website',
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
				<link rel="icon" href="/assets/icon.png" type="image/x-icon" />
			</head>
			<body className="bg-black text-white font-robotomono">
				{children}
				<Analytics />
			</body>
		</html>
	);
}
