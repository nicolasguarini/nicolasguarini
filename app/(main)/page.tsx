import AboutCompact from "@/components/aboutCompact";
import BlogSection from "@/components/blogSection";
import Button from "@/components/button";
import Hero from "@/components/hero";
import PostCard from "@/components/postCard";
import ProjectCard from "@/components/projectCard";
import ServicesCompact from "@/components/servicesCompact";
import { LatestClientProjectsQueryResult, LatestPersonalProjectsQueryResult, LatestPostsQueryResult } from "@/sanity.types";
import { client } from "@/sanity/lib/client";
import { latestClientProjectsQuery, latestPersonalProjectsQuery, latestPostsQuery } from "@/sanity/lib/queries";

export default async function Home() {
	const clientProjects = await client.fetch<LatestClientProjectsQueryResult>(latestClientProjectsQuery, { numOfProjects: 3 });
	const personalProjects = await client.fetch<LatestPersonalProjectsQueryResult>(latestPersonalProjectsQuery, { numOfProjects: 3 });

	return (
		<div>
			<Hero />
			
			<AboutCompact />

			<ServicesCompact />

			<div className="flex flex-col gap-3 pb-32 items-center" style={{
						backgroundImage: "url('/assets/shapes-bg-2.png')",
						backgroundSize: "contain",
						backgroundRepeat: "no-repeat",
						backgroundPosition: "center",
					}}>
				<p className="font-medium">Portfolio</p>
				<h2 className="font-bold text-3xl mb-10 text-center">Projects I made for cilents</h2>

				<div className="flex flex-wrap gap-10 gap-y-16 items-start justify-center mb-10">

					{clientProjects.map((project) => (
						<div key={project.slug}>
							<ProjectCard project={project} />
						</div>
					))}
				</div>

				<Button href="/projects/client" variant="primary">View all</Button>
			</div>

			<div className="flex flex-col gap-3 pb-32 items-center" style={{
						backgroundImage: "url('/assets/shapes-bg-2.png')",
						backgroundSize: "contain",
						backgroundRepeat: "no-repeat",
						backgroundPosition: "center",
					}}>
				<p className="font-medium">Portfolio</p>
				<h2 className="font-bold text-3xl mb-10 text-center">My personal projects</h2>

				<div className="flex flex-wrap gap-10 gap-y-16 items-start justify-center mb-10">
					{personalProjects.map((project) => (
						<div key={project.slug}>
							<ProjectCard project={project}  />
						</div>
					))}
				</div>

				<Button href="/projects/personal" variant="primary">View all</Button>
			</div>

			<BlogSection />
		</div>
	);
}
