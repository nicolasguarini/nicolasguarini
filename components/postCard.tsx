import Link from "next/link";
import CategoryTag from "./categoryTag";
import Image from "next/image";
import { calculateReadingTime, formatDate } from "@/sanity/lib/utils";

export default function PostCard({ post }: { post: any }) {
	return (
        <Link href={`/blog/${post.slug}`}>
            <div className="flex flex-col gap-3 rounded-lg shadow-md">
                    <div className="flex flex-row gap-3">
                        {post.categories?.map((category: string) => (
                            <CategoryTag key={category} category={category} />
                        ))}
                    </div>
                    <div className="flex flex-col gap-3">
                        <h3 className="font-bold text-2xl">{post.title}</h3>
                        <p>
                            {post.excerpt}
                        </p>
                    </div>
                    <div className="flex flex-row gap-3 justify-start mt-3">
                        <Image src={"/assets/propic.jpg"} className="block rounded-full" alt="Propic" width={45} height={45} />

                        <div className="flex flex-col text-sm">
                            <p className=" font-medium">Nicolas Guarini</p>
                            <div className="flex flex-row gap-2 text-[#A1A1A1]">
                                <p>{formatDate(post.publishedAt)}</p>
                                <p>·</p>
                                <p>{calculateReadingTime(post.contentLength)} min. read</p>
                            </div>
                        </div>
                    </div>
            </div>
        </Link> 
	);
}