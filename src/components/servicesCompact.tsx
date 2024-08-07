import Button from "./button";
import AppIcon from "./icons/appIcon";
import BagIcon from "./icons/bagIcon";
import CartIcon from "./icons/cartIcon";
import DesignIcon from "./icons/designIcon";
import EducationIcon from "./icons/educationIcon";
import WorldIcon from "./icons/worldIcon";

export default function ServicesCompact() {
    return (
        <div className="flex flex-col gap-16 py-32 bg-section" >
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
                    <AppIcon />
                    <h3 className="font-bold text-xl">Web and Mobile Apps</h3>
                    <p>
                        Development of progressive web apps and native / cross-platform mobile applications. I also take care of the infrastructure and database design, and backend development.
                    </p>
                </div>
                <div className="flex flex-col gap-3 sm:basis-[46%] xl:basis-[22%]">
                    <WorldIcon />
                    <h3 className="font-bold text-xl">Websites</h3>
                    <p>Websites and landing pages, custom-developed and tailored to the specific needs of the businesses I work with. Each site includes a content management panel, basic SEO optimization, and analytics services.</p>
                </div>
                <div className="flex flex-col gap-3 sm:basis-[46%] xl:basis-[22%]">
                    <CartIcon />
                    <h3 className="font-bold text-xl">E-Commerce</h3>
                    <p>E-commerce sites developed with specific technologies based on the volume of products and sales to be managed, either from scratch or by integrating the functionalities into an existing site.</p>
                </div>
                <div className="flex flex-col gap-3 sm:basis-[46%] xl:basis-[22%]">
                    <DesignIcon />
                    <h3 className="font-bold text-xl">UI/UX Design</h3>
                    <p>Often included in other services, I take care of the visual design and experience of the products I build. My style is modern, elegant and minimal (as I imagine you can see from this site).</p>
                </div>
            </div>

            <div className="flex flex-row gap-6">
                <Button href="/about" variant="primary">View more</Button>
                <Button href="/contact" variant="outline">Contact me</Button>
            </div>
        </div>
    )
}