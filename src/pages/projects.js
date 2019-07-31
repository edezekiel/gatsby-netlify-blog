import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

function ProjectsPage(props) {
  const data = useStaticQuery(graphql`
    query {
      youtubeacademy: file(relativePath: { eq: "youtubeacademy.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      gotgame: file(relativePath: { eq: "gotgame.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      edezekielblog: file(relativePath: { eq: "edezekielblog.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      blocksaver: file(relativePath: { eq: "blocksaver.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      dailygif: file(relativePath: { eq: "dailygif.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      kaizoku: file(relativePath: { eq: "kaizoku.jpg" }) {
        childImageSharp {
          fluid {
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
      </section>
      <section className="projectsContainer">
        <Link className="projectCard" to="/posts/2019-03-06-YouTube-Academy.md">
          <Img
            fadeIn={true}
            fluid={data.youtubeacademy.childImageSharp.fluid}
          />
          <div className="projectCaption">
            <h3>YouTube Academy</h3>
            <p>
              Take YouTube instructional videos to the next level. Save and
              share notes.
            </p>
          </div>
        </Link>

        <Link className="projectCard" to="/posts/2019-03-14-GOT-Game.md">
          <Img fadeIn={true} fluid={data.gotgame.childImageSharp.fluid} />
          <div className="projectCaption">
            <h3>GOT Game</h3>
            <p>
              Test your Game of Thrones knowledge with this serverless React
              game.
            </p>
          </div>
        </Link>

        <Link
          className="projectCard"
          to="/posts/2019-02-06-Introducing-My-Upgraded-Blog.md"
        >
          <Img fadeIn={true} fluid={data.edezekielblog.childImageSharp.fluid} />
          <div className="projectCaption">
            <h3>Ed Ezekiel Blog (v1)</h3>
            <p>
              Full stack web app (React/Rails) to showcase my technical blog.
            </p>
          </div>
        </Link>

        <Link className="projectCard" to="/posts/2019-03-22-Smart-City-Hackathon.md">
          <Img fadeIn={true} fluid={data.blocksaver.childImageSharp.fluid} />
          <div className="projectCaption">
            <h3>BlockSaver</h3>
            <p>
              Geotag and report pedestrian safety issues using the blockchain.
            </p>
          </div>
        </Link>

        <Link
          className="projectCard"
          to="/posts/2018-12-07-Pair-Programming.md"
        >
          <Img fadeIn={true} fluid={data.dailygif.childImageSharp.fluid} />
          <div className="projectCaption">
            <h3>DailyGif</h3>
            <p>
              A fun app to upload gifs and scroll through a responsive feed.
            </p>
          </div>
        </Link>

        <Link
          className="projectCard"
          to="/posts/2018-11-24-Kaizoku-My-First-Ruby-Gem.md"
        >
          <Img fadeIn={true} fluid={data.kaizoku.childImageSharp.fluid} />
          <div className="projectCaption">
            <h3>Kaizoku</h3>
            <p>
              Command Line Interface to easily find the best ruby gem for the
              task.
            </p>
          </div>
        </Link>
      </section>
    </Layout>
  )
}

export default ProjectsPage
