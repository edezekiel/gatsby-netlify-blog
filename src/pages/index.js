import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostLink from "../components/PostLink"

function IndexPage({ data }) {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi, I'm Ed Ezekiel</h1>
        <p className="headingCaption">
          I'm a full stack web developer with a passion for solving problems.
          With experience in JavaScript, React, and Ruby on Rails and a
          background in law, I discovered web development through working at a
          legal tech startup.
        </p>
      <section className="latestPosts">
        <h2>Latest Posts</h2>
        {data.allMarkdownRemark.edges.slice(0, 5).map(({ node }, i) => (
          <PostLink node={node} />
        ))}
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
          excerpt
        }
      }
    }
  }
`

export default IndexPage
