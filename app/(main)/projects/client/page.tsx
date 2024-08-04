import ProjectCard from "@/components/projectCard";
import { LatestClientProjectsQueryResult } from "@/sanity.types";
import { client } from "@/sanity/lib/client";
import { latestClientProjectsQuery } from "@/sanity/lib/queries";

export default async function Page() {
    const clientProjects = await client.fetch<LatestClientProjectsQueryResult>(latestClientProjectsQuery, { numOfProjects: 50 });
    
	return (
		<div>
			<div className="flex flex-col gap-5 py-24 items-center" style={{
						backgroundImage: "url('/assets/shapes-bg-2.png')",
						backgroundSize: "contain",
						backgroundRepeat: "no-repeat",
						backgroundPosition: "center",
					}}>
                <h1 className="font-bold text-4xl text-center">Client Projects</h1>
                <p className="text-[#A1A1A1]">Home {`>`} Projects {`>`} Clients</p>
            </div>


            <div className="flex flex-wrap gap-10 gap-y-16 items-start justify-center pb-32" style={{
                        backgroundImage: "url('/assets/shapes-bg-2.png')",
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                    }}>
                {clientProjects.map((project) => (
                    <div key={project.slug}>
                        <ProjectCard project={project} />
                    </div>
                ))}
            </div>
		</div>
	);
}