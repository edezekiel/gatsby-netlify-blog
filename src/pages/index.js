import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostLink from "../components/PostLink"

function IndexPage({ data }) {
  return (
    <Layout>
      <SEO title="Home" />
      <section className="skinny">
        <section className="heroBanner">
          <h1>Hi, I'm Ed.</h1>
          <h2 className="headingCaption">
            Welcome to my corner of the internet.{" "}
            <span className="emoji">🚀</span>
          </h2>
        </section>

        <section className="latestPosts">
          <h2>Latest Posts</h2>
          <div className="postLinks">
            {data.allMarkdownRemark.edges.slice(0, 5).map(({ node }, i) => (
              <PostLink node={node} />
            ))}
          </div>
        </section>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMM, YYYY")
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default IndexPage
