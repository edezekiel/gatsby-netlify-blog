import React, { useState } from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

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
                return (
                  <Link to={node.fields.slug} slug={node.fields.slug}>
                    <h3 className="post-index" key={i}>
                      {node.frontmatter.title}
                    </h3>
                    <p>{node.frontmatter.date}</p>
                    <p>{node.excerpt}</p>
                  </Link>
                )
              }
            } else {
              return (
                <Link to={node.fields.slug}>
                  <h3 className="post-index" key={node.id}>
                    {node.frontmatter.title}
                  </h3>
                  <p>{node.frontmatter.date}</p>
                  <p>{node.excerpt}</p>
                </Link>
              )
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
