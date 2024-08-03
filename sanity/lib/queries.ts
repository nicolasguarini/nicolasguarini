import { groq }  from 'next-sanity';

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

export const latestPersonalProjectsQuery = groq`*[_type == "project" && type == "personal"] | order(startedDate desc)[0..$numOfProjects-1] {
    name,
    "slug": slug.current,
    categories,
    excerpt,
    featuredImage
  }`;

export const latestClientProjectsQuery = groq`*[_type == "project" && type == "client"] | order(startedDate desc)[0..$numOfProjects-1] {
  name,
  "slug": slug.current,
  categories,
  excerpt,
  featuredImage
}`;

export const latestPostsQuery = groq`*[_type == "post"] | order(publishedAt desc)[0..$numOfPosts-1] {
  title,
  "slug": slug.current,
  categories,
  publishedAt,
  excerpt,
  featuredImage
}`;