import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import { editOnGithub } from "../../utils/global"

export default ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <h1 className="postShowPageTitle">{post.frontmatter.title}</h1>
      <Img
        className="postShowPageImage"
        fluid={post.frontmatter.hero.childImageSharp.fluid}
      />
      <article>
        <button>
          <a href={editOnGithub(post)} target="blank">
            Edit on Github
          </a>
        </button>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        hero {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      fields {
        slug
      }
    }
  }
`
