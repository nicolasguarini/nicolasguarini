import CategoryTag from "@/src/components/categoryTag";
import { getProject } from "@/src/lib/content";
import { capitalizeFirstLetter } from "@/src/lib/utils";
import Markdown from "@/src/components/markdown";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import Breadcrumbs from "@/src/components/breadcrumbs";

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    const project = getProject(slug);

    if (!project) {
        notFound();
    }

    return (
        <div className="flex flex-col gap-20 py-12 lg:py-24">
            <div className="flex flex-col-reverse w-full lg:flex-row justify-between max-w-6xl mx-auto gap-12" style={{
						backgroundImage: "url('/assets/shapes-bg-2.webp')",
						backgroundSize: "contain",
						backgroundRepeat: "no-repeat",
						backgroundPosition: "center",
					}}>
                <div className="">
                    <div className="flex flex-col gap-1">
                        <Breadcrumbs
                            items={[
                                { label: "Projects", href: "/projects" },
                                {
                                    label: capitalizeFirstLetter(project.type ?? ""),
                                    href: project.type ? `/projects/${project.type}` : undefined,
                                },
                                { label: project.name ?? "Project" },
                            ]}
                        />
                        <h1 className="font-bold text-4xl">{project.name}</h1>
                    </div>
                    
                    
                    <div className="flex flex-row gap-12 mt-8">
                        <div className="flex flex-col gap-1">
                            <p className="text-muted">Type</p>
                            <p>{capitalizeFirstLetter(project.type ?? "")}</p>
                        </div>

                        <div className="flex flex-col gap-1">
                            <p className="text-muted">Service</p>
                            <p>{project.service}</p>
                        </div>
                    </div>

                    <div className="flex flex-row gap-12 mt-8">
                        <div className="flex flex-col gap-1">
                            <p className="text-muted">Started</p>
                            <p>{project.startedDate}</p>
                        </div>

                        <div className="flex flex-col gap-1">
                            <p className="text-muted">Finished</p>
                            <p>{project.finishedDate}</p>
                        </div>
                    </div>

                    <div className="flex flex-row gap-12 mt-8">
                        <div className="flex flex-col gap-1">
                            <p className="text-muted">Link</p>
                            <Link href={project.url ?? "/"} target="_blank" className="underline">
                                {project.url}
                            </Link>
                        </div>
                    </div>

                    <div className="flex flex-row gap-12 mt-8">
                        <div className="flex flex-col gap-2">
                            <p className="text-muted">Tags</p>
                            <div className="flex flex-wrap gap-2">
                                {project?.categories?.map((category, index) => (
                                    <CategoryTag key={index} category={category} />
                                ))}
                            </div>
                        </div>
                    </div>
                    
                </div>

                <div className="">
                    { project.featuredImage && (
                        <Image
                            src={project.featuredImage}
                            alt={`${project.name ?? "Project"} — featured image`}
                            width={1024}
                            height={768}
                            priority
                            sizes="(max-width: 1024px) 100vw, 576px"
                            className="block mx-auto object-cover w-full h-auto lg:max-w-xl rounded-lg"
                        />
                    )}
                </div>
            </div>

            <div className="prose prose-invert max-w-5xl mx-auto text-inherit">
                <Markdown>{project.content}</Markdown>
            </div>

            <div className="flex flex-col gap-12 max-w-5xl mx-auto">
                {project?.images?.map((image) => (
                    <div className="" key={image.src}>
                        <Image
                            src={image.src}
                            alt={image.alt ?? `${project.name ?? "Project"} screenshot`}
                            width={1280}
                            height={960}
                            loading="lazy"
                            sizes="(max-width: 1024px) 100vw, 1024px"
                            className="w-full h-auto rounded-lg"
                        />
                    </div>
                ))}
            </div>
        </div>
        
    )
}