import type { PortableTextTypeComponentProps } from "next-sanity"
import Image from "next/image"
import { urlFor } from "../lib/utils"

type SanityImageValue = {
    alt?: string
    asset?: { _ref: string; _type: "reference" }
}

export const SanityImageComponent = ({
    value,
}: PortableTextTypeComponentProps<SanityImageValue>) => {
    if (!value?.asset) return null

    const url = urlFor(value).width(1600).fit("max").auto("format").url()

    return (
        <Image
            src={url}
            alt={value.alt ?? ""}
            width={1600}
            height={900}
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="max-w-full h-auto w-auto object-cover"
        />
    )
}
