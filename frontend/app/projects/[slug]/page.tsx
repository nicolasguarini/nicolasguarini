import Container from '@/components/layout/Container';
import Layout from '@/components/layout/Layout';
import {
	fetchProjectCardBySlug,
	fetchProjectSlugs,
	fetchProjetBySlug,
} from '@/lib/fetch';
import { urlFor } from '@/lib/utils';
import { Project } from '@/types/project';
import { ProjectCard } from '@/types/projectCard';
import { PortableText } from '@portabletext/react';
import { Metadata, ResolvingMetadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

type Props = { params: { slug: string } };

export async function generateMetadata(
	{ params }: Props,
	parent: ResolvingMetadata,
): Promise<Metadata> {
	const slug = params.slug;
	const projectCard: ProjectCard = await fetchProjectCardBySlug(slug);

	return {
		title: projectCard.name,
		description: projectCard.excerpt,
	};
}

export async function generateStaticParams() {
	const slugs = await fetchProjectSlugs();
	return slugs.map((slug: string) => ({ slug }));
}

export default async function Page({ params }: Props) {
	const slug: string = params.slug;
	const project: Project = await fetchProjetBySlug(slug);

	return (
		<Layout>
			<Container>
				<h1
					className="text-4xl font-medium mt-10  text-clip"
					style={{ overflowWrap: 'anywhere' }}>
					<Link href={project?.url} className="underline">
						{project?.name}
					</Link>
				</h1>

				<div className="grid grid-cols-2 md:grid-cols-4 mt-10">
					<div className="col-span-2 mb-4 md:mb-0">
						<div className="text-lightgray">service :</div>
						<div className="mt-2">{project?.service}</div>
					</div>
					<div className="col-span-1">
						<div className="text-lightgray">started :</div>
						<div className="mt-2">{project?.startedDate}</div>
					</div>
					<div className="col-span-1">
						<div className="text-lightgray">finished :</div>
						<div className="mt-2">{project?.finishedDate}</div>
					</div>
				</div>

				<div className="text-lightgray mt-8">
					<div className="prose prose-invert max-w-none m-auto text-gray mt-14">
						<PortableText value={project?.content} />
					</div>
				</div>

				<div className="mt-20">
					{project?.images?.map((image) => {
						return (
							<div className="mb-14" key={image._id}>
								<img src={urlFor(image).url()} alt={project?.name} />
							</div>
						);
					})}
				</div>
			</Container>
		</Layout>
	);
}
