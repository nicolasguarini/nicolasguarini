import React from 'react'
import ContactForm from '../components/contactForm'
import Layout from '../components/layout'
import SEO from '../components/seo'

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
                            <h3 className="wow fadeInUp" data-wow-delay="1s">say hello <span role="img">👋</span></h3><br />
                            <p className="wow fadeInUp" data-wow-delay="1.2s">If you have an interesting idea, a project that you would like to start but you don't know where to start, if you want to ask me anything, or if you just want to say hello, contact me!</p>
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