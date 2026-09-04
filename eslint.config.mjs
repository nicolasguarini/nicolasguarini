import coreWebVitals from 'eslint-config-next/core-web-vitals';
import typescript from 'eslint-config-next/typescript';

export default [
	...coreWebVitals,
	...typescript,
	{
		ignores: [
			'.next/**',
			'node_modules/**',
			'sanity.types.ts',
			'schema.json',
		],
	},
];
