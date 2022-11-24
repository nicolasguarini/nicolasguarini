import React from 'react'
import Layout from '../components/layout/Layout'

const contact = () => {
  return (
    <Layout>
        <div className="container md:max-w-[80%] pt-32 m-auto p-5">
            <h1 className='text-2xl font-bold'>say hello 👋</h1>
            <div className='max-w-full md:max-w-[80%] lg:max-w-[60%]'>
                <p className='text-lightgray pt-5'>
                    If you have an interesting idea, a project that you would like to start
                    but you don't know where to start, if you want to ask me anything, or if
                    you just want to say hello, contact me!
                </p>
            </div>

            <form action="POST" className='mt-10'>
                <label htmlFor="name" className='text-lightgray font-normal block'>Name:</label>
                <input type="text" name='name' className='border-b-2 border-white bg-black w-full block h-10 p-2 mt-2'/>

                <label htmlFor="email" className='text-lightgray font-normal mt-6 block'>Email:</label>
                <input type="email" name='email' className='border-b-2 border-white bg-black w-full block h-10 p-2 mt-2'/>

                <label htmlFor="message" className='text-lightgray font-normal mt-6 block'>Message:</label>
                <textarea name='message' rows={7} className='border-b-2 border-white bg-black w-full block p-2 mt-2 '></textarea>

                <button type="submit" className='tracking-widest uppercase border py-4 px-6 mt-8'>send message</button>
            </form>
        </div>
    </Layout>
  )
}

export default contact