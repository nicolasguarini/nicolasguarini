import { groq }  from 'next-sanity';

export const projectsSlugsQuery = groq`*[_type == "project" && slug.current != null].slug.current`;

export const projectBySlugQuery = groq`*[_type == "project" && slug.current == $slug][0]{
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

export const personalProjectsQuery = groq`*[_type == "project" && type == "personal"] | order(startedDate desc) {
    name,
    "slug": slug.current,
    excerpt
}`;

export const clientProjectsQuery = groq`*[_type == "project" && type == "client"] | order(startedDate desc) {
    name,
    "slug": slug.current,
    excerpt
}`;

export const projectCardQuery = groq`*[_type == "project" && slug.current == $slug][0] {
    name,
    "slug": slug.current,
    excerpt
} `;
