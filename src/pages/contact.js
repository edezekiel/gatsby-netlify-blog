import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

function ContactPage(props) {
  return (
    <Layout>
      <SEO title="Contact" />
      <h1>Contact</h1>
      <section className="contact-links">
        <p>Let's stay in touch!</p>
        <p>
          I'm on{" "}
          <a className="contact-link" href="https://twitter.com/EdwardAEzekiel">
            Twitter
          </a>
          ,{" "}
          <a className="contact-link" href="https://github.com/edezekiel">
            Github
          </a>
          , and{" "}
          <a
            className="contact-link"
            href="https://www.linkedin.com/in/edezekiel/"
          >
            LinkedIn
          </a>
          .
        </p>
        <p>
          You can also email me at{" "}
          <a className="contact-link" href="mailto: ed.a.ezekiel@gmail.com">
            ed.a.ezekiel@gmail.com
          </a>
        </p>
      </section>
    </Layout>
  )
}

export default ContactPage
