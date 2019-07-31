import React from "react"

function Footer(props) {
  return (
    <footer>
      <p>©{new Date().getFullYear()} Edward Ezekiel</p>
      <p>
        Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a> and
        {` `}
        <a href="https://www.gatsbyjs.org">Netlify</a>
      </p>
      <p>
        Icons by
        <a href="https://www.flaticon.com/" title="Flaticon">
          {" "}
          Flaticon
        </a>,{" "}
        <a href="https://www.iconfinder.com/" title="IconFinder">
          {" "}
          IconFinder
        </a>
      </p>
    </footer>
  )
}

export default Footer
