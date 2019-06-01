import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

import { editOnGithub } from '../../utils/global'

export default ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <article id="post-show-page">
        <h1>{post.frontmatter.title}</h1>
        <button><a href={editOnGithub(post)} id="edit-on-github" target="blank">Edit on Github</a></button>
        <div dangerouslySetInnerHTML={{__html: post.html}} />
      </article>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: {slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
      fields {
        slug
      }
    }
  }
`
