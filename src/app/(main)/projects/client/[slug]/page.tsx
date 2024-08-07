import { ProjectBySlugQueryResult } from "@/sanity.types";
import ProjectPage from "@/src/components/layout/projectPage";
import { client } from "@/src/sanity/lib/client";
import { projectBySlugQuery } from "@/src/sanity/lib/queries";
import { urlFor } from "@/src/sanity/lib/utils";
import { Metadata } from "next";

export async function generateMetadata({
    params,
}: {
    params: { slug: string };
}): Promise<Metadata> {
    const project = await client.fetch<ProjectBySlugQueryResult>(projectBySlugQuery, {
        slug: params.slug,
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

export default ProjectPage;