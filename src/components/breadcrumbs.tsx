import Link from 'next/link';
import { baseUrl } from '@/src/lib/env';
import JsonLd from './jsonLd';

export type Crumb = { label: string; href?: string };

/**
 * Breadcrumb reale (link navigabili + BreadcrumbList JSON-LD) al posto
 * del vecchio "Home > X" scritto come testo semplice.
 * "Home" viene sempre premesso, non passarlo in `items`.
 */
export default function Breadcrumbs({
	items,
	className = '',
}: {
	items: Crumb[];
	className?: string;
}) {
	const trail: Crumb[] = [{ label: 'Home', href: '/' }, ...items];

	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: trail.map((crumb, index) => ({
			'@type': 'ListItem',
			position: index + 1,
			name: crumb.label,
			...(crumb.href ? { item: `${baseUrl}${crumb.href}` } : {}),
		})),
	};

	return (
		<nav aria-label="Breadcrumb" className={`text-[#A1A1A1] ${className}`}>
			<ol className="flex flex-wrap items-center gap-x-2">
				{trail.map((crumb, index) => {
					const isLast = index === trail.length - 1;

					return (
						<li key={`${crumb.label}-${index}`} className="flex items-center gap-x-2">
							{crumb.href && !isLast ? (
								<Link
									href={crumb.href}
									className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-sm"
								>
									{crumb.label}
								</Link>
							) : (
								<span aria-current={isLast ? 'page' : undefined}>{crumb.label}</span>
							)}
							{!isLast && <span aria-hidden="true">{'>'}</span>}
						</li>
					);
				})}
			</ol>
			<JsonLd id="breadcrumbs-jsonld" data={jsonLd} />
		</nav>
	);
}
