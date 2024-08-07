import { client } from "@/src/sanity/lib/client";
import Button from "./button";
import PostCard from "./postCard";
import { LatestPostsQueryResult } from "@/sanity.types";
import { latestPostsQuery } from "@/src/sanity/lib/queries";

export default async function BlogSection() {
    const posts = await client.fetch<LatestPostsQueryResult>(latestPostsQuery, { numOfPosts: 3 });
    
    return (
        <div className="flex flex-col md:flex-row gap-4 gap-y-20 my-20">
            <div className="flex flex-col gap-5 ">
                <div className="flex flex-col gap-3">
                    <p className="font-medium">Blog</p>
                    <h2 className="font-bold text-3xl">My Latest Posts</h2>
                </div>
                
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                
            </div>
            <div className="flex flex-col gap-14" style={{
                    backgroundImage: "url('/assets/shapes-bg-2.png')",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                }}>
                {posts.map((post) => (
                    <div key={post.slug}>
                        <PostCard post={post} />
                    </div>
                ))}
                <div className="w-fit">
                    <Button href="/blog" variant="primary">View all</Button>
                </div>
                
            </div>
        </div>
    ) 
}