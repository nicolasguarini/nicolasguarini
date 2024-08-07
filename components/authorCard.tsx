import Image from "next/image";

export default function AuthorCard({ publishedAt, minutesRead }: { publishedAt: string, minutesRead: number }) {
    return (
        <div className="flex flex-row gap-3 justify-start mt-3">
            <Image src={"/assets/propic.jpg"} className="block rounded-full" alt="Propic" width={45} height={45} />

            <div className="flex flex-col text-sm">
                <p className=" font-medium">Nicolas Guarini</p>
                <div className="flex flex-row gap-2 text-[#A1A1A1]">
                    <p>{publishedAt}</p>
                    <p>·</p>
                    <p>{minutesRead} min. read</p>
                </div>
            </div>
        </div>
    )
}