import ProjectCard from "@/src/components/projectCard";
import { LatestClientProjectsQueryResult } from "@/sanity.types";
import { client, sanityFetch } from "@/src/sanity/lib/client";
import { latestClientProjectsQuery } from "@/src/sanity/lib/queries";
import { Metadata } from "next";
import Breadcrumbs from "@/src/components/breadcrumbs";

export const metadata: Metadata = {
	alternates: { canonical: "/projects/client" },
    title: "Client Projects",
    description: "A look at the projects I've developed for clients, focusing on web solutions for small businesses and professionals. See the work I've done to help meet their unique needs.",

    openGraph: {
        title: "Client Projects",
        description: "A look at the projects I've developed for clients, focusing on web solutions for small businesses and professionals. See the work I've done to help meet their unique needs.",
    }
}

export default async function Page() {
    const clientProjects = await sanityFetch<LatestClientProjectsQueryResult>({
        query: latestClientProjectsQuery,
        revalidate: 3600,
        params: { numOfProjects: 50 },
    });
    
	return (
		<div>
			<div className="flex flex-col gap-5 py-24 items-center bg-section">
                <h1 className="font-bold text-4xl text-center">Client Projects</h1>
                <Breadcrumbs items={[{ label: "Projects", href: "/projects" }, { label: "Clients" }]} />
            </div>


            <div className="flex flex-wrap gap-10 gap-y-16 items-start justify-center pb-32 bg-section-long">
                {clientProjects.map((project) => (
                    <div key={project.slug}>
                        <ProjectCard project={project} />
                    </div>
                ))}
            </div>
		</div>
	);
}