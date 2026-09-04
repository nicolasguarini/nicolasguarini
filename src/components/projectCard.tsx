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
        <Link
            href={`/projects/${project.type}/${project.slug}`}
            className="group block max-w-sm xl:max-w-md rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-black"
        >
            <div className="flex flex-col gap-3">
                {project.featuredImage && (
                    <div className="overflow-hidden rounded-xl border border-line transition-colors group-hover:border-muted">
                        <Image
                            className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
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
                <p className="text-muted">{project.excerpt}</p>

                <div className="flex flex-row flex-wrap gap-2">
                    {project.categories?.map((category: string) => (
                        <CategoryTag key={category} category={category} />
                    ))}
                </div>

                <p className="font-medium mt-3 flex items-center gap-2">
                    View project
                    <span
                        aria-hidden="true"
                        className="inline-block transition-transform duration-300 group-hover:translate-x-1"
                    >
                        {'→'}
                    </span>
                </p>
            </div>
        </Link>
    )
}
