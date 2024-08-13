import Link from "next/link";

export default function Button({ href, variant, children }: { href: string, variant: string, children: React.ReactNode }) {
    return (
        <Link href={href} className={`relative block py-2 px-6 rounded-lg border transition-all overflow-hidden 
            ${variant !== "outline" ? 
                'bg-[#EDEDED] text-black' : 
                'bg-transparent border-[#333232] hover:border-white'
            } 
            before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 
            ${variant !== "outline" ? 
                'before:bg-black' : 
                'before:bg-[#333232]'
            } 
            before:transition-all before:duration-500 hover:text-white hover:before:w-full`}>
            <span className="relative z-10">{children}</span>
        </Link>
    )
}