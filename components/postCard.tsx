import Link from "next/link";
import CategoryTag from "./categoryTag";

export default function PostCard({ post }: { post: any }) {
	return (
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

            <Link href="/blog" className="font-medium mt-1">
               Read more ➝
            </Link>
        </div>
	);
}