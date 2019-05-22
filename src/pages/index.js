import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Page Header</h1>
    <p>Welcome to your new Gatsby site.</p>
    <section>
      <p>{data.allMarkdownRemark.totalCount} Posts</p>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <article key={node.id}>
          <h3>{node.frontmatter.title}</h3>
          <p>{node.frontmatter.date}</p>
          <p>{node.excerpt}</p>
        </article>
      ))}
    </section>
  </Layout>
)


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
          excerpt
        }
      }
    }
  }
`

export default IndexPage
