import { urlFor } from "@/sanity/lib/utils";
import CategoryTag from "./categoryTag";

export default function ProjectCard({ project }: { project: any}) {
    return (
        <div className="flex flex-col gap-3 max-w-sm xl:max-w-md"> 
            {project.featuredImage && (
                <img className="h-full w-full rounded-xl object-cover" src={urlFor(project.featuredImage).url()} alt="" />
            )}
            <h3 className="font-bold text-xl">{project.name}</h3>
            <p>{project.excerpt}</p>
            <div className="flex flex-row gap-4">
                {project.categories?.map((category: string) => (
                    <CategoryTag key={category} category={category} />
                ))}
            </div>
            <a className="font-medium mt-3" href={`/projects/${project.type}/${project.slug}`}>View project {'>'}</a>
        </div>
    )
}