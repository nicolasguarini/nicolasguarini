import { AllPersonalProjectsSlugsQueryResult, ProjectBySlugQueryResult } from "@/sanity.types";
import ProjectPage from "@/src/components/layout/projectPage";
import { client, sanityFetch } from "@/src/sanity/lib/client";
import { allPersonalProjectsSlugsQuery, projectBySlugQuery } from "@/src/sanity/lib/queries";
import { urlFor } from "@/src/sanity/lib/utils";
import { Metadata } from "next";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const project = await sanityFetch<ProjectBySlugQueryResult>({
        query: projectBySlugQuery,
        revalidate: 3600,
        params: { slug },
    });

    if (!project) return {
        title: "404 Not Found"
    };

    return {
        title: project.name,
        description: project.excerpt,

        openGraph: {
            title: project.name!,
            description: project.excerpt!,
            images: [
                urlFor(project.featuredImage!).url(),
            ]
        }
    }
}

export async function generateStaticParams() {
    const slugs = await sanityFetch<AllPersonalProjectsSlugsQueryResult>({
        query: allPersonalProjectsSlugsQuery,
        revalidate: 60,
    });

    return slugs.map((slug) => ({ slug }));
}

export default ProjectPage;