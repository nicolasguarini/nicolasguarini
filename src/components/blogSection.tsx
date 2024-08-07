import { client } from "@/src/sanity/lib/client";
import Button from "./button";
import PostCard from "./postCard";
import { LatestPostsQueryResult } from "@/sanity.types";
import { latestPostsQuery } from "@/src/sanity/lib/queries";

export default async function BlogSection({ posts }: { posts: LatestPostsQueryResult }) {
    return (
        <div className="flex flex-col md:flex-row gap-4 gap-y-20 my-20">
            <div className="flex flex-col gap-5 ">
                <div className="flex flex-col gap-3">
                    <p className="font-medium">Blog</p>
                    <h2 className="font-bold text-3xl">My Latest Posts</h2>
                </div>
                
                <p>Thoughts, experiences, and insights on software engineering, tech adventures, and the tools I use.</p>
                
            </div>
            <div className="flex flex-col gap-14 bg-section">
                {posts.map((post) => (
                    <div key={post.slug}>
                        <PostCard post={post} />
                    </div>
                ))}
                <div className="w-fit">
                    <Button href="/blog" variant="outline">View all posts {'→'}</Button>
                </div>
                
            </div>
        </div>
    ) 
}