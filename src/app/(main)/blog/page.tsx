import PostCard from "@/src/components/postCard";
import { LatestPostsQueryResult } from "@/sanity.types";
import { sanityFetch } from "@/src/sanity/lib/client";
import { latestPostsQuery } from "@/src/sanity/lib/queries";
import { Metadata } from "next";
import PageHeader from "@/src/components/layout/pageHeader";

export const metadata: Metadata = {
	alternates: { canonical: "/blog" },
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
            <PageHeader
            	title="Blog"
            	breadcrumbs={[{ label: "Blog" }]}
            	intro="Thoughts, experiences, and insights on software engineering, tech adventures, and the tools I use. Join me on my journey through the ever-evolving tech world."
            /> 

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