import { LatestPostsQueryResult } from "@/sanity.types";
import AcademicCareer from "@/src/components/academicCareer";
import BlogSection from "@/src/components/blogSection";
import WorkExperience from "@/src/components/workExperience";
import { client } from "@/src/sanity/lib/client";
import { latestPostsQuery } from "@/src/sanity/lib/queries";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "About Me",
  openGraph: {
    title: "About Me",
  }
}

export default async function About() {
  const posts = await client.fetch<LatestPostsQueryResult>(latestPostsQuery, { numOfPosts: 3 });

  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-5 py-12 lg:py-24 items-center bg-section">
        <h1 className="font-bold text-4xl text-center">About</h1>
        <p className="text-[#A1A1A1]">Home {`>`} About</p>

        <div className="max-w-2xl text-left mx-auto my-12  text-lg font-medium">
          <p>
            Computer Science Master's Degree student, private teacher of
            programming and data analysis for university students, and freelance
            developer of web solutions for small and medium-sized companies and
            freelancers.
          </p> <br />

          <p>
          In my free time, I love creating and playing music, and I'm extremely passionate to chess and strategy games in general. I've also won a few rubik's cube speedsolving competitions, averaging about 14 seconds of resolution time.
          </p>
        </div>
      </div>

      <WorkExperience />

      <AcademicCareer />

      <BlogSection posts={posts} />
    </div>
  );
}
