import AboutCompact from "@/components/aboutCompact";
import Button from "@/components/button";
import Hero from "@/components/hero";
import BagIcon from "@/components/icons/bagIcon";
import EducationIcon from "@/components/icons/educationIcon";
import ProjectCard from "@/components/projectCard";
import ServicesCompact from "@/components/servicesCompact";

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
		</div>
	);
}
