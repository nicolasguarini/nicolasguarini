import PostCard from "@/src/components/postCard";
import { LatestPostsQueryResult } from "@/sanity.types";
import { client } from "@/src/sanity/lib/client";
import { latestPostsQuery } from "@/src/sanity/lib/queries";

export default async function Page() {
    const posts = await client.fetch<LatestPostsQueryResult>(latestPostsQuery, { numOfPosts: 100 });
    return (
        <div>
            <div
                className="flex flex-col gap-5 py-12 lg:py-24 items-center"
                style={{
                backgroundImage: "url('/assets/shapes-bg-2.png')",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                }}
            >
                <h1 className="font-bold text-4xl text-center">Blog</h1>
                <p className="text-[#A1A1A1]">Home {`>`} Blog</p>

                <div className="max-w-2xl text-left mx-auto my-12  text-lg font-medium">
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur ad deserunt perferendis mollitia velit placeat, nihil tempore! Reiciendis, placeat eos? Atque doloremque deserunt molestias totam? Quisquam sit saepe iure alias?
                    </p>
                </div>
            </div> 

            <div className="flex flex-wrap gap-14 gap-y-24 items-center justify-center mb-32">
                {posts.map((post) => (
                    <div key={post.slug} className="max-w-lg">
                        <PostCard post={post}></PostCard>
                    </div>
                ))}
            </div>
        </div>
            
    )
}