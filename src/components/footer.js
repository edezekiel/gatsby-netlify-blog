import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

function Footer(props) {
  const data = useStaticQuery(graphql`
    query {
      github: file(relativePath: { eq: "github.png" }) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
      linkedin: file(relativePath: { eq: "linkedin.png" }) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
      twitter: file(relativePath: { eq: "twitter.png" }) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <footer>
      <a className="icon-link" href="https://twitter.com/EdwardAEzekiel">
        <Img fadeIn={true} fixed={data.twitter.childImageSharp.fixed} />
      </a>
      <a className="icon-link" href="https://github.com/edezekiel">
        <Img fadeIn={true} fixed={data.github.childImageSharp.fixed} />
      </a>
      <a className="icon-link" href="https://www.linkedin.com/in/edezekiel/">
        <Img fadeIn={true} fixed={data.linkedin.childImageSharp.fixed} />
      </a>
      <p>©{new Date().getFullYear()} Edward Ezekiel.</p>
      <p>
        Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a> and
        {` `}
        <a href="https://www.gatsbyjs.org">Netlify</a>.
      </p>
      <p>
        Icons by
        <a href="https://www.flaticon.com/" title="Flaticon">
          {" "}
          Flaticon
        </a>{" "}
        and
        <a href="https://www.iconfinder.com/" title="IconFinder">
          {" "}
          IconFinder
        </a>
      </p>
    </footer>
  )
}

export default Footer
