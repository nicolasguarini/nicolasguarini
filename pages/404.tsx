import Head from 'next/head'
import React from 'react'

const FourOhFour = () => {
  return (
    <div className='h-screen w-screen flex justify-center items-center text-md md:text-lg'>
        <Head>
          <title>404 - this page could not be found</title>
          <meta name="robots" content="noindex, nofollow" />
        </Head>
        <span className='pr-5 mr-5 border-r'>404</span>this page could not be found
    </div>
  )
}

export default FourOhFour