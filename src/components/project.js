import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

// import Image from "./image"
// <img className="projectImage" src={props.project.img} />

function Project(props) {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "first.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <a href={props.project.link}>
      <div>
        <Img fluid={data.placeholderImage.childImageSharp.fluid} />
        <h3>{props.project.title}</h3>
        <p>{props.project.description}</p>
      </div>
    </a>
  )
}

export default Project
