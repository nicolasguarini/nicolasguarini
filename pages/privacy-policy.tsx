import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import Container from '../components/layout/Container'
import Layout from '../components/layout/Layout'
import PageContentType from '../interfaces/pageContent'
import { getPageContentBySlug } from '../lib/api'
import markdownToHtml from '../lib/markdownToHtml'
import FourOhFour from './404'

type Props = {
    page: PageContentType
}

const PrivacyPolicy = ({ page }: Props) => {
    const router = useRouter()

    if (!router.isFallback && !page?.slug) {
        return <FourOhFour />
    }

    return (
        <Layout>
            <Head>
                <title>{page.title}</title>
                <meta name="robots" content="noindex, nofollow" />
            </Head>
            <Container>
            <div className='text-lightgray mt-8 wow fadeInUp' data-wow-delay='0.32s'>
                    <div 
                        className='prose prose-invert max-w-none m-auto text-gray'
                        dangerouslySetInnerHTML={{__html: page.content}}
                    />
                </div>
            </Container>
        </Layout>
    )
}

export async function getStaticProps(){
    const page = getPageContentBySlug('privacy-policy', [
        'title',
        'slug',
        'content'
    ])

    const content = await markdownToHtml(page.content || '')

    return {
        props: {
            page: {
                ...page,
                content
            }
        }
    }
}

export default PrivacyPolicy