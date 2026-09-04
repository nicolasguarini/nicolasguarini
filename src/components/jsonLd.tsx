/**
 * Inietta un blocco JSON-LD. `id` evita collisioni quando la stessa
 * pagina emette piu' di uno schema.
 */
export default function JsonLd({ id, data }: { id: string; data: object }) {
	return (
		<script
			id={id}
			type="application/ld+json"
			dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
		/>
	);
}
