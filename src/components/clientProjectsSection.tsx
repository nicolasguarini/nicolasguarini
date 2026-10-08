import { LatestClientProjectsQueryResult } from "@/sanity.types";
import ProjectCard from "./projectCard";
import Button from "./button";
import SectionHeading from "./sectionHeading";

export default async function ClientProjectsSection({ clientProjects }: { clientProjects: LatestClientProjectsQueryResult }) {
	return (
		<div className="flex flex-col gap-3 pb-20 lg:pb-28 items-center bg-section">
			<SectionHeading label="Freelance" title="Projects I made for clients" align="center" className="mb-10" />

			<div className="flex flex-wrap gap-10 gap-y-16 items-start justify-center mb-10">
				{clientProjects.map((project) => (
					<ProjectCard key={project.slug} project={project} />
				))}
			</div>

			<Button href="/projects/client" variant="outline">View all client projects {'→'}</Button>
		</div>
	)
}
