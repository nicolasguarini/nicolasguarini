import ProjectCard from "@/src/components/projectCard";
import { getProjects } from "@/src/lib/content";
import { Metadata } from "next";
import PageHeader from "@/src/components/layout/pageHeader";

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
    const clientProjects = getProjects("client", 50);
    
	return (
		<div>
			<PageHeader
				title="Client Projects"
				breadcrumbs={[{ label: "Projects", href: "/projects" }, { label: "Clients" }]}
			/>


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