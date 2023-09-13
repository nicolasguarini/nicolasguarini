import ClientProjects from '@/components/ClientProjects';
import Hero from '@/components/Hero';
import PersonalProjects from '@/components/PersonalProjects';
import Project from '@/components/Project';
import Whoami from '@/components/Whoami';
import ScrollDownIcon from '@/components/icons/ScrollDownIcon';
import Layout from '@/components/layout/Layout';
import { fetchClientProjects, fetchPersonalProjects } from '@/lib/fetch';
import { ProjectCard } from '@/types/projectCard';

export const revalidate = 3600; // revalidate at most every hour

export default async function Home() {
	const personalProjects: ProjectCard[] = await fetchPersonalProjects();
	const clientProjects: ProjectCard[] = await fetchClientProjects();

	return (
		<Layout>
			<div className="h-screen text-center">
				<Hero />
				<ScrollDownIcon />
			</div>

			<Whoami />

			<PersonalProjects>
				{personalProjects?.map((project: ProjectCard) => {
					return (
						<div key={project.slug}>
							<Project
								name={project.name}
								slug={project.slug}
								excerpt={project.excerpt}
							/>
						</div>
					);
				})}
			</PersonalProjects>

			<ClientProjects>
				{clientProjects?.map((project: ProjectCard) => {
					return (
						<div key={project.slug}>
							<Project
								name={project.name}
								slug={project.slug}
								excerpt={project.excerpt}
							/>
						</div>
					);
				})}
			</ClientProjects>
		</Layout>
	);
}
