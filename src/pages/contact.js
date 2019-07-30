import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

function ContactPage(props) {
  return (
    <Layout>
      <SEO title="Contact" />
      <h1>Contact</h1>

      <section className="subscribe">Subscribe</section>

      <section className="contactIcons">
        <p>
          <a href="https://twitter.com/EdwardAEzekiel">Twitter</a>
        </p>
        <p>
          <a href="https://github.com/edezekiel">Github</a>
        </p>
        <p>
          <a href="https://www.linkedin.com/in/edezekiel/">LinkedIn</a>
        </p>
        <p>
          Or send me an email at{" "}
          <a href="mailto: ed.a.ezekiel@gmail.com">ed.a.ezekiel@gmail.com</a>
        </p>
      </section>
    </Layout>
  )
}

export default ContactPage
