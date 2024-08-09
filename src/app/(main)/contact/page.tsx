import ContactForm from "@/src/components/contactForm"
import { Metadata } from "next"

export const metadata: Metadata = {
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
            <div
                className="flex flex-col gap-5 py-12 lg:py-24 items-center bg-section"
            >
                <h1 className="font-bold text-4xl text-center">Contact</h1>
                <p className="text-[#A1A1A1]">Home {`>`} Contact</p>

                <div className="max-w-2xl text-left mx-auto my-12  text-lg font-medium">
                    <p>
                        If you have an interesting idea, a job offer, a project that you would like to start, if you want to ask me anything, or if you just want to say hello, contact me!
                    </p>
                </div>
            </div>

            <ContactForm />
        </div>
    )
}