import Button from "./button";

export default function Hero() {
    return (
        <div className="flex flex-col items-center justify-center py-28 lg:py-40 gap-8 bg-hero">
            <h1 className="text-4xl font-bold text-center max-w-4xl">I craft Websites, eCommerce, and Apps that deliver results.</h1>
            <p className="max-w-2xl text-center">
            I design, plan and develop exceptional digital products, supporting my clients in the entire innovation process that includes the development of custom software.
            </p>
            <div className="flex flex-row items-center justify-center gap-6">
                <Button href="/portfolio" variant="primary">Portfolio</Button>
                <Button href="/contact" variant="outline">Contact</Button>
            </div>
        </div>
    )
}