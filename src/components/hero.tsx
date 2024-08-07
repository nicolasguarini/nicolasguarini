import Button from "./button";
import ExternalLink from "./icons/externalLink";

export default function Hero() {
    return (
        <div className="flex flex-col items-center justify-center py-28 lg:py-40 gap-8 bg-hero">
            {/* <h1 className="text-4xl font-bold text-center max-w-4xl">I craft Websites, eCommerce, and Apps that deliver results.</h1> */}
            <h1 className="text-4xl font-bold text-center max-w-4xl">I make webapps, mobile apps, UI/UX design, data analysis and more.</h1>

            {/* <p className="max-w-2xl text-center">
            I design, plan and develop digital products, supporting my clients in the entire innovation process that includes the development of custom software.
            </p> */}
            <p className="max-w-2xl text-center text-lg">
            I turn ideas into digital products, overseeing every detail of the development process to create tailored, scalable, high-quality software.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6">
                <Button href="/projects" variant="primary">My Projects</Button>
                <Button href="/contact" variant="outline">Contact me</Button>
            </div>
        </div>
    )
}