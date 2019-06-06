import React from "react"

const Project = props => {
  return (
    <div
      className="project"
      style={{ background: `url(${props.project.img})`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
    >
      <h3>{props.project.title}</h3>

      <p>{props.project.description}</p>
      <button>
        <a href={props.project.link}>Visit Project</a>
      </button>
    </div>
  )
}

export default Project
