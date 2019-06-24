import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostLink from "../components/PostLink"

function IndexPage({ data }) {
  return (
    <Layout>
      <SEO title="Home" />
      <section className="heroBanner">
        <h1>Hi, I'm Ed.</h1>
        <h2 className="heroCaption">
          This site is about{" "}
          <a href="/blog">sharing ideas</a>
          ,{" "}
          <a href="/projects">open source work</a>
          , and{" "}
          <a href="/contact">building relationships</a>
          .
        </h2>
      </section>

      <section className="latestPosts">
        <h2>Latest Posts</h2>
        <div className="postLinks">
          {data.allMarkdownRemark.edges.slice(0, 5).map(({ node }, i) => (
            <PostLink node={node} key={i} />
          ))}
        </div>
      </section>

      <article className="aboutMe">
        <h2>About Me</h2>

        <p>
          I grew up in Maryland and I live in Memphis, TN. When I'm not
          programming, I'm probably cheering on the Memphis Grizzlies with my
          wife Farley, or playing with my dogs Buddy and Grace.
        </p>

        <p>
          My passion for coding began when I was working at UnitedLex. I managed
          document review projects involving millions of files. In order to
          streamline my workflow, I picked up computer skills like performing
          advanced database queries, writing excel programs, and creating
          virtual workspaces.
        </p>

        <p>
          I discovered macros, Visual Basic, and keyboard shortcuts that seemed
          like magic. Excel programming and querying was fun, but I became
          curious about the broader field of programming. Over the next two
          years I took more online lessons, learned bits about computer science,
          and started looking into bootcamps.
        </p>

        <p>
          In 2018, I ran into Flatiron's free online Coding Bootcamp Prep
          Course. I decided to follow my passion and I have been completely
          hooked on web development ever since.
        </p>
      </article>
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
