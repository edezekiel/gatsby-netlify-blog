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
    }
  `)

  return (
    <Layout>
      <SEO title="Contact" />
      <h1>Contact</h1>

      <Img fadeIn={true} fixed={data.twitterIcon.childImageSharp.fixed} />

      <a href="#">Twitter</a>
      <a href="#">Github</a>
      <a href="#">LinkedIn</a>
      <a href="#">Email</a>
    </Layout>
  )
}

export default ContactPage
