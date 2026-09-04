import Image from "next/image";

export default function AuthorCard({ publishedAt, minutesRead }: { publishedAt: string, minutesRead: number }) {
    return (
        <div className="flex flex-row gap-3 justify-start mt-3">
            <Image
                src="/assets/propic.jpg"
                className="block rounded-full h-[45px] w-[45px] object-cover"
                alt="Nicolas Guarini"
                width={45}
                height={45}
            />

            <div className="flex flex-col text-sm">
                <p className=" font-medium">Nicolas Guarini</p>
                <div className="flex flex-row gap-2 text-muted">
                    <p>{publishedAt}</p>
                    <p>·</p>
                    <p>{minutesRead} min. read</p>
                </div>
            </div>
        </div>
    )
}