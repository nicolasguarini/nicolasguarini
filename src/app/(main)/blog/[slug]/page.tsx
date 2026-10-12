import AuthorCard from "@/src/components/authorCard";
import CopyLink from "@/src/components/icons/copyLink";
import TelegramShare from "@/src/components/icons/telegramShare";
import TwitterShare from "@/src/components/icons/twitterShare";
import { getPost, getPosts } from "@/src/lib/content";
import { calculateReadingTime, formatDate } from "@/src/lib/utils";
import Markdown from "@/src/components/markdown";
import WhatsappShare from "@/src/components/icons/whatsappShare";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/src/components/breadcrumbs";
import JsonLd from "@/src/components/jsonLd";
import { baseUrl } from "@/src/lib/env";
import { blogPostingSchema } from "@/src/lib/seo";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const post = getPost(slug);

    if (!post) return {};

    const ogImage = post.featuredImage
        ? post.featuredImage
        : undefined;

    return {
        title: post.title,
        description: post.excerpt,
        alternates: { canonical: `/blog/${slug}` },

        openGraph: {
            type: "article",
            title: post.title,
            description: post.excerpt,
            url: `/blog/${slug}`,
            publishedTime: post.publishedAt,
            ...(ogImage ? { images: [{ url: ogImage, width: 1200, height: 630 }] } : {}),
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.excerpt,
            ...(ogImage ? { images: [ogImage] } : {}),
        },
    }
}

export async function generateStaticParams() {
    return getPosts().map(({ slug }) => ({ slug }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    const post = getPost(slug);

    if (!post) {
        notFound();
    }

    const postSchema = blogPostingSchema({
        title: post.title,
        description: post.excerpt,
        slug,
        publishedAt: post.publishedAt,
        imageUrl: post.featuredImage ? `${baseUrl}${post.featuredImage}` : undefined,
        categories: post.categories,
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
                <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: post.title }]} />

                <h1 className="font-bold text-4xl mb-3">{post.title}</h1>

                <div className="flex flex-wrap gap-y-5 w-full justify-between">
                    <AuthorCard 
                        publishedAt={formatDate(post.publishedAt)} 
                        minutesRead={calculateReadingTime(post.contentLength)} 
                    />

                    <div className="flex flex-row gap-3 h-fit self-end">
                        <CopyLink />
                        <WhatsappShare />
                        <TwitterShare />
                        <TelegramShare />
                    </div>
                </div>
                
               
            </div>

            <div className="prose prose-invert max-w-5xl mx-auto text-inherit bg-section">
                <Markdown>{post.content}</Markdown>
            </div>
        </div>
    )
}