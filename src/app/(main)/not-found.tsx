import Button from '@/src/components/button';

// Next marca da se' le not-found come noindex: non serve ripeterlo
export const metadata = {
	title: 'Page not found',
};

export default function NotFound() {
	return (
		<div className="flex flex-col items-center justify-center gap-6 py-32 lg:py-48 bg-hero text-center">
			<p className="text-sm font-medium uppercase tracking-widest text-muted">
				Error 404
			</p>

			<h1 className="font-bold text-4xl max-w-2xl">
				This page doesn&apos;t exist
			</h1>

			<p className="max-w-xl text-lg text-muted">
				The link might be broken, or the page may have been moved or renamed.
			</p>

			<div className="flex flex-wrap items-center justify-center gap-6 mt-2">
				<Button href="/" variant="primary">Back home</Button>
				<Button href="/projects" variant="outline">Browse projects</Button>
			</div>
		</div>
	);
}
