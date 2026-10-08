"use client";

import Button from '@/src/components/button';

export default function Error({ reset }: { error: Error; reset: () => void }) {
	return (
		<div className="flex flex-col items-center justify-center gap-6 py-32 lg:py-48 bg-hero text-center">
			<p className="text-sm font-medium uppercase tracking-widest text-muted">
				Something went wrong
			</p>

			<h1 className="font-bold text-4xl max-w-2xl">
				This page failed to load
			</h1>

			<p className="max-w-xl text-lg text-muted">
				An unexpected error occurred. Trying again usually helps.
			</p>

			<div className="flex flex-wrap items-center justify-center gap-6 mt-2">
				<button
					type="button"
					onClick={reset}
					className="relative block py-2 px-6 rounded-lg border overflow-hidden bg-ink text-black transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
				>
					Try again
				</button>
				<Button href="/" variant="outline">Back home</Button>
			</div>
		</div>
	);
}
