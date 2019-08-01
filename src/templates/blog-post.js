import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Helmet from "react-helmet"
import SEO from "../components/seo"

import Layout from "../components/layout"
import { editOnGithub } from "../../utils/global"
import GitHubButton from "react-github-btn"

export default ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <Helmet>
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charset="utf-8"
        ></script>
      </Helmet>
      <h1 className="postShowPageTitle">{post.frontmatter.title}</h1>
      <Img
        className="postShowPageImage"
        fluid={post.frontmatter.cover_image.childImageSharp.fluid}
      />
      <section className="blog-post-social">
        <div>
          <GitHubButton
            href={editOnGithub(post)}
            target="blank"
            data-size="large"
            aria-label="Edit on GitHub"
          >
            Edit
          </GitHubButton>
        </div>
        <div>
          <a
            className="twitter-share-button"
            href="https://twitter.com/intent/tweet?text=Hello%20world"
            data-size="large"
            data-show-screen-name="false"
          >
            Tweet
          </a>
        </div>
      </section>

      <article>
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
        cover_image {
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
