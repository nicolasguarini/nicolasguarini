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
        body: "API and service design, data modelling, and splitting distributed monoliths into microservices. Django REST Framework, Go, PostgreSQL, RabbitMQ, Redis.",
    },
    {
        Icon: BagIcon,
        title: "DevOps & Infrastructure",
        body: "CI/CD pipelines, containerization and Kubernetes deployments, plus monitoring and alerting. Docker, Ansible, Grafana, Prometheus.",
    },
    {
        Icon: AppIcon,
        title: "Web & Mobile Products",
        body: "Websites, web apps, e-commerce and mobile apps, built from design to deployment. Each one comes with a content management panel, basic SEO optimization and analytics.",
    },
    {
        Icon: DesignIcon,
        title: "UI/UX Design",
        body: "Often included in the work above, I take care of the visual design and experience of the products I build. My style is modern, elegant and minimal (as I imagine you can see from this site).",
    },
];

export default function ServicesCompact() {
    return (
        <div className="flex flex-col gap-16 py-20 lg:py-28 bg-section">
            <div className="flex flex-col md:flex-row gap-4">
                <SectionHeading
                    label="What I do"
                    title="What I work on"
                    className="basis-1/2"
                />
                <div className="flex flex-col gap-10 basis-1/2">
                    <p>
                        Most of my work is backend and infrastructure. I never stop experimenting
                        and learning new technologies, and I take on freelance projects when
                        something interesting comes along.
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
