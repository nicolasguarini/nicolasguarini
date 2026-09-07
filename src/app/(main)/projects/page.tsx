import { LatestClientProjectsQueryResult, LatestPersonalProjectsQueryResult } from "@/sanity.types";
import ClientProjectsSection from "@/src/components/clientProjectsSection";
import PersonalProjectsSection from "@/src/components/personalProjectsSection";
import { sanityFetch } from "@/src/sanity/lib/client";
import { latestClientProjectsQuery, latestPersonalProjectsQuery } from "@/src/sanity/lib/queries";
import { Metadata } from "next";
import PageHeader from "@/src/components/layout/pageHeader";

export const metadata: Metadata = {
	alternates: { canonical: "/projects" },
	title: "Projects",
	description: "Explore my latest work, featuring both personal projects and client collaborations. You can dive deeper into each category and discover more.",

	openGraph: {
		title: "Projects",
		description: "Explore my latest work, featuring both personal projects and client collaborations. You can dive deeper into each category and discover more.",
	},
}

export default async function Projects() {
    const [personalProjects, clientProjects] = await Promise.all([
        sanityFetch<LatestPersonalProjectsQueryResult>({
            query: latestPersonalProjectsQuery,
            revalidate: 3600,
            params: { numOfProjects: 3 },
        }),
        sanityFetch<LatestClientProjectsQueryResult>({
            query: latestClientProjectsQuery,
            revalidate: 3600,
            params: { numOfProjects: 3 },
        }),
    ]);
    
    return (
        <div>
            <PageHeader
            	title="Projects"
            	breadcrumbs={[{ label: "Projects" }]}
            	intro="Explore my latest work, featuring both personal projects and client collaborations. You can dive deeper into each category and discover more."
            />

            <PersonalProjectsSection personalProjects={personalProjects} />

			<ClientProjectsSection clientProjects={clientProjects} />
        </div>
    )
}