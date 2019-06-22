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
        <h2>Here are a few of my recent web projects.</h2>
        <h2>Want to see more?{" "}<Link to="/contact">Contact me</Link>.</h2>
      </section>
      <section className="projectsContainer">
        <a href="https://youtube-academy.netlify.com/OAuth" target="blank" className="projectCard">
          <Img fluid={data.firstProjectImage.childImageSharp.fluid} />
          <div className="projectCaption">
            <h3>YouTube Academy</h3>
            <p>Take YouTube instructional videos to the next level. Save and share notes.</p>
          </div>
        </a>
        <a href="https://got-game.netlify.com/" className="projectCard">
          <Img fluid={data.secondProjectImage.childImageSharp.fluid} />
          <div className="projectCaption">
            <h3>GOT Game</h3>
            <p>Test your Game of Thrones knowledge with this serverless React game.</p>
          </div>
        </a>
        <a href="#" className="projectCard">
          <Img fluid={data.secondProjectImage.childImageSharp.fluid} />
          <div className="projectCaption">
            <h3>Ed Ezekiel Blog (v1)</h3>
            <p>Full stack web app (React/Rails) to showcase my technical blog.</p>
          </div>
        </a>
        <a href="#" className="projectCard">
          <Img fluid={data.secondProjectImage.childImageSharp.fluid} />
          <div className="projectCaption">
            <h3>BlockSaver</h3>
            <p>Geotag and report pedestrian safety issues using the blockchain.</p>
          </div>
        </a>
        <a href="https://daily-gif.herokuapp.com/" className="projectCard">
          <Img fluid={data.secondProjectImage.childImageSharp.fluid} />
          <div className="projectCaption">
            <h3>DailyGif</h3>
            <p>A fun app to upload gifs and scroll through a responsive feed.</p>
          </div>
        </a>
        <a href="https://rubygems.org/gems/kaizoku/versions/0.1.3" className="projectCard">
          <Img fluid={data.thirdProjectImage.childImageSharp.fluid} />
          <div className="projectCaption">
            <h3>Kaizoku</h3>
            <p>Command Line Interface to easily find the best ruby gem for the task.</p>
          </div>
        </a>
      </section>
    </Layout>
  )
}

export default ProjectsPage
