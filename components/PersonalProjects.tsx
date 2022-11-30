import Link from 'next/link'
import React from 'react'
import BlockGitHubIcon from './icons/BlockGitHubIcon'
import RightArrowIcon from './icons/RightArrowIcon'
import VerticalDivider from './icons/VerticalDivider'

type Props = {
  children: React.ReactNode
}

const PersonalProjects = ({ children }: Props) => {
  return (
    <div className='max-w-6xl m-auto p-7 mb-16'>
        <h1 className='text-xl text-center font-semibold'>personal projects:</h1>

        <VerticalDivider />

        <div className='grid grid-cols-1 md:grid-cols-2 md:gap-x-10 lg:gap-x-20 gap-y-12'>
            {children}
        </div>

      <BlockGitHubIcon />

        <div className="flex justify-center wow fadeInUp" data-wow-delay='0.08s'>
          <Link className='text-sm pt-3' href="https://github.com/nicolasguarini">
            <span className='underline'>complete list</span>
            <RightArrowIcon />
          </Link>
        </div>
    </div>
  )
}

export default PersonalProjects