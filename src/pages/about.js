import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import ReactWOW from 'react-wow'

const About = () => {
    return(
        <Layout>
            <SEO 
                title="About"
            />
            <div className="whitespace"></div>

            <div className="container">
                <div className="hero-content">
                    <br /> <br />
                    <div className="row">
                        <div className="col-lg-12">
                            <ReactWOW animation="fadeInUp" delay="0.4s">
                                <h3>about me.</h3> 
                            </ReactWOW>
                            <br />

                            <ReactWOW animation="fadeInUp" delay="0.6s">
                                <p>
                                    Hi, I'm Nicolas and I'm a 19 years old developer.
                                    I have always been passionate about computer science, ever since I was a child, I tried the historic Atari 2600, and love broke out.
                                    I studied at I.S.I.S. J.M. Keynes in Varese, and now i'm studying Computer Science at "Università degli Studi dell'Insubria".
                                </p> 
                            </ReactWOW>
                            
                            <ReactWOW animation="fadeInUp" delay="0.8s">
                                <p>
                                    I studied the latest web technologies like react, vue.js, django, node.js, express.js, flask and other static site generators such Gatsby.js and Hugo. 
                                    While in the desktop environment I am still studying C ++ with the Qt library, C # and python. 
                                    Lately I've also been entering the world of mobile, with java, react-native and flutter.
                                </p>
                            </ReactWOW>

                            <ReactWOW animation="fadeInUp" delay="0.9s">
                                <p>
                                    Currently i'm studying the MERN Stack (MongoDB, Express, React, Node.js), which I am finding extremely interesting and is making me passionate about the world of the backend
                                </p>
                            </ReactWOW>
                            
                            <div className="whitespace"></div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default About