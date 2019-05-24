import React from "react"

const Footer = () => (
  <footer>
  <section>
    <h2>Made by Ed Ezekiel</h2>
  </section>
    <section>
      <h2>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </h2>
    </section>
  </footer>
)

export default Footer
