import React from "react"
import Layout from '../components/layout'
import Hero from '../components/hero'
import Projects from '../components/projects'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO 
      title="Portfolio" 
    />
    <Hero text="Web and desktop developer." />
    <Projects />
  </Layout>
)

export default IndexPage
