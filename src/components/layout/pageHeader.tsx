import Breadcrumbs, { type Crumb } from '../breadcrumbs';

/**
 * Intestazione delle pagine interne: h1 + breadcrumb + intro.
 * Il blocco era duplicato in 6 pagine, con padding e markup che divergevano.
 */
export default function PageHeader({
	title,
	breadcrumbs,
	intro,
	children,
}: {
	title: string;
	breadcrumbs: Crumb[];
	intro?: string;
	children?: React.ReactNode;
}) {
	return (
		<div className="flex flex-col gap-5 py-12 lg:py-24 items-center bg-section">
			<h1 className="font-bold text-4xl text-center">{title}</h1>
			<Breadcrumbs items={breadcrumbs} />

			{intro && (
				<p className="max-w-2xl mx-auto mt-8 text-lg text-muted text-center">
					{intro}
				</p>
			)}

			{children && (
				<div className="max-w-2xl mx-auto mt-8 flex flex-col gap-6 text-lg text-muted">
					{children}
				</div>
			)}
		</div>
	);
}
