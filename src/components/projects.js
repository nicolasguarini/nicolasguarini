import React from 'react'
import { useStaticQuery,graphql } from 'gatsby'
import { Link } from 'gatsby'

const Projects = () => {
    const data = useStaticQuery(
      graphql`
      query {
        allMarkdownRemark(sort: {order: DESC, fields: frontmatter___started}) {
          edges {
            node {
              excerpt
              frontmatter {
                title
                started
                service
                projectLink
                preview
                completed
              }
              fields{
                slug
              }
            }
          }
        }
      }
      `
    )
    
    return(
        <div className="container-fluid">
            <br /><br /><br />

            <h6>My projects:</h6>

            <div className="vertical"></div>
            <br />

            <div className="whitespace"></div>
            <div className="whitespace"></div>

            {data.allMarkdownRemark.edges.reverse().map(({node}) => (
              <Link to={node.fields.slug} className="project-list" style={{textDecoration: "none", color: "white"}}>
                <h4 className="project-list-item wow fadeInUp">{node.frontmatter.title}</h4>
               
                <h6 className="project-list-item-description wow fadeInUp">{node.frontmatter.preview}</h6>
                <br /><br />
              </Link>
            ))}

            <br />
            <br />
            <br />
            
            <h6 className="project-list-item-description wow fadeInUp" style={{color: "white", fontWeight: "bold"}}>Visit my <a href="https://github.com/nicolasguarini/" className="no-dec">GitHub</a> for a complete list</h6>
            <br /><br />

            <div className="whitespace"></div>
        </div>
    )
}

export default Projects