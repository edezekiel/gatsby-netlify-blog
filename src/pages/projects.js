import React, { Component } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Project from "../components/project"

const projects = [
  { title: "first", img: "https://www.grouphealth.ca/wp-content/uploads/2018/05/placeholder-image-300x225.png", description: "todo", link: "/" },
  { title: "second", img: "https://www.grouphealth.ca/wp-content/uploads/2018/05/placeholder-image-300x225.png", description: "todo", link: "/" },
  { title: "third", img: "https://www.grouphealth.ca/wp-content/uploads/2018/05/placeholder-image-300x225.png", description: "todo", link: "/" },
  { title: "fourth", img: "https://www.grouphealth.ca/wp-content/uploads/2018/05/placeholder-image-300x225.png", description: "todo", link: "/" },
  { title: "fifth", img: "https://www.grouphealth.ca/wp-content/uploads/2018/05/placeholder-image-300x225.png", description: "todo", link: "/" },
  { title: "sixth", img: "https://www.grouphealth.ca/wp-content/uploads/2018/05/placeholder-image-300x225.png", description: "todo", link: "/" },
  { title: "seventh", img: "https://www.grouphealth.ca/wp-content/uploads/2018/05/placeholder-image-300x225.png", description: "todo", link: "/" },
]

export default class IndexPage extends Component {
  render() {
    return (
      <Layout>
        <SEO title={"Projects"} />
        <section className="projectHeader">
          <h1>My Recent Work</h1>
          <h2>
            Here are a few recent design projects. Want to see more?{" "}
            <a href="mailto:ed.a.ezekiel@gmail.com">Email me</a>.
          </h2>
        </section>
        <section className="projectsContainer">
          {projects.map(project => {
            return (<Project project={project} />)
          })}
        </section>
      </Layout>
    )
  }
}
