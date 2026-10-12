import AboutCompact from "@/src/components/aboutCompact";
import BlogSection from "@/src/components/blogSection"
import Hero from "@/src/components/hero";
import ServicesCompact from "@/src/components/servicesCompact";
import { getPosts, getProjects } from "@/src/lib/content";
import ClientProjectsSection from "@/src/components/clientProjectsSection";
import PersonalProjectsSection from "@/src/components/personalProjectsSection";

export default async function Home() {
	const [clientProjects, personalProjects, posts] = [
		getProjects("client", 3),
		getProjects("personal", 3),
		getPosts(3),
	];

	return (
		<div>
			<Hero />
			
			<AboutCompact />

			<ServicesCompact />

			<PersonalProjectsSection personalProjects={personalProjects} />

			<ClientProjectsSection clientProjects={clientProjects} />

			<BlogSection posts={posts} />
		</div>
	);
}
