import React from "react"

function Footer(props) {
  return (
    <footer>
      <p>©{new Date().getFullYear()} {`\n`}Edward Ezekiel</p>
      <p>
        <a href="https://github.com/edezekiel/gatsby-netlify-blog">
          Source Code
        </a>
      </p>
      <p>
        Built with
        {` \n`}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </p>
      <p>
        Hosted by
        {` \n`}
        <a href="https://www.gatsbyjs.org">Netlify</a>
      </p>
    </footer>
  )
}

export default Footer
