import coreWebVitals from 'eslint-config-next/core-web-vitals';
import typescript from 'eslint-config-next/typescript';

const config = [
	...coreWebVitals,
	...typescript,
	{
		ignores: ['.next/**', 'node_modules/**', 'sanity.types.ts', 'schema.json'],
	},
	{
		rules: {
			// Il sito e' pieno di prosa: forzare &apos;/&quot; nel testo JSX
			// rende i contenuti illeggibili in fase di modifica senza dare
			// nulla in cambio (le entita' non sono richieste in JSX).
			'react/no-unescaped-entities': 'off',
		},
	},
	{
		// Gli schemi Sanity sono per convenzione oggetti anonimi esportati come default
		files: ['src/sanity/schemas/**/*.ts', 'eslint.config.mjs'],
		rules: {
			'import/no-anonymous-default-export': 'off',
		},
	},
];

export default config;
