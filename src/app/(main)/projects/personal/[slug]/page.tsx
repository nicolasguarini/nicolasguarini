import ProjectPage from "@/src/components/layout/projectPage";
import { getProject, getProjects } from "@/src/lib/content";
import { Metadata } from "next";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const project = getProject(slug);

    if (!project) return {
        title: "404 Not Found"
    };

    return {
        title: project.name,
        description: project.excerpt,

        openGraph: {
            title: project.name,
            description: project.excerpt ?? "",
            ...(project.featuredImage ? { images: [project.featuredImage] } : {})
        }
    }
}

export async function generateStaticParams() {
    return getProjects("personal").map(({ slug }) => ({ slug }));
}

export default ProjectPage;