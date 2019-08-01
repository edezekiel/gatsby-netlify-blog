import React from "react"

function Footer(props) {
  return (
    <footer>
      <p>©{new Date().getFullYear()} Edward Ezekiel</p>
      <p>
        <a href="https://github.com/edezekiel/gatsby-netlify-blog">
          Source Code
        </a>
      </p>
      <p>
        Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </p>
      <p>
        Hosted by
        {` `}
        <a href="https://www.gatsbyjs.org">Netlify</a>
      </p>
      <p>
        Syntax Highlighting by <a href="https://prismjs.com/">Prism</a>
      </p>
      <p>
        Icons by
        <a href="https://www.flaticon.com/" title="Flaticon">
          {" "}
          Flaticon
        </a>
        ,{" "}
        <a href="https://www.iconfinder.com/" title="IconFinder">
          {" "}
          IconFinder
        </a>
      </p>
    </footer>
  )
}

export default Footer
