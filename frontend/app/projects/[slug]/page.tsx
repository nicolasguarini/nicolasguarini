/* 
export async function generateStaticParams() {
  const slugs = await getProjectsPaths()
  return slugs.map((slug) => ({ slug }))
}
*/
export default function Page({ params }: { params: { slug: string } }) {
  return <div>My Post: {params.slug}</div>;
}
