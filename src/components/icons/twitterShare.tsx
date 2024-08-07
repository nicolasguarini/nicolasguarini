"use client";
import { baseUrl } from "@/src/lib/env";
import { usePathname } from "next/navigation";
import { TwitterIcon, TwitterShareButton } from "react-share";

export default function TwitterShare() {
    const pathName = usePathname();

    return (
        <TwitterShareButton url={baseUrl + pathName}>
            <TwitterIcon size={32} round={true} />
        </TwitterShareButton>
    )
}