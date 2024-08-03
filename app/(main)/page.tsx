import AboutCompact from "@/components/aboutCompact";
import Button from "@/components/button";
import Hero from "@/components/hero";
import BagIcon from "@/components/icons/bagIcon";
import EducationIcon from "@/components/icons/educationIcon";
import PostCard from "@/components/postCard";
import ProjectCard from "@/components/projectCard";
import ServicesCompact from "@/components/servicesCompact";
import { fetchClientProjects } from "@/sanity/lib/fetch";

export default async function Home() {
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

				<div className="flex flex-wrap gap-10 items-center justify-center mb-10">
					<ProjectCard />
					<ProjectCard />
					<ProjectCard />
				</div>

				<Button href="/portfolio" variant="primary">View more</Button>
			</div>

			<div className="flex flex-col gap-3 pb-32 items-center" style={{
						backgroundImage: "url('/assets/shapes-bg-2.png')",
						backgroundSize: "contain",
						backgroundRepeat: "no-repeat",
						backgroundPosition: "center",
					}}>
				<p className="font-medium">Portfolio</p>
				<h2 className="font-bold text-3xl mb-10 text-center">My personal projects</h2>

				<div className="flex flex-wrap gap-10 items-center justify-center mb-10">
					<ProjectCard />
					<ProjectCard />
					<ProjectCard />
				</div>

				<Button href="/portfolio" variant="primary">View more</Button>
			</div>

			<div className="flex flex-col md:flex-row gap-4 gap-y-20 my-20">
				<div className="flex flex-col gap-5 basis-1/2">
					<div className="flex flex-col gap-3">
						<p className="font-medium">Blog</p>
						<h2 className="font-bold text-3xl">My Latest Posts</h2>
					</div>
					
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
					
				</div>
				<div className="flex flex-col gap-14 basis-1/2" style={{
						backgroundImage: "url('/assets/shapes-bg-2.png')",
						backgroundSize: "contain",
						backgroundRepeat: "no-repeat",
						backgroundPosition: "center",
					}}>
					<PostCard />
					<PostCard />
					<PostCard />
				</div>
			</div>
		</div>
	);
}
