import Link from "next/link";
import CategoryTag from "./categoryTag";
import { calculateReadingTime, formatDate } from "@/src/lib/utils";
import AuthorCard from "./authorCard";
import type { LatestPostsQueryResult } from "@/sanity.types";

type Post = LatestPostsQueryResult[number];

export default function PostCard({ post }: { post: Post }) {
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
                    <AuthorCard 
                        publishedAt={formatDate(post.publishedAt ?? "")} 
                        minutesRead={calculateReadingTime(post.contentLength)} 
                    />
            </div>
        </Link> 
	);
}