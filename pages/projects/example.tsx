import Link from 'next/link'
import React from 'react'
import Layout from '../../components/layout/Layout'

const example = () => {
  return (
    <Layout>
        <div className='container md:max-w-[80%] pt-32 m-auto p-5'>
            <h1 className='text-4xl font-bold mt-10'><Link href="https://github.com" className='underline'>ralpholtreilpub.it</Link></h1>

            <div className="grid grid-cols-2 md:grid-cols-4 mt-10">
                <div className='col-span-2 mb-4 md:mb-0'>
                    <div className='text-lightgray'>service :</div>
                    <div className='mt-2'>web development (hugo)</div>
                </div>
                <div className='col-span-1'>
                    <div className='text-lightgray'>started :</div>
                    <div className='mt-2'>01 sep 2019</div>
                </div>
                <div className='col-span-1'>
                    <div className='text-lightgray'>completed :</div>
                    <div className='mt-2'>19 sep 2019</div>
                </div>
            </div>

            <p className='text-lightgray mt-8'>
                Ralph was the biggest customer I had and therefore the one I paid the most attention and attention to the
                smallest details. The website was created using the static site generator 'Hugo'. The NetlifyCMS
                administration panel was then connected to the site so that the customer can keep the site updated through a
                user-friendly interface. Everything is statically hosted on Netlify going to build a perfect JAM stack.
            </p>

            <img src="https://nicolasguarini.it/images/ralph/1.png" className='p-4 md:p-10' alt="" />
            <img src="https://nicolasguarini.it/images/ralph/2.png" className='p-4 md:p-10' alt="" />
            <img src="https://nicolasguarini.it/images/ralph/3.png" className='p-4 md:p-10' alt="" />
        </div>
    </Layout>
  )
}

export default example