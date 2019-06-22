import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

function ProjectsPage(props) {
  const data = useStaticQuery(graphql`
    query {
      firstProjectImage: file(relativePath: { eq: "first.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      secondProjectImage: file(relativePath: { eq: "second.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      thirdProjectImage: file(relativePath: { eq: "third.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Projects" />
      <section className="projectHeader">
        <h1>My Recent Work</h1>
        <h2>
          Here are a few recent design projects. Want to see more?{" "}
          <a href="mailto:ed.a.ezekiel@gmail.com">Email me</a>.
        </h2>
      </section>
      <section className="projectsContainer">
        <Link to="#" className="projectCard">
          <Img fluid={data.firstProjectImage.childImageSharp.fluid} />
          <div className="projectCaption">
            <h3>First Project</h3>
            <p>Description goes here</p>
          </div>
        </Link>
        <Link to="#" className="projectCard">
          <Img fluid={data.secondProjectImage.childImageSharp.fluid} />
          <div className="projectCaption">
            <h3>Second Project</h3>
            <p>Description goes here</p>
          </div>
        </Link>
        <Link to="#" className="projectCard">
          <Img fluid={data.thirdProjectImage.childImageSharp.fluid} />
          <div className="projectCaption">
            <h3>Third Project</h3>
            <p>Description goes here</p>
          </div>
        </Link>
      </section>
    </Layout>
  )
}

export default ProjectsPage
