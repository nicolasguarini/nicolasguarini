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

export const personalProjectsQuery = `*[_type == "project" && type == "personal"] {
    name,
    "slug": slug.current,
    excerpt
}`;

export const clientProjectsQuery = `*[_type == "project" && type == "client"] {
    name,
    "slug": slug.current,
    excerpt
}`;
