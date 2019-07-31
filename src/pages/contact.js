import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

function ContactPage(props) {
  const data = useStaticQuery(graphql`
    query {
      github: file(relativePath: { eq: "github.png" }) {
        childImageSharp {
          fixed(width: 48, height: 48) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      linkedin: file(relativePath: { eq: "linkedin.png" }) {
        childImageSharp {
          fixed(width: 48, height: 48) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      twitter: file(relativePath: { eq: "twitter.png" }) {
        childImageSharp {
          fixed(width: 48, height: 48) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      email: file(relativePath: { eq: "email.png" }) {
        childImageSharp {
          fixed(width: 48, height: 48) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Contact" />
      <section className="contact-links">
        <a className="contact-link" href="https://twitter.com/EdwardAEzekiel">
          <Img fadeIn={true} fixed={data.twitter.childImageSharp.fixed} />
        </a>
        <a className="contact-link" href="https://github.com/edezekiel">
          <Img fadeIn={true} fixed={data.github.childImageSharp.fixed} />
        </a>
        <a
          className="contact-link"
          href="https://www.linkedin.com/in/edezekiel/"
        >
          <Img fadeIn={true} fixed={data.linkedin.childImageSharp.fixed} />
        </a>
        <a className="contact-link" href="mailto: ed.a.ezekiel@gmail.com">
          <Img fadeIn={true} fixed={data.email.childImageSharp.fixed} />
        </a>
      </section>
    </Layout>
  )
}

export default ContactPage
