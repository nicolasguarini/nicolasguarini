/**
 * Intestazione di sezione: eyebrow + h2.
 * Il pattern era ripetuto in 7 componenti con stili leggermente diversi
 * (l'eyebrow era un <p> bianco dello stesso peso del body).
 */
export default function SectionHeading({
	label,
	title,
	align = "left",
	className = "",
}: {
	label: string;
	title: string;
	align?: "left" | "center";
	className?: string;
}) {
	const isCentered = align === "center";

	return (
		<div
			className={[
				"flex flex-col gap-3",
				isCentered ? "items-center text-center" : "",
				className,
			]
				.filter(Boolean)
				.join(" ")}
		>
			<p className="text-sm font-medium uppercase tracking-widest text-muted">
				{label}
			</p>
			<h2 className="font-bold text-3xl">{title}</h2>
		</div>
	);
}
