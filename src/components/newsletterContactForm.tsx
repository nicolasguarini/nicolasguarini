"use client"

import { useForm, ValidationError } from "@formspree/react";

export default function NewsletterContactForm() {
    const [state, handleSubmit] = useForm("mblrydkp");

    if (state.succeeded) {
        return <p className="py-3 font-medium text-md text-white">Thanks for joining!</p>
    }

    return (
        <form 
            className='flex flex-row gap-2'
            onSubmit={handleSubmit}
        >
            <input type="email" placeholder="Your 	Email address" name='email' className="w-full rounded-lg p-2 text-sm bg-[#EDEDED] text-black" />
            <button type='submit' className='bg-transparent rounded-lg p-2 border-[#333232] border-2 py-2 px-6'>Subscribe</button>
            <ValidationError errors={state.errors} />
        </form>
    )
}