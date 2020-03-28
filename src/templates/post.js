import React from 'react'
import Layout from '../components/layout'

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

                      <h1 className="wow fadeInUp" data-wow-delay="1s">
                        <a href={post.frontmatter.projectLink} style={{textDecoration: "none", color: "white"}}>
                          {post.frontmatter.title}
                        </a>
                      </h1>

                      <br /><br />
                      
                      <div className="row">
                        <div className="col-lg-4">
                          <p className="wow fadeInUp" data-wow-delay="0.5s">service :</p>
                          <h6 className="wow fadeInUp" data-wow-delay="0.6s">{post.frontmatter.service}</h6>
                        </div>

                        <div className="col-lg-4">
                          <p className="wow fadeInUp" data-wow-delay="0.5s">started :</p>
                          <h6 className="wow fadeInUp" data-wow-delay="0.6s">{post.frontmatter.started}</h6>
                        </div>

                        <div className="col-lg-4">
                          <p className="wow fadeInUp" data-wow-delay="0.5s">completed :</p>
                          <h6 className="wow fadeInUp" data-wow-delay="0.6s">{post.frontmatter.completed}</h6>
                        </div>
                      </div>

                      <br />

                      <p className="wow fadeInUp" data-wow-delay="1.1s"><div dangerouslySetInnerHTML={{__html: post.html}} /></p>

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

