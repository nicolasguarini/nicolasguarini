import React from 'react'
import { useStaticQuery,graphql } from 'gatsby'
import { Link } from 'gatsby'
import ReactWOW from 'react-wow'

const Projects = () => {
    const data = useStaticQuery(
      graphql`
      query {
        allMarkdownRemark(sort: {order: DESC, fields: fields___slug}) {
          edges {
            node {
              excerpt
              frontmatter {
                title
                started
                service
                projectLink
                preview
                finished
                date
              }
              fields {
                slug
              }
              id
            }
          }
        }
      }
      
      
      `
    )
    
    return(
        <div className="container-fluid">
            <br /><br /><br />

            <h6 style={{fontSize: "125%"}}>My projects:</h6>

            <div className="vertical"></div>
            <br />

            <div className="whitespace"></div>
            <div className="whitespace"></div>

            <ReactWOW animation="fadeInUp" delay="0.3s">
              {data.allMarkdownRemark.edges.map(({node}) => (
                <Link to={node.fields.slug} className="project-list" style={{textDecoration: "none", color: "white"}}>
                  <ReactWOW animation='fadeInUp'>
                    <h4 className="project-list-item">{node.frontmatter.title}</h4>
                  </ReactWOW>
                  
                  <ReactWOW animation='fadeInUp'>
                    <h6 className="project-list-item-description">{node.frontmatter.preview}</h6>
                  </ReactWOW>
                  
                  <br /><br />
                </Link>
              ))}
            </ReactWOW>
            

            <br />
            <br />
            <br />
            <ReactWOW animation='fadeInUp'>
            <h6 className="project-list-item-description wow fadeInUp" style={{color: "white", fontWeight: "bold"}}>Visit my <a href="https://github.com/nicolasguarini/" className="no-dec">GitHub</a> for a complete list</h6>
            </ReactWOW>
            
            <br /><br />

            <div className="whitespace"></div>
        </div>
    )
}

export default Projects