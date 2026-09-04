import Button from "./button";
import AppIcon from "./icons/appIcon";
import BagIcon from "./icons/bagIcon";
import DesignIcon from "./icons/designIcon";
import WorldIcon from "./icons/worldIcon";
import SectionHeading from "./sectionHeading";

const AREAS = [
    {
        Icon: WorldIcon,
        title: "Backend & Distributed Systems",
        body: "API and service design, data modelling, and breaking distributed monoliths into microservices that are actually maintainable. Django REST Framework, Go, PostgreSQL, RabbitMQ, Redis.",
    },
    {
        Icon: BagIcon,
        title: "DevOps & Infrastructure",
        body: "CI/CD pipelines, containerization and Kubernetes deployments, plus the observability that makes them debuggable. Docker, Ansible, Grafana, Prometheus.",
    },
    {
        Icon: AppIcon,
        title: "Web & Mobile Products",
        body: "Full products from design to deploy: web apps, landing pages, e-commerce and native or cross-platform mobile apps, with a content management panel and analytics included.",
    },
    {
        Icon: DesignIcon,
        title: "UI/UX Design",
        body: "Often folded into the work above: I take care of the visual design and the experience of the products I build. My style is modern, elegant and minimal (as I imagine you can see from this site).",
    },
];

export default function ServicesCompact() {
    return (
        <div className="flex flex-col gap-16 py-20 lg:py-28 bg-section">
            <div className="flex flex-col md:flex-row gap-4">
                <SectionHeading
                    label="What I do"
                    title="Where I can help"
                    className="basis-1/2"
                />
                <div className="flex flex-col gap-10 basis-1/2">
                    <p>
                        Most of my time goes into building and modernizing backend systems and the
                        infrastructure around them. I take on consulting and side projects when
                        something interesting comes up, and I never stop experimenting with new
                        technologies along the way.
                    </p>
                </div>
            </div>

            <div className="flex flex-wrap gap-10">
                {AREAS.map(({ Icon, title, body }) => (
                    <div key={title} className="flex flex-col gap-3 sm:basis-[46%] xl:basis-[22%]">
                        <Icon />
                        <h3 className="font-bold text-xl">{title}</h3>
                        <p>{body}</p>
                    </div>
                ))}
            </div>

            <div className="flex flex-row gap-6">
                <Button href="/about" variant="primary">View more</Button>
                <Button href="/contact" variant="outline">Contact me</Button>
            </div>
        </div>
    )
}
