import AcademicCareer from "@/components/academicCareer";
import BlogSection from "@/components/blogSection";
import WorkExperience from "@/components/workExperience";

export default function About() {
  return (
    <div className="flex flex-col">
      <div
        className="flex flex-col gap-5 py-12 lg:py-24 items-center"
        style={{
          backgroundImage: "url('/assets/shapes-bg-2.png')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
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

      <BlogSection />
    </div>
  );
}
