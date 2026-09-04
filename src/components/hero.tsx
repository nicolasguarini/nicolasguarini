import Button from "./button";

export default function Hero() {
    return (
        <div className="flex flex-col items-center justify-center py-28 lg:py-40 gap-8 bg-hero">
            <p className="flex items-center gap-2 text-sm text-muted">
                <span
                    aria-hidden="true"
                    className="inline-block h-2 w-2 rounded-full bg-emerald-400"
                />
                Open to consulting and selected projects
            </p>

            <h1 className="text-4xl font-bold text-center max-w-4xl">
                Software Engineer. I build and modernize systems that run in production.
            </h1>

            <p className="max-w-2xl text-center text-lg text-muted">
                At Elmec Informatica I work on microservices, Kubernetes and CI/CD within the
                Innovation and DevOps teams. Outside of that I design and build web and mobile
                products end to end — backend, frontend and UI/UX.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6">
                <Button href="/projects" variant="primary">My Projects</Button>
                <Button href="/contact" variant="outline">Contact me</Button>
            </div>
        </div>
    )
}
