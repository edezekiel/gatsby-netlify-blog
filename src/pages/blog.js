import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostLink from "../components/PostLink"

function IndexPage(props) {
  const [currentTag, setCurrentTag] = useState(null)

  useEffect(() => {}, [currentTag])

  return (
    <Layout>
      <SEO title="Blog" />
      <h2 className="blogIntro">
        This blog is about programming, web development, and my journey from
        practicing law to loving code.
      </h2>

      <h1>Posts: {currentTag === null ? "All" : `${currentTag}`}</h1>
      <section className="postTags">
        <button onClick={() => setCurrentTag(null)}>all</button>
        {props.data.allMarkdownRemark.group
          .sort((a, b) => b.totalCount - a.totalCount)
          .map(tag => (
            <button
              key={tag.fieldValue}
              value={tag.fieldValue}
              onClick={() => setCurrentTag(tag.fieldValue)}
            >
              {tag.fieldValue}
            </button>
          ))}
      </section>

      <section className="postLinks">
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
