import Head from 'next/head'
import React from 'react'
import Container from '../components/layout/Container'
import Layout from '../components/layout/Layout'

const about = () => {
  return (
    <Layout>
      <Head>
        <title>About | Nicolas Guarini</title>
        <meta name="og:title" content="About | Nicolas Guarini" />
      </Head>
      <Container>
          <h1 className='text-2xl font-bold'>about me</h1>
          <p className='pt-6 text-lightgray'>
              Hi, I'm Nicolas and I'm a 21 years old developer. I have always been passionate about computer science, ever since I was a
              child, I tried the historic Atari 2600, and love broke out. I studied at I.S.I.S. J.M. Keynes in Varese, and now i'm
              studying for getting a Bachelor Degree in Computer Science at University of Insubria.
              <br /><br />
              I studied the latest web technologies like react, vue.js, django, node.js, express.js, flask and other static site
              generators such Gatsby.js and Hugo. While in the desktop environment I am still studying C ++ with the Qt library, C # and
              python. Lately I've also been entering the world of mobile, with java, react-native and flutter.
              <br /><br />
              Currently i'm studying the MERN Stack (MongoDB, Express, React, Node.js), which I am finding extremely interesting and is
              making me passionate about the world of the backend, in particular the development from scratch of ecommerce websites using
              these technologies.
          </p>
      </Container>
    </Layout>
  )
}

export default about