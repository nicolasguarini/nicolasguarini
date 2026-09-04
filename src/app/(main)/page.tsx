import AboutCompact from "@/src/components/aboutCompact";
import BlogSection from "@/src/components/blogSection"
import Hero from "@/src/components/hero";
import ServicesCompact from "@/src/components/servicesCompact";
import { LatestClientProjectsQueryResult, LatestPersonalProjectsQueryResult, LatestPostsQueryResult } from "@/sanity.types";
import { sanityFetch } from "@/src/sanity/lib/client";
import { latestClientProjectsQuery, latestPersonalProjectsQuery, latestPostsQuery } from "@/src/sanity/lib/queries";
import ClientProjectsSection from "@/src/components/clientProjectsSection";
import PersonalProjectsSection from "@/src/components/personalProjectsSection";

export default async function Home() {
	// In parallelo: erano tre round-trip in serie verso Sanity
	const [clientProjects, personalProjects, posts] = await Promise.all([
		sanityFetch<LatestClientProjectsQueryResult>({
			query: latestClientProjectsQuery,
			revalidate: 3600,
			params: { numOfProjects: 3 },
		}),
		sanityFetch<LatestPersonalProjectsQueryResult>({
			query: latestPersonalProjectsQuery,
			revalidate: 3600,
			params: { numOfProjects: 3 },
		}),
		sanityFetch<LatestPostsQueryResult>({
			query: latestPostsQuery,
			revalidate: 60,
			params: { numOfPosts: 3 },
		}),
	]);

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
