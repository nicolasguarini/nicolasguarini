import ProjectCard from "@/src/components/projectCard";
import { LatestClientProjectsQueryResult, LatestPersonalProjectsQueryResult } from "@/sanity.types";
import { client } from "@/src/sanity/lib/client";
import { latestClientProjectsQuery, latestPersonalProjectsQuery } from "@/src/sanity/lib/queries";

export default async function Page() {
    const personalProjects = await client.fetch<LatestPersonalProjectsQueryResult>(latestPersonalProjectsQuery, { numOfProjects: 50 });
    
	return (
		<div>
			<div className="flex flex-col gap-5 py-24 items-center" style={{
						backgroundImage: "url('/assets/shapes-bg-2.png')",
						backgroundSize: "contain",
						backgroundRepeat: "no-repeat",
						backgroundPosition: "center",
					}}>
                <h1 className="font-bold text-4xl text-center">Personal Projects</h1>
                <p className="text-[#A1A1A1]">Home {`>`} Projects {`>`} Personal</p>
            </div>


            <div className="flex flex-wrap gap-10 gap-y-16 items-start justify-center pb-32" style={{
                        backgroundImage: "url('/assets/shapes-bg-2.png')",
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                    }}>
                {personalProjects.map((project) => (
                    <div key={project.slug}>
                        <ProjectCard project={project} />
                    </div>
                ))}
            </div>
		</div>
	);
}