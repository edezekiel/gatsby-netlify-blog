import React from "react"

const Project = props => {
  return (
    <div className="projectCard">
      <img className="projectImage" src={props.project.img} />
      <div className="overlay">
        <h3>{props.project.title}</h3>
        <p>{props.project.description}</p>
        <button>
          <a href={props.project.link}>Visit Project</a>
        </button>
      </div>
    </div>
  )
}

export default Project
