import { urlFor } from "@/src/sanity/lib/utils";
import CategoryTag from "./categoryTag";
import Link from "next/link";
import Image from "next/image";
import type {
    LatestClientProjectsQueryResult,
    LatestPersonalProjectsQueryResult,
} from "@/sanity.types";

type Project =
    | LatestPersonalProjectsQueryResult[number]
    | LatestClientProjectsQueryResult[number];

export default function ProjectCard({ project }: { project: Project }) {
    return (
        <Link href={`/projects/${project.type}/${project.slug}`}>
            <div className="flex flex-col gap-3 max-w-sm xl:max-w-md">
                {project.featuredImage && (
                    <div className="overflow-hidden rounded-xl">
                        <Image
                            className="h-full w-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
                            src={urlFor(project.featuredImage).width(640).fit("max").auto("format").url()}
                            alt={`${project.name ?? "Project"} — preview`}
                            width={640}
                            height={480}
                            loading="lazy"
                            sizes="(max-width: 640px) 100vw, 384px"
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