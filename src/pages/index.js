import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

function IndexPage({ data }) {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi, I'm Ed Ezekiel</h1>
      <p>
        I'm a full stack web developer with a passion for solving problems. With
        experience in JavaScript, React, and Ruby on Rails and a background in
        law, I discovered web development through working at a legal tech startup.
      </p>

      <section id="latest-posts">
        <h2>Latest Blog Posts:</h2>
        {data.allMarkdownRemark.edges.slice(0, 5).map(({ node }, i) => (
          <Link to={node.fields.slug} slug={node.fields.slug} key={i}>
            <h3 className="post-index">
              {node.frontmatter.title}
            </h3>
          </Link>
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
