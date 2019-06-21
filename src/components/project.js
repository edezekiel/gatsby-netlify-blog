import React from "react"

function Project(props) {
  return (
    <a href={props.project.link}>
      <div className="projectCard">
        <img className="projectImage" src={props.project.img} />
        <div className="overlay">
          <h3>{props.project.title}</h3>
          <p>{props.project.description}</p>
        </div>
      </div>
    </a>
  )
}

export default Project
