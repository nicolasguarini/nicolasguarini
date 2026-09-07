import ContactForm from "@/src/components/contactForm"
import { Metadata } from "next"
import PageHeader from "@/src/components/layout/pageHeader"

export const metadata: Metadata = {
	alternates: { canonical: "/contact" },
	title: "Contact",
    description: "If you have an interesting idea, a job offer, a project that you would like to start, if you want to ask me anything, or if you just want to say hello, contact me!",

    openGraph: {
        title: "Contact",
        description: "If you have an interesting idea, a job offer, a project that you would like to start, if you want to ask me anything, or if you just want to say hello, contact me!",
    }
}

export default function Page() {
    return (
        <div className="flex flex-col items-center">
            <PageHeader
            	title="Contact"
            	breadcrumbs={[{ label: "Contact" }]}
            	intro="If you have an interesting idea, a job offer, a project that you would like to start, if you want to ask me anything, or if you just want to say hello, contact me!"
            />

            <ContactForm />
        </div>
    )
}