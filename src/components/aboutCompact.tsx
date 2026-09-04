import Button from "./button";
import BagIcon from "./icons/bagIcon";
import EducationIcon from "./icons/educationIcon";

export default function AboutCompact() {
    return (
        <div className="flex flex-col md:flex-row gap-4 my-16 lg:my-20">
				<div className="flex flex-col gap-3 basis-2/5">
					<p className="font-medium">About me</p>
					<h2 className="font-bold text-3xl">My experience and education</h2>
				</div>
				<div className="flex flex-col gap-10 basis-3/5 bg-section" >
					<div className="flex flex-col gap-4">
						<p>
							I'm a Software Engineer at Elmec Informatica, and I occasionally take on freelance work.
						</p>
						<p>
							Always passionate about IT and cybersecurity, I have developed several projects in the mobile field, webapps, and machine learning. Although it is not often mentioned, I have also taken care of the UI/UX design of all my projects.
						</p>
						<p>
							I am also fond of music, guitars, chess, and I can solve a Rubik's cube in about 13 seconds!
						</p>
					</div>
					<div className="flex flex-col xs:flex-row gap-4" >
						<div className="flex flex-col gap-3">
							<BagIcon />
							<h3 className="font-bold text-xl">Experience</h3>
							<p>I work as a Software Engineer at Elmec Informatica, in the Innovation team and the DevOps subgroup. I also do freelance jobs for small companies and professionals, and I’ve been a university tutor for programming, data analysis, and computer architecture courses.</p>
						</div>
						<div className="flex flex-col gap-3">
							<EducationIcon />
							<h3 className="font-bold text-xl">Education</h3>
							<p>I earned my Bachelor's Degree in Computer Science at the University of Insubria in 2023, and my Master's Degree in Computer Science at the University of Milano-Bicocca in February 2026, with a final mark of 110/110 with honours.</p>
						</div>
					</div>
					<div className="flex flex-row gap-6">
						<Button href="/about" variant="primary">View more</Button>
						<Button href="/blog" variant="outline">Blog</Button>
					</div>
				</div>
			</div>
    )
}