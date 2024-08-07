"use client";
import { baseUrl } from "@/src/lib/env";
import { usePathname } from "next/navigation";
import { WhatsappIcon, WhatsappShareButton } from "react-share";

export default function WhatsappShare() {
    const pathName = usePathname();

    return (
       <WhatsappShareButton url={baseUrl + pathName}>
            <WhatsappIcon size={32} round={true} />
        </WhatsappShareButton>
    )
}