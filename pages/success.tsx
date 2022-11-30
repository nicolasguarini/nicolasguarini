import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import RightArrowIcon from '../components/icons/RightArrowIcon'
import Layout from '../components/layout/Layout'

const FourOhFour = () => {
  return (
    <Layout>
        <div className='h-screen flex justify-center items-center text-md md:text-lg'>
            <Head>
                <title>Success! | Nicolas Guarini</title>
                <meta name="robots" content="noindex, nofollow" />
            </Head>
            <div>
                <span className='pr-3'>Success!</span>Form successfully submitted!

                <Link className='text-sm block text-center mt-5' href="/">
                    <span className='underline'>back to homepage</span>
                    <RightArrowIcon />
                </Link>
            </div>
            
            
        </div>
    </Layout>
    
  )
}

export default FourOhFour