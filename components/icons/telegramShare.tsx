"use client";
import { TelegramIcon, TelegramShareButton } from "react-share";
import { usePathname } from "next/navigation";
import { baseUrl } from "@/lib/env";

export default function TelegramShare() {
    const pathName = usePathname();

    return (
        <TelegramShareButton url={baseUrl + pathName}>
            <TelegramIcon size={32} round={true} />
        </TelegramShareButton>
    )
}