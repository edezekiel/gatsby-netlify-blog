import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

function ContactPage(props) {
  const data = useStaticQuery(graphql`
    query {
      twitterIcon: file(relativePath: { eq: "twitterIcon.png" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      linkedInIcon: file(relativePath: { eq: "linkedInIcon.png" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      githubIcon: file(relativePath: { eq: "githubIcon.png" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      emailIcon: file(relativePath: { eq: "emailIcon.png" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Contact" />
      <h1>Contact</h1>

      <section className="subscribe">
        Subscribe
      </section>

      <section className="contactIcons">
        <a href="https://twitter.com/EdwardAEzekiel">
          <Img fadeIn={true} fixed={data.twitterIcon.childImageSharp.fixed} />
        </a>
        <a href="https://github.com/edezekiel">
          <Img fadeIn={true} fixed={data.githubIcon.childImageSharp.fixed} />
        </a>
        <a href="https://www.linkedin.com/in/edezekiel/">
          <Img fadeIn={true} fixed={data.linkedInIcon.childImageSharp.fixed} />
        </a>
        <a href="mailto: ed.a.ezekiel@gmail.com">
          <Img fadeIn={true} fixed={data.emailIcon.childImageSharp.fixed} />
        </a>
      </section>
    </Layout>
  )
}

export default ContactPage
