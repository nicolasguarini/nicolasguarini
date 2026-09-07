import { LatestPostsQueryResult } from "@/sanity.types";
import AcademicCareer from "@/src/components/academicCareer";
import BlogSection from "@/src/components/blogSection";
import WorkExperience from "@/src/components/workExperience";
import { sanityFetch } from "@/src/sanity/lib/client";
import { latestPostsQuery } from "@/src/sanity/lib/queries";
import { Metadata } from "next";
import PageHeader from "@/src/components/layout/pageHeader";

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
      <PageHeader title="About" breadcrumbs={[{ label: "About" }]}>
        <p>
          I&apos;m a software engineer at Elmec Informatica, in the Innovation team and
          the DevOps subgroup. I studied Computer Science at the University of Insubria
          and then at Milano-Bicocca, with a semester at Stockholm University in
          between. Before that I spent six years building websites and apps for small
          businesses as a freelancer, and I tutored programming and data analysis at
          university.
        </p>

        <p>
          In my free time, I love creating and playing music, and I&apos;m extremely
          passionate about chess and strategy games in general. I&apos;ve also won a few
          Rubik&apos;s cube speedsolving competitions, averaging about 13 seconds of
          resolution time.
        </p>
      </PageHeader>

      <WorkExperience />

      <AcademicCareer />

      <BlogSection posts={posts} />
    </div>
  );
}
