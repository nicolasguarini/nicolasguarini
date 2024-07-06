import Link from "next/link";

export default function Button({ href, variant, children }: { href: string, variant: string, children: React.ReactNode }) {
    return (
        <Link href={href} className={`block py-2 px-6 rounded-lg border ${variant !== "outline" ? 'bg-[#EDEDED] text-black' : 'bg-transparent border-[#333232]'}`}>
            {children}
        </Link>
    )
}