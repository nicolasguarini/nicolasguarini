import { PortableTextTypeComponent } from "next-sanity"
import { urlFor } from "../lib/utils"

export const SanityImageComponent = ({value}: {value: PortableTextTypeComponent}) => {
    return (
      <img
        src={urlFor(value).url()}
        loading="lazy"
        className="max-w-full w-auto object-cover"
      />
    )
  }