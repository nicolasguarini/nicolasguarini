import { LatestPostsQueryResult } from "@/sanity.types";
import AcademicCareer from "@/src/components/academicCareer";
import BlogSection from "@/src/components/blogSection";
import WorkExperience from "@/src/components/workExperience";
import { client, sanityFetch } from "@/src/sanity/lib/client";
import { latestPostsQuery } from "@/src/sanity/lib/queries";
import { Metadata } from "next";
import Breadcrumbs from "@/src/components/breadcrumbs";

const ABOUT_DESCRIPTION =
	"Software Engineer at Elmec Informatica with an MSc in Computer Science. My work experience, academic career, and what I do outside of code.";

export const metadata: Metadata = {
	title: "About Me",
	description: ABOUT_DESCRIPTION,
	alternates: { canonical: "/about" },
	openGraph: {
		title: "About Me",
		description: ABOUT_DESCRIPTION,
		url: "/about",
	},
	twitter: {
		title: "About Me",
		description: ABOUT_DESCRIPTION,
	},
}

export default async function About() {
  const posts = await sanityFetch<LatestPostsQueryResult>({
    query: latestPostsQuery,
    revalidate: 60,
    params: { numOfPosts: 3 },
  });

  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-5 py-12 lg:py-24 items-center bg-section">
        <h1 className="font-bold text-4xl text-center">About</h1>
        <Breadcrumbs items={[{ label: "About" }]} />

        <div className="max-w-2xl text-left mx-auto my-12  text-lg font-medium">
          <p>
            Software Engineer at Elmec Informatica, where I work in the Innovation
            team and the DevOps subgroup. I hold an MSc in Computer Science from the
            University of Milano-Bicocca, I have tutored programming and data
            analysis for university students, and I develop web solutions as a
            freelancer for small and medium-sized companies and professionals.
          </p>

          <p className="mt-6">
            In my free time, I love creating and playing music, and I'm extremely passionate about chess and strategy games in general. I've also won a few Rubik's cube speedsolving competitions, averaging about 13 seconds of resolution time.
          </p>
        </div>
      </div>

      <WorkExperience />

      <AcademicCareer />

      <BlogSection posts={posts} />
    </div>
  );
}
