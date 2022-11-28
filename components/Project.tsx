import Link from 'next/link'
import React from 'react'

type Props = {
  title: string
  excerpt: string
  slug: string
}

const Project = ({ title, excerpt, slug }: Props) => {
  return (
    <div>
        <Link href={`/projects/${slug}`}>
          <h2 className='text-lg pb-2'>{title}</h2>
          <p className='text-lightgray text-sm'>
              {excerpt}
          </p>
        </Link>
    </div>
  )
}

export default Project