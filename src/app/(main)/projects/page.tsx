import { LatestClientProjectsQueryResult, LatestPersonalProjectsQueryResult } from "@/sanity.types";
import ClientProjectsSection from "@/src/components/clientProjectsSection";
import PersonalProjectsSection from "@/src/components/personalProjectsSection";
import { sanityFetch } from "@/src/sanity/lib/client";
import { latestClientProjectsQuery, latestPersonalProjectsQuery } from "@/src/sanity/lib/queries";
import { Metadata } from "next";
import Breadcrumbs from "@/src/components/breadcrumbs";

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
            <div
                className="flex flex-col gap-5 py-12 lg:py-24 items-center bg-section"
            >
                <h1 className="font-bold text-4xl text-center">Projects</h1>
                <Breadcrumbs items={[{ label: "Projects" }]} />

                <div className="max-w-2xl text-left mx-auto my-12  text-lg font-medium">
                    <p>
                    Explore my latest work, featuring both personal projects and client collaborations. You can dive deeper into each category and discover more.
                    </p>
                </div>
            </div>

            <PersonalProjectsSection personalProjects={personalProjects} />

			<ClientProjectsSection clientProjects={clientProjects} />
        </div>
    )
}