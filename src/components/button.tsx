import Link from "next/link";

type ButtonVariant = "primary" | "outline";

export default function Button({
    href,
    variant = "primary",
    children,
}: {
    href: string;
    variant?: ButtonVariant;
    children: React.ReactNode;
}) {
    const isOutline = variant === "outline";

    return (
        <Link
            href={href}
            className={`relative block py-2 px-6 rounded-lg border overflow-hidden transition-colors
            focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black
            ${isOutline ? 'bg-transparent border-line hover:border-white' : 'bg-ink text-black'}
            before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0
            ${isOutline ? 'before:bg-line' : 'before:bg-black'}
            before:transition-all before:duration-500 hover:text-white hover:before:w-full`}
        >
            <span className="relative z-10">{children}</span>
        </Link>
    )
}
