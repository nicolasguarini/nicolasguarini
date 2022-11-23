import Link from 'next/link'
import React from 'react'

const Project = () => {
  return (
    <div>
        <Link href='/projects/nicolasguarini'>
          <h2 className='text-lg pb-2'>nicolasguarini.it</h2>
          <p className='text-lightgray text-sm'>
              Data analysis report about Internet adoption
              around the world and how the price, speed and
              country's development affects this data.
          </p>
        </Link>
    </div>
  )
}

export default Project