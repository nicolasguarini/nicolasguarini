"use client"
import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
    const [state, handleSubmit] = useForm("mzbljvpn");

    if (state.succeeded) {
        return <p className="pt-24 pb-56 font-medium text-md">Thanks for your submission!</p>
    }

    return (
        <form className="w-full max-w-lg flex flex-col gap-7 items-center mb-32" onSubmit={handleSubmit}>
            <div className="w-full flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-left self-start">Name</label>
                <input className="w-full bg-transparent border border-[#A1A1A1] px-4 py-3 rounded-md" type="text" name="name" placeholder="Your name" />
            </div>

            <div className="w-full flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-left self-start">Email</label>
                <input className="w-full bg-transparent border border-[#A1A1A1] px-4 py-3 rounded-md" type="text" name="email" placeholder="Your email" />
            </div>
            
            <div className="w-full flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-left self-start">Message</label>
                <textarea className="w-full bg-transparent border border-[#A1A1A1] px-4 py-3 rounded-md" name="message" rows={5} placeholder="Your message"></textarea>
            </div>
            <button type="submit" className="w-full bg-white text-black px-4 py-3 font-medium rounded-md border cursor-pointer">Send</button>

            <ValidationError errors={state.errors} />
            
            <div className="text-left self-start flex flex-col gap-2">
                <p className="text-sm text-[#A1A1A1] text-left">
                    By sending this form, you agree to my <a href="https://www.iubenda.com/privacy-policy/61020748/legal" className="underline">Privacy Policy</a>.
                </p>
                <p className="text-sm text-[#A1A1A1] text-left">
                    You can also send me an email at <a href="mailto:web@nicolsguarini.it" className="underline">web@nicolsguarini.it</a>.
                </p>
            </div>

        </form>
    )
}