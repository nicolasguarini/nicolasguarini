import ProjectCard from "@/src/components/projectCard";
import { LatestPersonalProjectsQueryResult } from "@/sanity.types";
import { client } from "@/src/sanity/lib/client";
import { latestPersonalProjectsQuery } from "@/src/sanity/lib/queries";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Personal Projects",
    description: "My portfolio of personal projects, showcasing my skills, creativity, and passion for technology. From innovative solutions to experimental ideas, see what I've been building.",

    openGraph: {
        title: "Personal Projects",
        description: "My portfolio of personal projects, showcasing my skills, creativity, and passion for technology. From innovative solutions to experimental ideas, see what I've been building.",
    }
}

export default async function Page() {
    const personalProjects = await client.fetch<LatestPersonalProjectsQueryResult>(latestPersonalProjectsQuery, { numOfProjects: 50 });
    
	return (
		<div>
			<div className="flex flex-col gap-5 py-24 items-center bg-section">
                <h1 className="font-bold text-4xl text-center">Personal Projects</h1>
                <p className="text-[#A1A1A1]">Home {`>`} Projects {`>`} Personal</p>
            </div>

            <div className="flex flex-wrap gap-10 gap-y-16 items-start justify-center pb-32 bg-section-long">
                {personalProjects.map((project) => (
                    <div key={project.slug}>
                        <ProjectCard project={project} />
                    </div>
                ))}
            </div>
		</div>
	);
}