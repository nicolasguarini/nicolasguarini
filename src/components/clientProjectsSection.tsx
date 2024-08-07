import { LatestClientProjectsQueryResult } from "@/sanity.types";
import ProjectCard from "./projectCard";
import Button from "./button";

export default async function ClientProjectsSection({ clientProjects }: { clientProjects: LatestClientProjectsQueryResult }) {
    return (
        <div className="flex flex-col gap-3 pb-32 items-center bg-section">
				<p className="font-medium">Portfolio</p>
				<h2 className="font-bold text-3xl mb-10 text-center">Projects I made for cilents</h2>

				<div className="flex flex-wrap gap-10 gap-y-16 items-start justify-center mb-10">

					{clientProjects.map((project) => (
						<div key={project.slug}>
							<ProjectCard project={project} />
						</div>
					))}
				</div>

				<Button href="/projects/client" variant="outline">View all client projects {'→'}</Button>
			</div>
    )
}