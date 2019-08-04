import React from "react"
import { graphql } from "gatsby"
import Helmet from "react-helmet"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostLink from "../components/PostLink"

import GitHubButton from "react-github-btn"

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
        <h1>Hi, I'm Ed</h1>
        <h2 className="headingCaption">
          I'm a full-stack software developer{" "}
          <span role="img" aria-label="wave">
            ⚙️
          </span>{" "}
          <span role="img" aria-label="wave">
            🌐
          </span>
          . Nice to meet you{" "}
          <span role="img" aria-label="wave">
            😀
          </span>.
        </h2>
      </section>

      <section className="social-buttons">
        <div>
          <a
            href="https://twitter.com/EdwardAEzekiel?ref_src=twsrc%5Etfw"
            className="twitter-follow-button"
            data-size="large"
            data-show-screen-name="false"
          ></a>
        </div>
        <div>
          <GitHubButton
            href="https://github.com/edezekiel"
            data-size="large"
            data-show-count="true"
            aria-label="Follow @edezekiel on GitHub"
          >
            Follow
          </GitHubButton>
        </div>
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
          I live in Memphis, TN with my wife, daughter, and two dogs. I work at
          Ubiquisoft as a front-end software developer.
        </p>

        <p>
          My passion for coding began at a legal tech company. I started working
          there as an attorney, but steadily got hooked on programming.
        </p>

        <p>
          In 2018 I enrolled in Flatiron's immersive software engineering
          bootcamp. It was an incredible experience. I learned JavaScript,
          React, Redux, Ruby, and Rails. I also got my first taste of peer
          programming and agile software development.
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
