import coreWebVitals from 'eslint-config-next/core-web-vitals';
import typescript from 'eslint-config-next/typescript';

const config = [
	...coreWebVitals,
	...typescript,
	{
		ignores: ['.next/**', 'node_modules/**'],
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
		files: ['eslint.config.mjs'],
		rules: {
			'import/no-anonymous-default-export': 'off',
		},
	},
];

export default config;
