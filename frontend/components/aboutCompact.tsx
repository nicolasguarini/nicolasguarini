import Button from "./button";
import BagIcon from "./icons/bagIcon";
import EducationIcon from "./icons/educationIcon";

export default function AboutCompact() {
    return (
        <div className="flex flex-col md:flex-row gap-4 my-20">
				<div className="flex flex-col gap-3 basis-2/5">
					<p className="font-medium">About me</p>
					<h2 className="font-bold text-3xl">My experience and education</h2>
				</div>
				<div className="flex flex-col gap-10 basis-3/5" style={{
						backgroundImage: "url('/assets/shapes-bg-2.png')",
						backgroundSize: "contain",
						backgroundRepeat: "no-repeat",
						backgroundPosition: "center",
					}}>
					<p>
						I'm a 22y/o student and occasionally freelancer based in Italy. <br /> 
						Always passionate about IT and cybersecurity, I have developed several projects in the mobile field, webapps, and machine learning. Although it is not often mentioned, I have also taken care of the UI/UX design of all my projects. <br /> 
						I am also fond of music, guitars, chess, and I can solve rubiks cubes in under 14 seconds!
					</p>
					<div className="flex flex-col xs:flex-row gap-4" >
						<div className="flex flex-col gap-3">
							<BagIcon />
							<h3 className="font-bold text-xl">Experience</h3>
							<p>I do freelance jobs for small companies and professionals, and i'm also a university tutor of programming, data analysis, and computer architecture courses.</p>
						</div>
						<div className="flex flex-col gap-3">
							<EducationIcon />
							<h3 className="font-bold text-xl">Education</h3>
							<p>I graduated in Computer Science in 2023, and currently studying for a Master's Degree in Computer Science at the University of Milano-Bicocca.</p>
						</div>
					</div>
					<div className="flex flex-row gap-6">
						<Button href="/about" variant="primary">View more</Button>
						<Button href="/linkedin" variant="outline">LinkedIn</Button>
					</div>
				</div>
			</div>
    )
}