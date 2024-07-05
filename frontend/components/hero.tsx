import Button from "./button";

export default function Hero() {
    return (
        <div className="flex flex-col items-center justify-center py-40 gap-8" style={{
            backgroundImage: "url('/assets/shapes-bg.png')",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
        }}>
            <h1 className="text-4xl font-bold text-center max-w-4xl">I craft Websites, eCommerce, and Apps that deliver results.</h1>
            <p className="max-w-2xl text-center">
                Experienced freelance developer with a Computer Science degree.
                Delivering top-notch digital solutions for small businesses for over five years.
            </p>
            <div className="flex flex-row items-center justify-center gap-6">
                <Button href="/portfolio" variant="primary">Portfolio</Button>
                <Button href="/contact" variant="outline">Contact</Button>
            </div>
        </div>
    )
}