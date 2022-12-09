import Head from 'next/head'
import React from 'react'
import Container from '../components/layout/Container'
import Layout from '../components/layout/Layout'
import PageContentType from '../interfaces/pageContent'
import { getPageContentBySlug } from '../lib/api'
import markdownToHtml from '../lib/markdownToHtml'

type Props = {
  page: PageContentType
}

const about = ({ page }: Props) => {
  return (
    <Layout>
      <Head>
        <title>About | Nicolas Guarini</title>
        <meta name="og:title" content={page.title} />
      </Head>
      <Container>
          <h1 className='text-2xl font-bold wow fadeInUp'>about me</h1>
          <div className='pt-6 text-lightgray mb-20 wow fadeInUp' data-wow-delay='0.2s'>
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
  const page = getPageContentBySlug('about', [
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

export default about