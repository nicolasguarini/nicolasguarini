import Button from "./button";

export default function Hero() {
    return (
        <div className="flex flex-col items-center justify-center py-28 lg:py-40 gap-8 bg-hero">
            <p className="flex items-center gap-2 text-sm text-muted">
                <span
                    aria-hidden="true"
                    className="inline-block h-2 w-2 rounded-full bg-emerald-400"
                />
                Open to freelance work
            </p>

            <h1 className="text-4xl font-bold text-center max-w-4xl">
                I build backend services and the infrastructure they run on.
            </h1>

            <p className="max-w-2xl text-center text-lg text-muted">
                I&apos;m a software engineer at Elmec Informatica, working on Django and Go
                services deployed on Kubernetes, and on the CI/CD pipelines behind them.
                I spent six years freelancing before that, and I still take on projects
                when something interesting comes along.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6">
                <Button href="/projects" variant="primary">My Projects</Button>
                <Button href="/contact" variant="outline">Contact me</Button>
            </div>
        </div>
    )
}
