import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

function ContactPage(props) {
  return (
    <Layout>
      <SEO title="Contact" />
      <h1>Contact</h1>
        <a href="#">Twitter</a>
        <a href="#">Github</a>
        <a href="#">LinkedIn</a>
        <a href="#">Email</a>
    </Layout>
  )
}

export default ContactPage
