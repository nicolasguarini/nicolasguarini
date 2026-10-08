import { LatestPersonalProjectsQueryResult } from "@/sanity.types";
import ProjectCard from "./projectCard";
import Button from "./button";
import SectionHeading from "./sectionHeading";

export default async function PersonalProjectsSection({ personalProjects }: { personalProjects: LatestPersonalProjectsQueryResult }) {
	return (
		<div className="flex flex-col gap-3 py-20 lg:py-28 items-center bg-section">
			<SectionHeading label="Portfolio" title="My personal projects" align="center" className="mb-10" />

			<div className="flex flex-wrap gap-10 gap-y-16 items-start justify-center mb-10">
				{personalProjects.map((project) => (
					<ProjectCard key={project.slug} project={project} />
				))}
			</div>

			<Button href="/projects/personal" variant="outline">View all personal projects {'→'}</Button>
		</div>
	)
}
