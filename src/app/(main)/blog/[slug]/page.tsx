import AuthorCard from "@/src/components/authorCard";
import CopyLink from "@/src/components/icons/copyLink";
import TelegramShare from "@/src/components/icons/telegramShare";
import TwitterShare from "@/src/components/icons/twitterShare";
import { PostBySlugQueryResult } from "@/sanity.types";
import { client, sanityFetch } from "@/src/sanity/lib/client";
import { postBySlugQuery } from "@/src/sanity/lib/queries";
import { calculateReadingTime, formatDate } from "@/src/lib/utils";
import { PortableText } from "@portabletext/react";
import WhatsappShare from "@/src/components/icons/whatsappShare";
import { Metadata } from "next";
import { SanityImageComponent } from "@/src/sanity/components/image";
import { CodeBlock } from "@/src/sanity/components/codeBlock";

export async function generateMetadata({
    params,
}: {
    params: { slug: string };
}): Promise<Metadata> {
    const post = await sanityFetch<PostBySlugQueryResult>({
        query: postBySlugQuery,
        revalidate: 60,
        params: { slug: params.slug },
    });

    if (!post) return {};

    return {
        title: post.title,
        description: post.excerpt,

        openGraph: {
            title: post.title ?? "",
            description: post.excerpt ?? "",
        }
    }
}

export default async function BlogPost({params}: { params: { slug: string } }) {
    const post = await sanityFetch<PostBySlugQueryResult>({
        query: postBySlugQuery,
        revalidate: 60,
        params: { slug: params.slug },
    });;

    if (!post) {
        return <div>404 Not Found</div>
    }

    return (
        <div className="max-w-5xl mx-auto mb-32" >
            <div
                className="flex flex-col gap-5 py-12 lg:py-24 items-start"
                style={{
                backgroundImage: "url('/assets/shapes-bg-2.png')",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "left",
                }}
            >
                <p className="text-[#A1A1A1]">Blog {`>`} {post.categories ? post.categories[0] : post.title}</p>

                <h1 className="font-bold text-4xl mb-3">{post.title}</h1>

                <div className="flex flex-wrap gap-y-5 w-full justify-between">
                    <AuthorCard 
                        publishedAt={formatDate(post.publishedAt ?? "")} 
                        minutesRead={calculateReadingTime(post.contentLength)} 
                    />

                    <div className="flex flex-row gap-3 h-fit self-end">
                        <CopyLink url={""} />
                        <WhatsappShare />
                        <TwitterShare />
                        <TelegramShare />
                    </div>
                </div>
                
               
            </div>

            <div className="prose prose-invert max-w-5xl mx-auto text-inherit sanity-block-content bg-section">
                { post.content && (
                    <PortableText 
                        value={post.content}  
                        components={{
                            types: {
                                image: SanityImageComponent,
                                code: ({ value }: any) => {
                                    return <CodeBlock value={value} />
                                },
                            }
                        }}
                    />
                )}
            </div>
        </div>
    )
}