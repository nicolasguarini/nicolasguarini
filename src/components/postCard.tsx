import Link from "next/link";
import CategoryTag from "./categoryTag";
import { calculateReadingTime, formatDate } from "@/src/lib/utils";
import AuthorCard from "./authorCard";
import type { LatestPostsQueryResult } from "@/sanity.types";

type Post = LatestPostsQueryResult[number];

export default function PostCard({ post }: { post: Post }) {
	return (
        <Link
            href={`/blog/${post.slug}`}
            className="group block rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-black"
        >
            <div className="flex flex-col gap-3">
                <div className="flex flex-row flex-wrap gap-2">
                    {post.categories?.map((category: string) => (
                        <CategoryTag key={category} category={category} />
                    ))}
                </div>

                <div className="flex flex-col gap-3">
                    <h3 className="font-bold text-2xl decoration-muted underline-offset-4 group-hover:underline">
                        {post.title}
                    </h3>
                    <p className="text-muted">{post.excerpt}</p>
                </div>

                <AuthorCard
                    publishedAt={formatDate(post.publishedAt ?? "")}
                    minutesRead={calculateReadingTime(post.contentLength)}
                />
            </div>
        </Link>
	);
}
