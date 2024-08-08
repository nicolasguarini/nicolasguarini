import PostCard from "@/src/components/postCard";
import { LatestPostsQueryResult } from "@/sanity.types";
import { client, sanityFetch } from "@/src/sanity/lib/client";
import { latestPostsQuery } from "@/src/sanity/lib/queries";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Blog",
	description: "Thoughts, experiences, and insights on software engineering, tech adventures, and the tools I use. Join me on my journey through the ever-evolving tech world.",
	openGraph: {
		title: "Blog",
		description: "Thoughts, experiences, and insights on software engineering, tech adventures, and the tools I use. Join me on my journey through the ever-evolving tech world.",
	},
}

export default async function Page() {
    const posts = await sanityFetch<LatestPostsQueryResult>({
        query: latestPostsQuery,
        revalidate: 60,
        params: { numOfPosts: 100 },
    });
    
    return (
        <div>
            <div
                className="flex flex-col gap-5 py-12 lg:py-24 items-center bg-section"
            >
                <h1 className="font-bold text-4xl text-center">Blog</h1>
                <p className="text-[#A1A1A1]">Home {`>`} Blog</p>

                <div className="max-w-2xl text-left mx-auto my-12  text-lg font-medium">
                    <p>
                    Thoughts, experiences, and insights on software engineering, tech adventures, and the tools I use. Join me on my journey through the ever-evolving tech world.
                    </p>
                </div>
            </div> 

            <div className="flex flex-wrap gap-14 gap-y-24 items-center justify-center mb-32 bg-hero">
                {posts.map((post) => (
                    <div key={post.slug} className="max-w-lg">
                        <PostCard post={post}></PostCard>
                    </div>
                ))}
            </div>
        </div>
            
    )
}