import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import Layout from '../../components/layout/Layout'
import ProjectType from '../../interfaces/project'
import { getAllProjects, getProjectBySlug } from '../../lib/api'
import markdownToHtml from '../../lib/markdownToHtml'
import FourOhFour from '../404'
import markdownStyles from '../../components/markdown-styles.module.css'

type Props = {
    project: ProjectType
}

export default function Post({ project }: Props){
    const router = useRouter()

    if (!router.isFallback && !project?.slug) {
        return <FourOhFour />
    }

    return (
        <Layout>
            <div className='container md:max-w-[80%] pt-32 m-auto p-5'>
                <h1 className='text-4xl font-bold mt-10'>
                    <Link href={project.link} className='underline'>{project.title}</Link>
                </h1>
    
                <div className="grid grid-cols-2 md:grid-cols-4 mt-10">
                    <div className='col-span-2 mb-4 md:mb-0'>
                        <div className='text-lightgray'>service :</div>
                        <div className='mt-2'>{project.service}</div>
                    </div>
                    <div className='col-span-1'>
                        <div className='text-lightgray'>started :</div>
                        <div className='mt-2'>{project.started}</div>
                    </div>
                    <div className='col-span-1'>
                        <div className='text-lightgray'>finished :</div>
                        <div className='mt-2'>{project.finished}</div>
                    </div>
                </div>
    
                <div className='text-lightgray mt-8'>
                    <div 
                        className={markdownStyles['markdown']}
                        dangerouslySetInnerHTML={{__html: project.content}}
                    />
                </div>
            </div>
        </Layout>
    )
}

type Params = {
    params: {
        slug: string
    }
}

export async function getStaticProps({ params }: Params){
    const project = getProjectBySlug(params.slug, [
        'title', 
        'slug', 
        'started',
        'finished',
        'service',
        'content',
        'excerpt',
        'link'
    ])

    const content = await markdownToHtml(project.content || '')

    return {
        props: {
            project: {
                ...project,
                content,
            },
        },
    }
}

export async function getStaticPaths() {
    const projects = getAllProjects(['slug'])

    return {
        paths: projects.map((project) => {
            return {
                params: {
                    slug: project.slug,
                },
            }
        }),
        fallback: false
    }
}
