import React from "react"

function Footer(props) {
  return (
    <footer>
      <section>
        <h2>Made with{" "}<span className="emoji">💜</span>{" "}by Ed Ezekiel</h2>
      </section>
      <section>
        <h2>
          {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a> and
          {` `}
          <a href="https://www.gatsbyjs.org">Netlify</a>
        </h2>
        <p>
          Thank you{" "}
          <a href="https://fontawesome.com/license" target="blank">
            FontAwesome
          </a>{" "}
          for the amazing symbols.
        </p>
      </section>
    </footer>
  )
}

export default Footer
