import Link from 'next/link';
import { ProjectCard } from '@/types/projectCard';

const Project = ({ name, excerpt, slug }: ProjectCard) => {
	return (
		<div>
			<Link href={`/projects/${slug}`}>
				<h2 className="text-lg pb-2">{name}</h2>
				<p className="text-lightgray text-sm">{excerpt}</p>
			</Link>
		</div>
	);
};

export default Project;
