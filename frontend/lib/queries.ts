import { groq } from 'next-sanity';

export const projectsSlugsQuery = `*[_type == "project" && slug.current != null].slug.current`;

export const projectBySlugQuery = `*[_type == "project" && slug.current == $slug][0]{
    name,
    "slug": slug.current,
    type,
    excerpt,
    service,
    startedDate,
    finishedDate,
    url,
    images,
    content
}`;
