import AuthorCard from "@/src/components/authorCard";
import CopyLink from "@/src/components/icons/copyLink";
import TelegramShare from "@/src/components/icons/telegramShare";
import TwitterShare from "@/src/components/icons/twitterShare";
import { AllPostsSlugsQueryResult, PostBySlugQueryResult } from "@/sanity.types";
import { sanityFetch } from "@/src/sanity/lib/client";
import { allPostsSlugsQuery, postBySlugQuery } from "@/src/sanity/lib/queries";
import { calculateReadingTime, formatDate } from "@/src/lib/utils";
import { PortableText } from "@portabletext/react";
import WhatsappShare from "@/src/components/icons/whatsappShare";
import { Metadata } from "next";
import { SanityImageComponent } from "@/src/sanity/components/image";
import { CodeBlock } from "@/src/sanity/components/codeBlock";
import 'katex/dist/katex.min.css';
import { LatexBlock } from "@/src/sanity/components/latexBlock";
import Breadcrumbs from "@/src/components/breadcrumbs";
import JsonLd from "@/src/components/jsonLd";
import { blogPostingSchema } from "@/src/lib/seo";
import { urlFor } from "@/src/sanity/lib/utils";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const post = await sanityFetch<PostBySlugQueryResult>({
        query: postBySlugQuery,
        revalidate: 60,
        params: { slug },
    });

    if (!post) return {};

    const ogImage = post.featuredImage
        ? urlFor(post.featuredImage).width(1200).height(630).fit("crop").url()
        : undefined;

    return {
        title: post.title,
        description: post.excerpt,
        alternates: { canonical: `/blog/${slug}` },

        openGraph: {
            type: "article",
            title: post.title ?? "",
            description: post.excerpt ?? "",
            url: `/blog/${slug}`,
            publishedTime: post.publishedAt ?? undefined,
            ...(ogImage ? { images: [{ url: ogImage, width: 1200, height: 630 }] } : {}),
        },
        twitter: {
            card: "summary_large_image",
            title: post.title ?? "",
            description: post.excerpt ?? "",
            ...(ogImage ? { images: [ogImage] } : {}),
        },
    }
}

export async function generateStaticParams() {
    const slugs = await sanityFetch<AllPostsSlugsQueryResult>({
        query: allPostsSlugsQuery,
        revalidate: 60,
    });

    return slugs.map((slug) => ({ slug }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    const post = await sanityFetch<PostBySlugQueryResult>({
        query: postBySlugQuery,
        revalidate: 60,
        params: { slug },
    });

    if (!post) {
        return <div>404 Not Found</div>
    }

    const postSchema = blogPostingSchema({
        title: post.title ?? "",
        description: post.excerpt ?? undefined,
        slug,
        publishedAt: post.publishedAt ?? undefined,
        imageUrl: post.featuredImage
            ? urlFor(post.featuredImage).width(1200).height(630).fit("crop").url()
            : undefined,
        categories: post.categories ?? undefined,
    });

    return (
        <div className="max-w-5xl mx-auto mb-32" >
            <JsonLd id="blogposting-jsonld" data={postSchema} />
            <div
                className="flex flex-col gap-5 py-12 lg:py-24 items-start"
                style={{
                    backgroundImage: "url('/assets/shapes-bg-2.webp')",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "left",
                }}
            >
                <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: post.title ?? "Post" }]} />

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
                                latex: ({ value }: any) => {
                                    return <LatexBlock value={value} />
                                }
                            }
                        }}
                    />
                )}
            </div>
        </div>
    )
}