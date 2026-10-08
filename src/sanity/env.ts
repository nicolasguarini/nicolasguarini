function required(name: string, value: string | undefined): string {
	if (!value) {
		throw new Error(
			`Missing environment variable ${name}. Copy .env.example to .env.local and fill it in.`
		);
	}
	return value;
}

export const dataset = required(
	'NEXT_PUBLIC_SANITY_DATASET',
	process.env.NEXT_PUBLIC_SANITY_DATASET
);

export const projectId = required(
	'NEXT_PUBLIC_SANITY_PROJECT_ID',
	process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
);

export const apiVersion =
	process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-07-11';
