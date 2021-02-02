import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import ReactWOW from 'react-wow'

const Post = ({data}) => {
    const post = data.markdownRemark
    return(
        <Layout>
            <div className="container">
                <div className="whitespace" />
                <div className="hero-content">
                  <br /><br />
                  <div className="row">
                    <div className="col-lg-12">
                      <br />

                      <ReactWOW animation="fadeInUp" delay="0.3">
                        <h1>
                          <a href={post.frontmatter.projectLink} style={{textDecoration: "none", color: "white"}}>
                            {post.frontmatter.title}
                          </a>
                        </h1>
                      </ReactWOW>
                      

                      <br /><br />
                      
                      
                      <div className="row">
                        <ReactWOW animation="fadeInUp" delay="0.4s">
                          <div className="col-lg-4">
                            <p>service :</p>
                            <h6>{post.frontmatter.service}</h6>
                          </div>
                        </ReactWOW>
                       
                        <ReactWOW animation="fadeInUp" delay="0.6s">
                          <div className="col-lg-4">
                            <p>started :</p>
                            <h6>{post.frontmatter.started}</h6>
                          </div>
                        </ReactWOW>
                        

                        <ReactWOW animation="fadeInUp" delay="0.8s">
                          <div className="col-lg-4">
                            <p >completed :</p>
                            <h6 >{post.frontmatter.completed}</h6>
                          </div>
                        </ReactWOW>
                      </div>

                      <br />

                      <ReactWOW animation="fadeInUp" delay="1.0s">
                        <p><div dangerouslySetInnerHTML={{__html: post.html}} /></p>
                      </ReactWOW>
                      

                    </div>
                  </div>
                </div>
                <br /><br />
                <div className="whitespace"/>
            </div>
        </Layout>
    )
}

export const query = graphql`
query($slug: String!) {
  markdownRemark(fields: { slug: { eq: $slug } }) {
    html
    frontmatter {
      title
      projectLink
      started
      completed
      service
    }
  }
}
`

export default Post

