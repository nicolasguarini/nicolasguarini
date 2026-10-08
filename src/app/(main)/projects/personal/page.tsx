import ProjectCard from "@/src/components/projectCard";
import { LatestPersonalProjectsQueryResult } from "@/sanity.types";
import { sanityFetch } from "@/src/sanity/lib/client";
import { latestPersonalProjectsQuery } from "@/src/sanity/lib/queries";
import { Metadata } from "next";
import PageHeader from "@/src/components/layout/pageHeader";

export const metadata: Metadata = {
	alternates: { canonical: "/projects/personal" },
    title: "Personal Projects",
    description: "My portfolio of personal projects, showcasing my skills, creativity, and passion for technology. From innovative solutions to experimental ideas, see what I've been building.",

    openGraph: {
        title: "Personal Projects",
        description: "My portfolio of personal projects, showcasing my skills, creativity, and passion for technology. From innovative solutions to experimental ideas, see what I've been building.",
    }
}

export default async function Page() {
    const personalProjects = await sanityFetch<LatestPersonalProjectsQueryResult>({
        query: latestPersonalProjectsQuery,
        revalidate: 3600,
        params: { numOfProjects: 50 },
    });
    
	return (
		<div>
			<PageHeader
				title="Personal Projects"
				breadcrumbs={[{ label: "Projects", href: "/projects" }, { label: "Personal" }]}
			/>

            <div className="flex flex-wrap gap-10 gap-y-16 items-start justify-center pb-32 bg-section-long">
                {personalProjects.map((project) => (
                    <div key={project.slug}>
                        <ProjectCard project={project} />
                    </div>
                ))}
            </div>
		</div>
	);
}