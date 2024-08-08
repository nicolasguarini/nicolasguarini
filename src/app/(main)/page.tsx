import AboutCompact from "@/src/components/aboutCompact";
import BlogSection from "@/src/components/blogSection"
import Hero from "@/src/components/hero";
import ServicesCompact from "@/src/components/servicesCompact";
import { LatestClientProjectsQueryResult, LatestPersonalProjectsQueryResult, LatestPostsQueryResult } from "@/sanity.types";
import { client, sanityFetch } from "@/src/sanity/lib/client";
import { latestClientProjectsQuery, latestPersonalProjectsQuery, latestPostsQuery } from "@/src/sanity/lib/queries";
import ClientProjectsSection from "@/src/components/clientProjectsSection";
import PersonalProjectsSection from "@/src/components/personalProjectsSection";

export default async function Home() {
	const clientProjects = await sanityFetch<LatestClientProjectsQueryResult>({
		query: latestClientProjectsQuery,
		revalidate: 3600,
		params: { numOfProjects: 3 },
	});

	const personalProjects = await sanityFetch<LatestPersonalProjectsQueryResult>({
		query: latestPersonalProjectsQuery,
		revalidate: 3600,
		params: { numOfProjects: 3 },
	});
	
	const posts = await sanityFetch<LatestPostsQueryResult>({
		query: latestPostsQuery,
		revalidate: 60,
		params: { numOfPosts: 3 },
	});

	return (
		<div>
			<Hero />
			
			<AboutCompact />

			<ServicesCompact />

			<ClientProjectsSection clientProjects={clientProjects} />

			<PersonalProjectsSection personalProjects={personalProjects} />

			<BlogSection posts={posts} />
		</div>
	);
}
