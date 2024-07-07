import Button from "@/components/button";
import Hero from "@/components/hero";
import BagIcon from "@/components/icons/bagIcon";
import EducationIcon from "@/components/icons/educationIcon";

export default async function Home() {
	return (
		<div>
			<Hero />
			
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

			<div className="flex flex-col gap-16 py-32" style={{
						backgroundImage: "url('/assets/shapes-bg-2.png')",
						backgroundSize: "contain",
						backgroundRepeat: "no-repeat",
						backgroundPosition: "center",
					}}>
				<div className="flex flex-col md:flex-row gap-4 ">
					<div className="flex flex-col gap-3 basis-1/2">
						<p className="font-medium">Services</p>
						<h2 className="font-bold text-3xl">The main services I can deliver</h2>
					</div>
					<div className="flex flex-col gap-10 basis-1/2">
						<p>
							I never stop experimenting and learning new technologies. 
							My stacks are modern and efficient, studied and designed for various and specific use cases. <br />
							Some of the technologies I use are React, Next.js, Node.js, Flask, Sanity, PostgreSQL, MongoDB, Netlify, Vercel, and sometimes WordPress (in the right way though).
						</p>
					</div>
				</div>

				<div className="flex flex-wrap gap-10">
					<div className="flex flex-col gap-3 sm:basis-[46%] xl:basis-[22%]">
						<BagIcon />
						<h3 className="font-bold text-xl">Web and Mobile Apps</h3>
						<p>
							Development of progressive web apps and native / cross-platform mobile applications. I also take care of the infrastructure and database design, and backend development.
						</p>
					</div>
					<div className="flex flex-col gap-3 sm:basis-[46%] xl:basis-[22%]">
						<EducationIcon />
						<h3 className="font-bold text-xl">Websites</h3>
						<p>Websites and landing pages, custom-developed and tailored to the specific needs of the businesses I work with. Each site includes a content management panel, basic SEO optimization, and analytics services.</p>
					</div>
					<div className="flex flex-col gap-3 sm:basis-[46%] xl:basis-[22%]">
						<BagIcon />
						<h3 className="font-bold text-xl">E-Commerce</h3>
						<p>E-commerce sites developed with specific technologies based on the volume of products and sales to be managed, either from scratch or by integrating the functionalities into an existing site.</p>
					</div>
					<div className="flex flex-col gap-3 sm:basis-[46%] xl:basis-[22%]">
						<EducationIcon />
						<h3 className="font-bold text-xl">UI/UX Design</h3>
						<p>Often included in other services, I take care of the visual design and experience of the products I build. My style is modern, elegant and minimal (as I imagine you can see from this site).</p>
					</div>
				</div>

				<div className="flex flex-row gap-6">
					<Button href="/about" variant="primary">View more</Button>
					<Button href="/contact" variant="outline">Contact me</Button>
				</div>
			</div>
		</div>
	);
}
