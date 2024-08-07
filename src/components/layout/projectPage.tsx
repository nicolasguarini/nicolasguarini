import CategoryTag from "@/src/components/categoryTag";
import { ProjectBySlugQueryResult } from "@/sanity.types";
import { client, sanityFetch } from "@/src/sanity/lib/client";
import { projectBySlugQuery } from "@/src/sanity/lib/queries";
import { capitalizeFirstLetter } from "@/src/lib/utils";
import { urlFor } from "@/src/sanity/lib/utils";
import { PortableText } from "@portabletext/react";
import { SanityImageComponent } from "@/src/sanity/components/image";
import { CodeBlock } from "@/src/sanity/components/codeBlock";

export default async function ProjectPage({params}: { params: { slug: string } }) {
    const project = await sanityFetch<ProjectBySlugQueryResult>({
        query: projectBySlugQuery,
        revalidate: 3600,
        params: { slug: params.slug },
    });

    if (!project) {
        return <div>404 Not Found</div>
    }

    return (
        <div className="flex flex-col gap-20 py-12 lg:py-24">
            <div className="flex flex-col-reverse w-full lg:flex-row justify-between max-w-6xl mx-auto gap-12" style={{
						backgroundImage: "url('/assets/shapes-bg-2.png')",
						backgroundSize: "contain",
						backgroundRepeat: "no-repeat",
						backgroundPosition: "center",
					}}>
                <div className="">
                    <div className="flex flex-col gap-1">
                        <p className="text-[#A1A1A1]">Home {`>`} Projects {`>`} {capitalizeFirstLetter(project.type ?? "")} {`>`} {project.name}</p>
                        <h1 className="font-bold text-4xl">{project.name}</h1>
                    </div>
                    
                    
                    <div className="flex flex-row gap-12 mt-8">
                        <div className="flex flex-col gap-1">
                            <p className="text-[#A1A1A1]">Type</p>
                            <p>{capitalizeFirstLetter(project.type ?? "")}</p>
                        </div>

                        <div className="flex flex-col gap-1">
                            <p className="text-[#A1A1A1]">Service</p>
                            <p>{project.service}</p>
                        </div>
                    </div>

                    <div className="flex flex-row gap-12 mt-8">
                        <div className="flex flex-col gap-1">
                            <p className="text-[#A1A1A1]">Started</p>
                            <p>{project.startedDate}</p>
                        </div>

                        <div className="flex flex-col gap-1">
                            <p className="text-[#A1A1A1]">Finished</p>
                            <p>{project.finishedDate}</p>
                        </div>
                    </div>

                    <div className="flex flex-row gap-12 mt-8">
                        <div className="flex flex-col gap-1">
                            <p className="text-[#A1A1A1]">Link</p>
                            <p className="underline">{project.url}</p>
                        </div>
                    </div>

                    <div className="flex flex-row gap-12 mt-8">
                        <div className="flex flex-col gap-2">
                            <p className="text-[#A1A1A1]">Tags</p>
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
                        <img src={urlFor(project.featuredImage).url()} className="block mx-auto object-cover w-full lg:max-w-xl rounded-lg" alt="Featured Image" />
                    )}
                </div>
            </div>

            <div className="prose prose-invert max-w-5xl mx-auto text-inherit sanity-block-content">
                { project.content && (
                    <PortableText 
                    value={project.content}  
                    components={{
                        types: {
                            image: SanityImageComponent,
                            code: ({ value }: any) => {
                                return <CodeBlock value={value} />
                            },
                        }
                    }}
                />
                )}
            </div>

            <div className="flex flex-col gap-12 max-w-5xl mx-auto">
                {project?.images?.map((image) => (
                    <div className="" key={image._key}>
                        <img src={urlFor(image).url()} alt={project.name ?? "Project Images"} />
                    </div>
                ))}
            </div>
        </div>
        
    )
}