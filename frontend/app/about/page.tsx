import Head from 'next/head'
import React from 'react'
import Container from '../../components/layout/Container'
import Layout from '../../components/layout/Layout'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'About',
    description: 'Descrizione',
  }

const About = () => {
  return (
    <Layout>
      <Head>
        <title>About | Nicolas Guarini</title>
      </Head>
      <Container>
          <h1 className='text-2xl font-bold wow fadeInUp'>about me</h1>
          <div className='pt-6 text-lightgray mb-20 wow fadeInUp' data-wow-delay='0.2s'>
            <div 
                className='prose prose-invert max-w-none m-auto text-gray'
            >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo enim assumenda voluptatem alias commodi error molestias harum, eum dolore autem omnis. Expedita quasi quibusdam odio doloremque at porro accusantium ut!
            </div>
          </div>
      </Container>
    </Layout>
  )
}

export default About