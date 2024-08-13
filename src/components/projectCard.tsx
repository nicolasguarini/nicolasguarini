import { urlFor } from "@/src/sanity/lib/utils";
import CategoryTag from "./categoryTag";
import Link from "next/link";

export default function ProjectCard({ project }: { project: any }) {
    return (
        <Link href={`/projects/${project.type}/${project.slug}`}>
            <div className="flex flex-col gap-3 max-w-sm xl:max-w-md">
                {project.featuredImage && (
                    <div className="overflow-hidden rounded-xl">
                        <img 
                            className="h-full w-full object-cover transform transition-transform duration-500 ease-in-out hover:scale-110" 
                            src={urlFor(project.featuredImage).url()} 
                            alt="" 
                        />
                    </div>
                )}
                <h3 className="font-bold text-xl">{project.name}</h3>
                <p>{project.excerpt}</p>
                <div className="flex flex-row gap-4">
                    {project.categories?.map((category: string) => (
                        <CategoryTag key={category} category={category} />
                    ))}
                </div>
                <p className="font-medium mt-3">
                    View project {'→'}
                </p>
            </div>
        </Link>
    )
}