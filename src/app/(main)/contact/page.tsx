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

            <form className="w-full max-w-lg flex flex-col gap-7 items-center mb-32" action="https://formspree.io/f/mzbljvpn"method="POST" >
                <div className="w-full flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm font-medium text-left self-start">Name</label>
                    <input className="w-full bg-transparent border border-[#A1A1A1] px-4 py-3 rounded-md" type="text" name="name" placeholder="Your name" />
                </div>

                <div className="w-full flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-medium text-left self-start">Name</label>
                    <input className="w-full bg-transparent border border-[#A1A1A1] px-4 py-3 rounded-md" type="text" name="email" placeholder="Your name" />
                </div>
                
                <div className="w-full flex flex-col gap-2">
                    <label htmlFor="message" className="text-sm font-medium text-left self-start">Message</label>
                    <textarea className="w-full bg-transparent border border-[#A1A1A1] px-4 py-3 rounded-md" name="message" rows={5} placeholder="Your message"></textarea>
                </div>
                <input type="submit" value="Send" className="w-full bg-white text-black px-4 py-3 font-medium rounded-md border cursor-pointer" />

                <div className="text-left self-start flex flex-col gap-2">
                    <p className="text-sm text-[#A1A1A1] text-left">
                        By sending this form, you agree to my <a href="https://www.iubenda.com/privacy-policy/61020748/legal" className="underline">Privacy Policy</a>.
                    </p>
                    <p className="text-sm text-[#A1A1A1] text-left">
                        You can also send me an email at <a href="mailto:web@nicolsguarini.it" className="underline">web@nicolsguarini.it</a>.
                    </p>
                </div>
                
            </form>
        </div>
    )
}