import Link from 'next/link'
import React from 'react'
import BlockGitHubIcon from './icons/BlockGitHubIcon'
import RightArrowIcon from './icons/RightArrowIcon'
import VerticalDivider from './icons/VerticalDivider'
import Project from './Project'

const PersonalProjects = () => {
  return (
    <div className='max-w-6xl m-auto p-7 mb-10'>
        <h1 className='text-xl text-center font-semibold'>personal projects:</h1>

        <VerticalDivider />

        <div className='grid grid-cols-1 md:grid-cols-2 md:gap-x-10 lg:gap-x-20 gap-y-12'>
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
        </div>

      <BlockGitHubIcon />

        <div className="flex justify-center">
          <Link className='text-sm pt-3' href="https://github.com/nicolasguarini">
            <span className='underline'>complete list</span>
            <RightArrowIcon />
          </Link>
        </div>
    </div>
  )
}

export default PersonalProjects