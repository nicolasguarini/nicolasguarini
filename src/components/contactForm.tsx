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
                <input
                    id="name"
                    className="w-full bg-transparent border border-muted px-4 py-3 rounded-md focus:outline-hidden focus:border-white transition-colors"
                    type="text"
                    name="name"
                    autoComplete="name"
                    required
                    placeholder="Your name"
                />
            </div>

            <div className="w-full flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-left self-start">Email</label>
                <input
                    id="email"
                    className="w-full bg-transparent border border-muted px-4 py-3 rounded-md focus:outline-hidden focus:border-white transition-colors"
                    type="email"
                    name="email"
                    autoComplete="email"
                    required
                    placeholder="Your email"
                />
            </div>
            
            <div className="w-full flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-left self-start">Message</label>
                <textarea
                    id="message"
                    className="w-full bg-transparent border border-muted px-4 py-3 rounded-md focus:outline-hidden focus:border-white transition-colors"
                    name="message"
                    rows={5}
                    required
                    placeholder="Your message"
                ></textarea>
            </div>
            <button
                type="submit"
                disabled={state.submitting}
                className="w-full bg-white text-black px-4 py-3 font-medium rounded-md border cursor-pointer transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
            >
                {state.submitting ? "Sending..." : "Send"}
            </button>

            <ValidationError errors={state.errors} />
            
            <div className="text-left self-start flex flex-col gap-2">
                <p className="text-sm text-muted text-left">
                    By sending this form, you agree to my <a href="https://www.iubenda.com/privacy-policy/61020748/legal" className="underline">Privacy Policy</a>.
                </p>
                <p className="text-sm text-muted text-left">
                    You can also send me an email at <a href="mailto:web@nicolasguarini.it" className="underline">web@nicolasguarini.it</a>.
                </p>
            </div>

        </form>
    )
}