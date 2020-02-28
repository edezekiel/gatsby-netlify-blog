import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

function ContactPage(props) {

  return (
    <Layout>
      <SEO title="Contact" />
      <article>
        <h2>Around the web</h2>
        <section className="contact-links">
        <ul>
          <li>
            Twitter: <a className="contact-link" href="https://twitter.com/EdwardAEzekiel">
              EdwardAEzekiel
            </a>
          </li>
          <li>
            GitHub: <a className="contact-link" href="https://github.com/edezekiel">
              edezekiel
            </a>
          </li>
          <li>
            LinkedIn: <a className="contact-link" href="https://www.linkedin.com/in/edezekiel/">
              edezekiel
            </a>
          </li>
          <li>
            Email: <a className="contact-link" href="mailto: ed.a.ezekiel@gmail.com">
              ed.a.ezekiel@gmail.com
            </a>
          </li>
        </ul>
        </section>
      </article>

      <article>
        <h2>About Me</h2>

        <p>
          I live in Memphis, TN with my wife, daughter, and two dogs (go Grizz!). I work at <a href="https://www.ubiquisoft.com/">Ubiquisoft</a> as 
          a full-stack software developer.
        </p>

        <p>
          My passion for coding began at a legal tech company. I started working
          there as an attorney, but steadily got hooked on programming.
        </p>

        <p>
          In 2018 I enrolled in Flatiron's immersive software engineering
          bootcamp. It was an incredible experience where I learned JavaScript,
          React, Redux, Ruby, and Rails. I also got my first taste of peer
          programming and agile software development.
        </p>
      </article>
    </Layout>
  )
}

export default ContactPage
