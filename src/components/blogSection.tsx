import Button from "./button";
import PostCard from "./postCard";
import SectionHeading from "./sectionHeading";
import { LatestPostsQueryResult } from "@/sanity.types";

export default async function BlogSection({ posts }: { posts: LatestPostsQueryResult }) {
    return (
        <div className="flex flex-col md:flex-row gap-4 gap-y-20 py-20 lg:py-28">
            <div className="flex flex-col gap-5">
                <SectionHeading label="Blog" title="My Latest Posts" />

                <p className="text-muted">Thoughts, experiences, and insights on software engineering, tech adventures, and the tools I use.</p>
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