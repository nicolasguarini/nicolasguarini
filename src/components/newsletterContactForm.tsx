"use client"

import { useForm, ValidationError } from "@formspree/react";

export default function NewsletterContactForm() {
    const [state, handleSubmit] = useForm("mblrydkp");

    if (state.succeeded) {
        return <p className="py-3 font-medium text-md text-white">Thanks for joining!</p>
    }

    return (
        <form 
            className='flex flex-col gap-2'
            onSubmit={handleSubmit}
        >
            <div className="flex flex-row gap-2">
                <label htmlFor="newsletter-email" className="sr-only">Email address</label>
                <input
                    id="newsletter-email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    required
                    placeholder="Your email address"
                    className="w-full rounded-lg p-2 text-sm bg-ink text-black"
                />
                <button
                    type="submit"
                    disabled={state.submitting}
                    className="bg-transparent rounded-lg border-line border-2 py-2 px-6 whitespace-nowrap transition-colors hover:border-white disabled:cursor-not-allowed disabled:opacity-60"
                >
                    {state.submitting ? "..." : "Subscribe"}
                </button>
            </div>
            
            <ValidationError className="text-red-500" errors={state.errors} />
        </form>
    )
}