import React, { useState } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostLink from "../components/postlink"

function IndexPage(props) {
  const [currentTag, setCurrentTag] = useState(null)

  return (
    <Layout>
      <SEO title="Blog" />
      <div className="pageContainer">
        <h1>Posts: {currentTag === null ? "All" : `${currentTag}`}</h1>
        <section className="blogTags">
          <button onClick={() => setCurrentTag(null)}>All</button>
          {props.data.allMarkdownRemark.group.map(tag => (
            <button
              key={tag.fieldValue}
              value={tag.fieldValue}
              onClick={() => setCurrentTag(tag.fieldValue)}
              id="flex-item"
            >
              {tag.fieldValue}
            </button>
          ))}
        </section>

        <section>
          {props.data.allMarkdownRemark.edges.map(({ node }, i) => {
            if (!(currentTag === null)) {
              if (node.frontmatter.tags.includes(currentTag)) {
                return <PostLink node={node} key={i} />
              }
            } else {
              return <PostLink node={node} key={i} />
            }
          })}
        </section>
      </div>
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
            tags
          }
          fields {
            slug
          }
          excerpt
        }
      }
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`

export default IndexPage
