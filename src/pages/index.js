import React from "react"
import { graphql } from "gatsby"
import Helmet from "react-helmet"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostLink from "../components/PostLink"

function IndexPage({ data }) {
  return (
    <Layout>
      <SEO title="Home" />
      <Helmet>
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charset="utf-8"
        ></script>
      </Helmet>
      <section className="heroBanner">
        <h1>Hi, I'm Ed Ezekiel.</h1>
        <h2>
          I'm a frontend web developer and former attorney. Welcome to my web 
          development blog. Find me <Link to="/me" id="nav-me">around the web</Link>.
        </h2>
      </section>

      <section className="latestPosts">
        <h2>Recent Posts</h2>
        <div className="postLinks">
          {data.allMarkdownRemark.edges.slice(0, 5).map(({ node }, i) => (
            <PostLink node={node} key={i} />
          ))}
        </div>
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
