import React from 'react'
import ContactForm from '../components/contactForm'
import Layout from '../components/layout'
import SEO from '../components/seo'
import ReactWOW from 'react-wow'

const Contact = () => {
    return(
        <Layout>
            <SEO 
                title="Contact Me"
            />
            <div className="whitespace"></div>

            <div className="container">
                <div className="hero-content">
                    <br /><br />

                    <div className="row">
                        <div className="col-lg-8">
                            <ReactWOW animation="fadeInUp" delay="0.1s">
                                <h3>say hello <span role="img" aria-label="hand">👋</span></h3><br />
                            </ReactWOW>
                            
                            <ReactWOW animation="fadeInUp" delay="0.3s">
                                <p>If you have an interesting idea, a project that you would like to start but you don't know where to start, if you want to ask me anything, or if you just want to say hello, contact me!</p>
                            </ReactWOW>
                            
                        </div>
                    </div>
                </div>
            </div>
            
            <div style={{width: "1110", float: "center !important",  margin: "auto"}}>
                <ContactForm />
            </div>

            <div className="whitespace"></div>
        </Layout>
    )
}

export default Contact