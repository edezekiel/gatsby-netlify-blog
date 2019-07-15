import React from "react"

function Footer(props) {
  return (
    <footer>
      <section>
        <h2>
          Made with{" "}
          <span className="emoji" role="img" aria-label="emoji">
            ❤️
          </span>{" "}
          by Ed Ezekiel
        </h2>
      </section>
      <section>
        <h2>
          {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a> and
          {` `}
          <a href="https://www.gatsbyjs.org">Netlify</a>
        </h2>
        <div>
          Icons made by{" "}
          <a href="https://www.flaticon.com/authors/google" title="Google">
            Google
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>{" "}
          is licensed by{" "}
          <a
            href="http://creativecommons.org/licenses/by/3.0/"
            title="Creative Commons BY 3.0"
            target="_blank"
          >
            CC 3.0 BY
          </a>
        </div>
      </section>
    </footer>
  )
}

export default Footer
