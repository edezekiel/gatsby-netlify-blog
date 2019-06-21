import React, { Component } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Project from "../components/project"

import { projects } from "../projects/projects.js"

function ProjectsPage() {
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
          return <Project project={project} />
        })}
      </section>
    </Layout>
  )
}

export default ProjectsPage
